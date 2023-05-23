import { css, keyframes, styled } from "styled-components";
import { themeColors } from "@/styled-components/Theme.styled";

export const WrapCustomVideo = styled.div`
  width: ${props => props.widthcustomvideo || "100%"};
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .custom-video-recorder {
    width: 80%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 1rem;
    position: absolute;
  }

  .custom-video-recorder-cam {
    background-color: ${themeColors.darkBlue};
    width: 100%;
    height: 70%;
    border-radius: 8px;
  }

  .custom-video-recorder-wrap-btns {
    position: relative;
    bottom: 4rem;
    /* right: 9rem; */
    width: 20%;
    padding-left: 5rem;
  }

  .custom-video-recorder-wrap-btns-btn {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${themeColors.white};

    &:hover {
      background-color: ${themeColors.txtGray};
      cursor: pointer;
    }
  }

  .custom-video-recorder-timer {
    z-index: 1000;
    position: relative;
    width: 100%;
    top: 2rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 5rem;
    color: ${themeColors.white};
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

export const PulseCircle = styled.div`
  position: relative;
  top: ${props => (props.recording === "true" ? "0" : "0.49rem")};
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: ${themeColors.danger};
  transform: translateY(-50%);
  animation: ${props =>
    props.recording === "true"
      ? css`
          ${pulseAnimation} 1s infinite
        `
      : "none"};
`;
