import { disabledCssStyle } from "@/styled-components/App.styled";
import { themeColors } from "@/styled-components/Theme.styled";
import { styled } from "styled-components";

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
