import React, { ComponentPropsWithoutRef } from "react";
import { TWShared } from "src/styles";
import { mediaQueries } from "src/utils/responsive";
import { DefaultTheme, ThemeProps } from "styled-components";
import tw, { styled } from "twin.macro";

import { RadioContextProvider } from "./RadioContext";

type RadioButtonGroupProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The name of each of the RadioButtons in the RadioButtonGroup
   */
  name: string;
  /**
   * The default value of the selected RadioButton in the RadioButtonGroup
   */
  defaultValue?: string;
  /**
   * Callback for when the radioButton value is changed
   */
  onSelect: (value: string) => void;
};

export type RadioButtonGroupType = React.FC<RadioButtonGroupProps>;

const RadioButtonGroup: RadioButtonGroupType = ({
  className,
  name,
  defaultValue,
  onSelect,
  children,
  ...rest
}) => (
  <StyledRadioButtonGroup className={className} {...rest}>
    <RadioContextProvider
      name={name}
      defaultValue={defaultValue}
      onSelect={onSelect}
    >
      {children}
    </RadioContextProvider>
  </StyledRadioButtonGroup>
);

const StyledRadioButtonGroup = styled.div<
  RadioButtonGroupType & ThemeProps<DefaultTheme>
>`
  ${tw`flex justify-center align-items[center] py-16 px-64 cursor-pointer outline-none`}
  /* ${TWShared.focus}
  ${TWShared.hover}
  ${TWShared.disabled} */

  &:focus {
    outline: none;
  }

  ${mediaQueries.medium} {
    ${tw`py-8 px-48 justify-start overflow-x-scroll`}
  }

  ${mediaQueries.largeMobile} {
    ${tw`py-8 px-32 justify-start overflow-x-scroll`}
  }

  ${mediaQueries.smallMobile} {
    ${tw`py-4 px-16 overflow-x-scroll`}
  }
`;

export default RadioButtonGroup;
