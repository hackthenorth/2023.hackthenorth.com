import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div<{ open: boolean }>`
  border-radius: 5px 5px 0 0;
  margin-right: 10px;
  flex: 0;
  flex-direction: column;
  ${(props) =>
    props.open
      ? `
      min-width: 300px;
      max-height: 100vh;
      @media(max-width: 400px) {
        flex: 0 0 100vw;
        margin-right: 0;
      }
  `
      : ""}
`;

const Titlebar = styled.button`
  border-radius: 5px 5px 0 0;
  padding: 8px 15px;
  background: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #dfdfdfdf;
  cursor: pointer;
  width: 100%;
  display: block;
  text-align: left;
  margin-bottom: -1px;
  white-space: nowrap;
  flex: 0;
  &:hover,
  &:focus {
    outline: 0;
    border-color: #aaa;
  }
`;

const Content = styled.div`
  padding: 5px 15px;
  border: 1px solid #dfdfdfdf;
  margin-top: 1px;
  border-top-style: none;
  background: #fff;
  border-bottom-style: none;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  input,
  textarea,
  select,
  button,
  .button {
    margin-bottom: 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-style: none;
    padding: 5px 0px;
    border-radius: 0;
    font-size: 16px;
    font-family: San Francisco, Helvetica, Arial, sans-serif;
    border-bottom: 1px solid #dfdfdf;
    background: #fff;
  }
  input[type="submit"],
  button,
  .button {
    border-radius: 5px;
    border: 1px solid #dfdfdf;
    cursor: pointer;
    text-decoration: none;
    display: block;
    text-align: center;
    color: #000;
  }
  textarea {
    min-height: 70px;
  }
  input:focus,
  input:hover,
  textarea:focus,
  textarea:hover,
  select:focus,
  select:hover,
  button:focus,
  button:hover,
  .button:hover,
  .button:focus {
    border-color: #aaa !important;
    outline: 0;
  }
  input:disabled,
  textarea:disabled,
  select:disabled,
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

interface Props {
  name: string | React.ReactElement;
}

const Nub: React.FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => setOpen(!open), [open]);

  useEffect(() => {
    const parent = document.querySelector("#North--Organizer-Tools");
    // to pass tests
    if (parent) {
      parent.classList[
        Array.from(parent.children).some((child) => child.hasAttribute("open"))
          ? "add"
          : "remove"
      ]("open");
    }
  }, [open]);

  return (
    <Container open={open}>
      <Titlebar onClick={toggle}>{props.name}</Titlebar>
      {open && <Content>{props.children}</Content>}
    </Container>
  );
};

export default Nub;
