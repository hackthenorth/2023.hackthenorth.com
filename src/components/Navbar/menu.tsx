import { trackGoal } from "fathom-client";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "styled-components/macro";
import Icon from "src/components/base/Icon";
import { SOCIALS } from "src/constants/social";
import { TWShared, BodyBold, theme } from "src/styles";

import { NavBarProps, SECTIONS, WEBSITE2022URL } from "./constants";

const containerStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  maxWidth: "1202px",
  gap: "24px",
  height: "80px",
  paddingLeft: "32px",
};

const sectionStyles: React.CSSProperties = {
  alignSelf: "center",
  marginLeft: "8px",
  marginRight: "8px",
};

const wesbiteSectionStyles: React.CSSProperties = {
  alignSelf: "center",
  marginLeft: "8px",
  marginRight: "auto",
};

const Menu: React.FC<NavBarProps> = ({ notMainPage }) => {
  return (
    <div style={containerStyles}>
      {!notMainPage &&
        Object.entries(SECTIONS).map(([id, name]) => {
          return (
            <div style={sectionStyles} key={id}>
              <Link
                to={"/#" + id}
                css={[TWShared.hover]}
                style={{
                  textDecoration: "none",
                  color: theme.colors.text.dark.white,
                }}
              >
                <BodyBold>
                  <span>{name}</span>
                </BodyBold>
              </Link>
            </div>
          );
        })}
      {!notMainPage ? (
        <div style={wesbiteSectionStyles}>
          <a
            href={WEBSITE2022URL}
            css={[TWShared.hover]}
            style={{
              textDecoration: "none",
              color: theme.colors.text.dark.white,
            }}
          >
            <BodyBold>2022</BodyBold>
          </a>
        </div>
      ) : null}
      {Object.entries(SOCIALS).map(([id, { icon, link, fathomEventCode }]) => (
        <div style={{ alignSelf: "center" }} key={id}>
          <a
            aria-label={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGoal(fathomEventCode, 0)}
          >
            <Icon name={icon} hover={true}></Icon>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
