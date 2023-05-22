import styled, { css } from "styled-components";
import { responsiveTemplate } from "./responsiveTemplate.styled";
import { themeColors } from "./Theme.styled";
import { typography } from "./typography.styled";

// const someOtherProperties = {
//   globalRadius: "8px",
//   globalShadowBoxCards: `0px 4px 4px ${themeColors.blackShadow}`
// };

// const Hr = styled.hr`
//   height: 2px !important;
//   color: ${themeColors.grayBorder};
// `;

const disabledCssStyle = css`
  background-color: ${themeColors.gray};
  color: ${themeColors.txtGray};
  border: 2px solid ${themeColors.txtGray} !important;

  ${typography.mobileTitle()}

  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }

  &:hover {
    background-color: ${themeColors.gray};
    color: ${themeColors.txtGray};
    filter: brightness(1.1) !important;
  }

  &:active {
    background-color: ${themeColors.gray} !important;
    color: ${themeColors.txtGray} !important;
    filter: brightness(1.25);
  }
`;

// const dropShadow = css`
//   filter: drop-shadow(0px 5px 5px ${themeColors.blackShadow});
// `;

// const filterSaturate = css`
//   filter: saturate(150%);
// `;

const scrollbarCssStyles = css`
  &::-webkit-scrollbar {
    width: 12px;
    background: #e4e4e4;
  }

  &::-webkit-scrollbar-thumb {
    background: hsla(187, 97%, 29%, 0.3);
    border-radius: 5px;
    border: 1px solid hsla(187, 97%, 29%, 0.55);
    border-right: 1px solid #e4e4e4;

    &:hover {
      background: hsla(187, 97%, 29%, 0.6);
      border: 1px solid hsla(187, 97%, 29%, 0.85);
      border-right: 1px solid #e4e4e4;
    }

    &:active {
      background: hsla(187, 97%, 29%, 0.8);
      border: 1px solid hsla(187, 97%, 29%, 1);
      border-right: 1px solid #e4e4e4;
    }
  }
`;

export {
  scrollbarCssStyles,
  // filterSaturate,
  // someOtherProperties,
  // Hr,
  disabledCssStyle
  // dropShadow
};
