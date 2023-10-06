import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";
import { DidWeMissAnything, Navbar } from "src/components";
import { Layout } from "src/components/base";
import ContentWrapper from "src/components/base/Layout/ContentWrapper";
import PageWrapper from "src/components/base/Layout/PageWrapper";
import { NAVBAR_HEIGHT_PX } from "src/components/Navbar/constants";
import { Heading1 } from "src/styles";
import { theme } from "src/styles";
import { mediaQueries } from "src/utils";
import { useScrollDirection } from "src/utils";
import { ScrollDirection } from "src/utils/hooks/useScrollDirection";
import styled, { css } from "styled-components";

interface InfoPageProps {
  sections: { id: string; title: string }[];
  content: string;
  title: string;
}

const InfoPageWrapper = styled(PageWrapper)`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 120px;
`;

const Heading: React.FC<{
  level: number;
  children: React.ReactElement<{ value: string }>[];
}> = (props) => {
  return React.createElement(
    `h${props.level}`,
    {
      id: props.children[0].props.value
        .split(" ")
        .map((s: string) => s.toLowerCase())
        .join("-"),
    },
    props.children
  );
};

const Title = styled(Heading1)`
  color: white;
`;

const Sidebar = styled.div<{ shiftUp: boolean }>`
  display: flex;
  width: 150px;
  top: 100px;
  position: sticky;
  align-self: flex-start;
  margin-right: 75px;

  transition: transform 250ms;
  transform: translateY(
    ${({ shiftUp }) => (shiftUp ? -NAVBAR_HEIGHT_PX : 0)}px
  );

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const SectionWrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledLink = styled.a<{ isBlue: boolean }>`
  line-height: 150%;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20%;
  text-decoration: underline;
  ${({ isBlue }) =>
    isBlue
      ? css`
          color: ${theme.colors.primary.blue};
        `
      : css`
          color: ${theme.colors.text.dark.white};
        `}
  &:hover,
    &:focus {
    cursor: pointer;
  }
`;

const Content = styled.div<{ children: React.ReactNode }>`
  padding: 0px;
  line-height: 180%;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${theme.colors.text.dark.white};
  h1 {
    font-family: "Castledown";
    font-size: 48px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 36px;
    }

    ${mediaQueries.largeMobile} {
      font-size: 24px;
    }
  }
  h2 {
    margin: 0px;
    font-family: "Castledown";
    font-size: 36px;
    font-weight: 900;
    padding-top: 60px;
    padding-bottom: 20px;

    ${mediaQueries.tablet} {
      font-size: 24px;
    }
  }
  h3 {
    font-family: "Castledown";
    font-size: 24px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 20px;
    }
    padding-top: 10px;
  }
  p {
    padding: 5px 0;
  }
  hr {
    border-style: none;
    height: 1px;
    margin-top: 3rem;
  }
  a {
    color: ${theme.colors.text.dark.white};
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
    text-decoration: underline;
  }
  ol,
  ul {
    list-style: initial;
    margin: initial;
    padding: revert;
  }
  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: justify;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const InfoPage: React.FC<InfoPageProps> = ({ title, content, sections }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [curSection, setCurSection] = useState<string>();

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();

    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onScrollSpyUpdate = (el: HTMLElement) =>
    setCurSection((el as HTMLElement)?.id); // types for react-scrollspy are incorrect

  return (
    <Layout>
      <Navbar notMainPage />
      <InfoPageWrapper>
        <ContentWrapper>
          <Flex>
            <div>
              <Sidebar
                shiftUp={
                  isScrolledDown && scrollDirection === ScrollDirection.DOWN
                }
              >
                <Scrollspy
                  offset={0}
                  items={sections.map(({ id }) => id)}
                  onUpdate={onScrollSpyUpdate}
                  componentTag={FlexColumn}
                  currentClassName="active"
                >
                  {sections
                    .slice()
                    .reverse()
                    .map(({ id, title }) => (
                      <StyledLink
                        key={id}
                        href={`#${id}`}
                        tw="mb-32"
                        isBlue={curSection === id}
                      >
                        {title}
                      </StyledLink>
                    ))}
                </Scrollspy>
              </Sidebar>
            </div>
            <SectionWrapper>
              <Title>{title}</Title>
              <Content>
                <ReactMarkdown
                  source={content}
                  renderers={{ heading: Heading }}
                />
              </Content>
              <DidWeMissAnything />
            </SectionWrapper>
          </Flex>
        </ContentWrapper>
      </InfoPageWrapper>
    </Layout>
  );
};

export default InfoPage;
