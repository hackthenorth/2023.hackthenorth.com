import React, { createContext } from "react";

interface RadioContextState {
  name: string | undefined;
  selected: string | undefined;
  onSelect: (value: string) => void;
  radioButtons: string[];
}

export enum ActionTypes {
  REGISTER = "REGISTER",
  SELECT = "SELECT",
}

export type Action =
  | {
      type: ActionTypes.REGISTER;
      payload: string;
    }
  | {
      type: ActionTypes.SELECT;
      payload: string;
    };

interface RadioContextProps {
  state: RadioContextState;
  dispatch: React.Dispatch<Action>;
}

interface RadioContextProviderProps {
  name: string;
  onSelect: (value: string) => void;
  defaultValue: string | undefined;
  children: React.ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  state: {
    name: "",
    selected: "",
    onSelect: () => {
      throw new Error(
        "Invariant failed. You should not use <RadioButton> outside a <RadioButtonGroup>"
      );
    },
    radioButtons: [],
  },
  dispatch: () => {},
};

export const RadioContext = createContext<RadioContextProps>(
  DEFAULT_CONTEXT_VALUE
);

RadioContext.displayName = "RadioContext";

export const reducer = (
  state: RadioContextState,
  action: Action
): RadioContextState => {
  switch (action.type) {
    case ActionTypes.REGISTER: {
      const { radioButtons } = state;
      const value = action.payload;
      return {
        ...state,
        radioButtons: [...radioButtons, value],
      };
    }
    case ActionTypes.SELECT: {
      const value = action.payload;
      return {
        ...state,
        selected: value,
      };
    }
    default:
      return state;
  }
};

type RadioContextProviderType = React.FC<RadioContextProviderProps>;
export const RadioContextProvider: RadioContextProviderType = ({
  name,
  onSelect,
  defaultValue,
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    name,
    selected: defaultValue,
    onSelect,
    radioButtons: [],
  });

  const contextValue = React.useMemo<RadioContextProps>(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </RadioContext.Provider>
  );
};
RadioContextProvider.displayName = "RadioContextProvider";
