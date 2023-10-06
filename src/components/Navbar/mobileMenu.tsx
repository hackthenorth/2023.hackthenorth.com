import { trackGoal } from "fathom-client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import tw, { styled } from "twin.macro";
import "styled-components/macro";

import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { TWText } from "src/styles";
import { useWindowSize } from "src/utils";

// import { Button } from "../base";
import {
  SECTIONS,
  NAVBAR_HEIGHT_PX,
  NAVBAR_COLOR,
  mobileBackgroundVariants,
  mobileListVariants,
  mobileItemVariants,
  WEBSITE2022URL,
  NavBarProps,
} from "./constants";

export interface TMobileMenuProps extends NavBarProps {
  isHidden: boolean;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

// Credits: https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx
const MobileMenu: React.FC<TMobileMenuProps> = ({
  isHidden,
  isOpen,
  toggleIsOpen,
  notMainPage,
}) => {
  const containerRef = useRef(null);
  const { windowHeight } = useWindowSize();

  return (
    <Container
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={windowHeight}
      ref={containerRef}
      css={[isOpen ? tw`pointer-events-auto` : tw`pointer-events-none`]}
    >
      <Background variants={mobileBackgroundVariants}>
        <List variants={mobileListVariants}>
          {!notMainPage &&
            Object.entries(SECTIONS).map(([id, name], i) => {
              return (
                <ListItem
                  key={i}
                  variants={mobileItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  css={[
                    isOpen
                      ? tw`pointer-events-auto`
                      : tw`pointer-events-none select-none`,
                  ]}
                >
                  <a
                    key={id}
                    href={`/#${id}`}
                    onClick={() => toggleIsOpen()} // menu should close after section is clicked
                    tabIndex={isHidden ? -1 : 0}
                    aria-hidden={isHidden ? "true" : undefined}
                  >
                    <span tw="mb-24" css={[TWText.bodyBold]}>
                      {name}
                    </span>
                  </a>
                </ListItem>
              );
            })}
          {!notMainPage ? (
            <ListItem
              key={Object.keys(SECTIONS).length}
              variants={mobileItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              css={[
                isOpen
                  ? tw`pointer-events-auto`
                  : tw`pointer-events-none select-none`,
              ]}
            >
              <a
                key={Object.keys(SECTIONS).length}
                href={WEBSITE2022URL}
                onClick={() => toggleIsOpen()} // menu should close after section is clicked
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden ? "true" : undefined}
              >
                <span tw="mb-24" css={[TWText.bodyBold]}>
                  2022
                </span>
              </a>
            </ListItem>
          ) : null}
          <ListItem tw="h-96">
            <List tw="flex justify-between mt-20">
              {Object.entries(SOCIALS).map(
                ([id, { icon, link, fathomEventCode }]) => (
                  <ListItem
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={id}
                    css={[
                      isOpen
                        ? tw`pointer-events-auto`
                        : tw`pointer-events-none select-none`,
                    ]}
                  >
                    <a
                      aria-label={id}
                      href={link}
                      tabIndex={isHidden ? -1 : 0}
                      aria-hidden={isHidden ? "true" : undefined}
                      target="_blank"
                      css={[
                        isOpen
                          ? tw`pointer-events-auto`
                          : tw`pointer-events-none select-none`,
                      ]}
                      tw="mr-16"
                      rel="noreferrer"
                      onClick={() => trackGoal(fathomEventCode, 0)}
                    >
                      <Icon name={icon}></Icon>
                    </a>
                  </ListItem>
                )
              )}
            </List>
          </ListItem>
        </List>
      </Background>
    </Container>
  );
};

const List = styled(motion.ul)`
  top: 25vh;
  left: 0;
  padding: 0px 10%;
  position: absolute;
  width: 100%;
`;

const ListItem = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
`;

const Background = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh + ${NAVBAR_HEIGHT_PX}px);
  background: ${NAVBAR_COLOR};
`;

export default MobileMenu;
