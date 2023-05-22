import { disabledCssStyle } from "@/styled-components/App.styled";
import { themeColors } from "@/styled-components/Theme.styled";
import { fadeIn } from "@/styled-components/animation.styled";
import { styled, css } from "styled-components";

export const HomeHeader = styled.header`
  .home-header-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${fadeIn}
`;

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  ${fadeIn}

  .home-section-body {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .home-section-footer {
    margin: 3rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .home-section-footer-btn {
      width: 10rem;
      border-radius: 8px;
      border: 1px solid ${themeColors.danger};
      transition: 0.5s;

      ${props =>
        props.disabled
          ? disabledCssStyle
          : css`
              background-color: ${themeColors.danger};
              color: ${themeColors.white};
            `}

      &:hover {
        cursor: pointer;
        ${props =>
          props.disabled
            ? disabledCssStyle
            : css`
                color: ${themeColors.danger};
                background-color: ${themeColors.white};
              `}
      }
    }
  }
`;

export const Card = styled.div`
  width: 321px;
  height: 450px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${themeColors.txtGray};
  margin-top: 1rem;
  border-radius: 8px;

  filter: drop-shadow(0px 5px 5px ${themeColors.blackShadow});

  .card-body {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: ${themeColors.mattBlue};
    color: ${themeColors.white};

    filter: drop-shadow(0px 5px 5px ${themeColors.blackShadow});

    /* ${props =>
      props.hasvideorecord.status &&
      css`
        background-color: ${themeColors.mattBlue};
        color: ${themeColors.white};
      `} */
  }

  .card-body-message {
    text-align: center;
  }

  .card-body-btn {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 60px;
    left: 10px;

    ${props =>
      props.hasvideorecord.status
        ? css`
            background-color: ${themeColors.skyBlue};
            color: ${themeColors.white};
          `
        : disabledCssStyle}
  }

  .card-footer {
    height: 5.3rem;
    width: 100%;
    text-align: center;
  }
`;
