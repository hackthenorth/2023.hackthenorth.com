import React, { ReactNode, forwardRef, ComponentPropsWithoutRef } from "react";
import { TWShared } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { DefaultTheme, ThemeProps } from "styled-components";
import tw, { styled } from "twin.macro";

import { useRadioContext } from "./useRadioContext";
type RenderProps = (checked: boolean) => ReactNode;

// type Props = ComponentPropsWithoutRef<"button"> & {
//   variant?: Variant;
// };

type RadioButtonProps = ComponentPropsWithoutRef<"input"> & {
  /**
   * 	A string representing the value of the radio button.
   */
  value: string;
  /**
   * 	A render prop @https://reactjs.org/docs/render-props.html
   *    which exposes the checked attribute of the RadioButton
   */
  children?: RenderProps | ReactNode;
};

export type RadioButtonType = React.FC<RadioButtonProps>;

const RadioButtonInput = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const RadioButtonContainer = styled.div`
  white-space: nowrap;
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const RadioButton: RadioButtonType = (
  { className, value, disabled, children, ...rest },
  ref
) => {
  // More Info @https://github.com/stevejay/react-roving-tabindex
  const { name, tabIndex, focused, checked, onChange } = useRadioContext(
    disabled,
    value
  );

  return (
    <RadioButtonContainer>
      <RadioButtonInput
        type="radio"
        // ref={ref}
        checked={true}
        aria-checked={checked}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        tabIndex={tabIndex}
        {...rest}
      />
      {typeof children === "function"
        ? (children as RenderProps)(checked)
        : children}
    </RadioButtonContainer>
  );
};

RadioButton.displayName = "RadioButton";

export default RadioButton;
