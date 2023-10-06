import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import "styled-components/macro";
import { LogoIcon } from "src/assets/icons";
import { SectionId } from "src/constants";
import { mediaQueries, useDeviceSize } from "src/utils";
import {
  useScrollDirection,
  ScrollDirection,
} from "src/utils/hooks/useScrollDirection";
import { styled } from "twin.macro";

import { NAVBAR_HEIGHT_PX, NAVBAR_COLOR, NavBarProps } from "./constants";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import MobileMenuHamburger from "./mobileMenuHamburger";

export type TContainerProps = {
  isScrolledDown: boolean;
  isHidden: boolean;
  background: string;
};

const Navbar: React.FC<NavBarProps> = ({ notMainPage }) => {
  const scrollDirection = useScrollDirection({
    initialDirection: ScrollDirection.DOWN,
    thresholdPixels: 10,
  });
  const isMediumOrSmaller = useDeviceSize("medium");

  const [isScrolledDown, setScrolledDown] = useState(false);
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);

  useEffect(() => {
    const scrollContainer = document.getElementById("container");
    const historyContainer = document.getElementById("about");
    /**
     * Change the appearance of the nav bar when a user
     * scrolls down the page.
     */
    const checkScrolledDown = () => {
      const historyBoundingRect = historyContainer?.getBoundingClientRect();
      const hasScrolledDown =
        (scrollContainer?.scrollTop || 0) > 0 &&
        (historyBoundingRect?.top || 0) - window.innerHeight <= 0;
      setScrolledDown(hasScrolledDown);
    };

    scrollContainer?.addEventListener("scroll", checkScrolledDown);
    checkScrolledDown();
    return () =>
      scrollContainer?.removeEventListener("scroll", checkScrolledDown);
  }, []);

  const isHidden = isScrolledDown && scrollDirection === ScrollDirection.DOWN;

  return isMediumOrSmaller !== undefined ? (
    <Container
      isHidden={isHidden}
      isScrolledDown={isScrolledDown}
      background={NAVBAR_COLOR}
    >
      <InnerContainer>
        <div
          tw="mr-auto my-10 self-center"
          style={{ marginLeft: isMediumOrSmaller ? "24px" : "0px" }}
        >
          <a href={`/#${SectionId.HERO}`} aria-label="Home">
            <LogoIcon />
          </a>
        </div>

        {isMediumOrSmaller ? (
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            tw="z-50 my-auto mr-24"
          >
            <MobileMenuHamburger toggle={() => toggleMobileMenuOpen()} />
          </motion.div>
        ) : (
          <Menu notMainPage={notMainPage} />
        )}

        {isMediumOrSmaller && (
          <MobileMenu
            isHidden={isHidden}
            isOpen={mobileMenuOpen}
            toggleIsOpen={toggleMobileMenuOpen}
          />
        )}
      </InnerContainer>
    </Container>
  ) : null;
};

const Container = styled.nav.attrs<TContainerProps>(
  ({ isScrolledDown, background, isHidden }) => ({
    style: {
      backgroundColor: isScrolledDown ? background : "transparent",
      borderBottom: isScrolledDown
        ? "1px solid grey"
        : "0px solid " + background,
      transform: isHidden
        ? `translateY(-${NAVBAR_HEIGHT_PX}px)`
        : "translateY(0)",
    },
  })
)<TContainerProps>`
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;

  z-index: 99;

  transition: background-color 250ms, transform 250ms;
`;

const InnerContainer = styled.div`
  max-width: 1202px;
  display: flex;
  margin: auto;

  @media (max-width: 1202px) {
    margin: 0px 32px;
  }

  ${mediaQueries.tablet} {
    margin: auto;
  }
`;

export default Navbar;
