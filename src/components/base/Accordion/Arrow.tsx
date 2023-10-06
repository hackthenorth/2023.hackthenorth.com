import React from "react";
import Icon, { IconProps } from "src/components/base/Icon";
import styled from "styled-components";

interface ArrowProps extends Omit<IconProps, "name"> {
  isOpen: boolean;
}

const IconNoOutline = styled(Icon)`
  border: none;
  outline: none;
`;

const Button = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const Arrow: React.FC<ArrowProps> = ({ isOpen, ...rest }) => (
  <Button>
    {isOpen ? (
      <IconNoOutline name="minus" width={24} height={24} {...rest} />
    ) : (
      <IconNoOutline name="plus" width={24} height={24} {...rest} />
    )}
  </Button>
);

export default Arrow;
