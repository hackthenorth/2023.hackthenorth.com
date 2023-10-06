import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import { Collapsible } from "src/components/base";
import { Flex } from "src/components/base";
import GlowText from "src/components/base/GlowText";
import UnderlinedText from "src/components/base/UnderlinedText";
import { Body, Heading2, LargeBody } from "src/styles";
import { useMounted, useDeviceSize } from "src/utils";
import styled, { useTheme } from "styled-components";

interface DetailProps {
  onClick: (index: number) => void;
  header: string;
  body: string;
  clicked: boolean;
  index: number;
  color: string;
  section: string;
}

const getHeight = (id: string) => {
  const el = document.getElementById(id);
  return el ? el.scrollHeight : 100;
};

const Detail: React.FC<DetailProps> = ({
  onClick,
  header,
  body,
  clicked,
  index,
  color,
  section,
}) => {
  const [height, setHeight] = useState(0);
  const mounted = useMounted();
  const debouncedSetHeight = debounce(() => setHeight(getHeight(body)), 250);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");
  const theme = useTheme();

  useEffect(() => {
    if (mounted) {
      setHeight(getHeight(body));
      window.addEventListener("resize", debouncedSetHeight);
    }

    return () => {
      window.removeEventListener("resize", debouncedSetHeight);
    };
  }, [mounted, body, debouncedSetHeight]);

  return (
    <Flex
      column={true}
      justify="center"
      align={isLargeMobileOrSmaller ? "center" : "start"}
    >
      <DetailHeaderText onClick={() => onClick(index)} clicked={clicked}>
        <UnderlinedText color={color} glow={clicked}>
          {header}
        </UnderlinedText>
      </DetailHeaderText>
      <Collapsible
        id={body}
        isOpen={clicked}
        height={height}
        style={{ marginBottom: "12px" }}
      >
        {section === "Talking Points" && (
          <LargeBody
            style={{
              color: theme.colors.text.dark.gray,
              lineHeight: "32px",
              marginBottom: "24px",
            }}
          >
            {body}
          </LargeBody>
        )}
        {section === "Hacker Testimonials" && (
          <div style={{ display: "flex" }}>
            <GlowText color={color}>
              <QuotationMarks>“</QuotationMarks>
            </GlowText>
            <Body
              style={{
                color: theme.colors.text.dark.gray,
                lineHeight: "24px",
                marginTop: "10px",
                marginBottom: "24px",
                marginLeft: "10px",
              }}
            >
              {body}
            </Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <GlowText color={color}>
                <QuotationMarks>”</QuotationMarks>
              </GlowText>
            </div>
          </div>
        )}
      </Collapsible>
    </Flex>
  );
};

interface DetailHeaderProps {
  clicked: boolean;
}

const DetailHeaderText = styled(Heading2)<DetailHeaderProps>`
  color: white;
  font-size: ${(props) => (props.clicked ? `36px` : `24px`)};
  cursor: pointer;
  margin-bottom: 12px;
`;

const QuotationMarks = styled(Heading2)`
  color: white;
  font-size: 64px;
  line-height: 50px;
  padding: 5px;
  position: relative;
`;

export default Detail;
