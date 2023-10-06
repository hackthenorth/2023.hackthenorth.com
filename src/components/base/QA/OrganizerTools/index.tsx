import React from "react";
import styled from "styled-components";

import BugNub, { BugNubProps } from "./Nubs/BugNub";

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  font-family: San Francisco, Helvetica, Arial, sans-serif;
  font-size: 14px;
  right: 0px;
  align-items: flex-end;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 400px) {
    &.open > div:not([open]) {
      display: none;
    }
  }
`;

interface Props {
  bugnub?: BugNubProps;
  organizerOnly?: boolean;
}

const OrganizerTools: React.FC<Props> = (props) => {
  return (
    <Container id="North--Organizer-Tools">
      {props.bugnub && <BugNub {...props.bugnub} />}
      {/* <AuthNub /> */}
    </Container>
  );
};

export default OrganizerTools;
