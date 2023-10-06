import { useCallback, useContext, useEffect } from "react";

import { RadioContext, ActionTypes } from "../RadioButtonGroup/RadioContext";

interface ReturnType {
  tabIndex: number;
  focused: boolean;
  checked: boolean;
  onChange: () => void;
  name: string | undefined;
}

export const useRadioContext = (
  disabled: boolean | undefined,
  value: string
): ReturnType => {
  const { state, dispatch } = useContext(RadioContext);

  /**
   * Registers the RadioButton if enabled
   */
  useEffect(() => {
    if (disabled) {
      return;
    }
    dispatch({
      type: ActionTypes.REGISTER,
      payload: value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  const onChange = useCallback(() => {
    state.onSelect(value);
    dispatch({
      type: ActionTypes.SELECT,
      payload: value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const name = state.name;
  const selected = state.selected;
  const firstRadioButton = state.radioButtons && state.radioButtons[0];
  const checked = selected === value;
  const tabIndex =
    checked || (!selected && firstRadioButton === value) ? 0 : -1;
  const focused = !tabIndex;
  return { name, tabIndex, focused, checked, onChange };
};
