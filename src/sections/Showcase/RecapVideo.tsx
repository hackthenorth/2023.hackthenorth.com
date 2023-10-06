import { trackGoal } from "fathom-client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { CloseIconImg } from "src/assets/img";
import { Icon } from "src/components/base";
import { UnstyledModal } from "src/components/base/Modal";
import { useDeviceSize, useWindowSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import { css } from "styled-components";
import styled from "styled-components";

const RECAP_VIDEO_ID = "2e4WxsIUPRc";

const AUTOPLAY_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?rel=0&autoplay=1&color=white&loop=1&enablejsapi=1&controls=0&modestbranding=1&showinfo=0&mute=1&playlist=${RECAP_VIDEO_ID}`;
const MODAL_URL = `https://www.youtube.com/embed/${RECAP_VIDEO_ID}?rel=0&loop=1&color=white&modestbranding=1&showinfo=0`;

const autoplaySize = css`
  width: 100%;
  height: 100%;
`;

const ModalVideoContainer = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
  display: block;
`;

const RecapVideoContainer = styled.div`
  text-align: center;
  overflow: hidden;
  position: absolute;
  width: 95%;
  left: 0.8%;
  top: 9%;
  height: 87.3%;

  ${mediaQueries.tablet} {
    width: 95%;
    left: 0.8%;
    top: 6.8%;
    height: 62.5%;
  }

  ${mediaQueries.largeMobile} {
    width: 95%;
    left: 0.8%;
    top: 7.5%;
    height: 69.2%;
  }
`;

const VideoModal = styled(UnstyledModal)`
  background-color: transparent;
  outline: none;
  z-index: 99;
  text-align: center;
`;

const VideoOverlay = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  background: #0a446d;
  mix-blend-mode: screen;
  opacity: 0.4;
  pointer-events: none;
`;

const PlayButton = styled(Icon).attrs({ name: "play" })`
  > * {
    fill: white;
    width: 100px;
    height: 100px;
  }
  margin: 0;
  fill: white;
  height: 84px;
  width: auto;
  position: relative;
  top: 50%;
  margin-top: -15%;
  margin-left: 5%;
  opacity: 1;
  pointer-events: none;

  ${mediaQueries.tablet} {
    height: 25px;
  }
`;

const PlayButtonContainer = styled.div`
  ${autoplaySize}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  z-index: 1;

  > :first-child {
    visibility: hidden;
    opacity: 0;
    transition: opacity 250ms;
  }

  &:hover {
    > :first-child {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Button = styled.div`
  position: relative;
  top: 0;
  margin-bottom: 10px;
  justify: right;
  margin-left: auto;
  margin-right: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
  padding: 5px;

  ${mediaQueries.tablet} {
    width: 30px;
    height: 30px;
  }
`;

const AutoplayVideoContainer = styled.div`
  ${autoplaySize}
`;

const CloseIcon = styled.img`
  position: relative;
  width: 30px;

  ${mediaQueries.tablet} {
    width: 20px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  margin-top: -20%;
  margin-left: -50%;
`;

interface RecapVideoProps {
  onMouseEnter: () => void;
  onMouseOut: () => void;
}

const RecapVideo: React.FC<RecapVideoProps> = ({
  onMouseEnter,
  onMouseOut,
}) => {
  const autoplayIframe = useRef<HTMLIFrameElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { windowWidth = 0, windowHeight = 0 } = useWindowSize();
  const isTablet = useDeviceSize("tablet") || false;
  const isMobile = useDeviceSize("largeMobile") || false;

  const [ref, isInView] = useInView();
  const autoplayVideoWidth = isMobile ? 300 : isTablet ? 300 : 580;
  const autoplayVideoHeight = autoplayVideoWidth * (9 / 16);

  const updateAutoplayState = useCallback(() => {
    const { current } = autoplayIframe;

    if (current) {
      if (isInView && !isModalOpen) {
        // also runs if playing == undefined
        if (current.dataset.playing !== "true") {
          current.dataset.playing = "true";
          // https://stackoverflow.com/questions/15164942/stop-embedded-youtube-iframe
          current.contentWindow?.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
      } else {
        if (current.dataset.playing !== "false") {
          current.dataset.playing = "false";
          current.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      }
    }
  }, [isInView, isModalOpen, autoplayIframe]);
  useEffect(updateAutoplayState, [updateAutoplayState, isModalOpen, isInView]);
  const setAutoplay = useCallback(
    (ref) => {
      autoplayIframe.current = ref;
      // pause the video after 3 seconds or so
      setTimeout(updateAutoplayState, 3000);
    },
    [updateAutoplayState]
  );

  // get video modal width based on window width, but if it's too high, resize
  let modalVideoWidth = windowWidth * 0.8;
  let modalVideoHeight = modalVideoWidth * (9 / 16);
  if (modalVideoHeight > windowHeight * 0.8) {
    modalVideoHeight = windowHeight * 0.8;
    modalVideoWidth = modalVideoHeight * (16 / 9);
  }

  // disable scrolling when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "visible";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <RecapVideoContainer onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      {" "}
      <AutoplayVideoContainer
        ref={ref}
        onClick={() => {
          setIsModalOpen(true);
          trackGoal("VV9YRQTS", 0); // Showcase: YT Video Click
        }}
      >
        <VideoContainer ref={containerRef}>
          {isInView && (
            <iframe
              title="htn recap video autoplay"
              ref={setAutoplay}
              id="ytplayer"
              width={autoplayVideoWidth}
              height={autoplayVideoHeight}
              src={AUTOPLAY_URL}
              frameBorder="0"
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-presentation"
            ></iframe>
          )}
        </VideoContainer>
      </AutoplayVideoContainer>
      <VideoOverlay />
      {!isModalOpen && (
        <PlayButtonContainer
          onClick={() => {
            setIsModalOpen(true);
            trackGoal("VV9YRQTS", 0); // Showcase: YT Video Click
          }}
        >
          <PlayButton />
        </PlayButtonContainer>
      )}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        overlayStyle={{
          zIndex: 100,
        }}
      >
        <ModalVideoContainer>
          <Button onClick={() => setIsModalOpen(false)}>
            <CloseIcon
              draggable="false"
              alt=""
              loading="lazy"
              src={CloseIconImg}
            />
          </Button>
          {isInView && (
            <iframe
              title="htn recap video autoplay"
              id="ytplayer"
              width={modalVideoWidth}
              height={modalVideoHeight}
              src={MODAL_URL}
              frameBorder="0"
              allow="fullscreen"
            ></iframe>
          )}
        </ModalVideoContainer>
      </VideoModal>
    </RecapVideoContainer>
  );
};

export default RecapVideo;
