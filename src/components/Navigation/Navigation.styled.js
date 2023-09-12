import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/GlobalStyles.js";
import { TransitionMain } from "../../styles/shared.jsx";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;

  color: ${colors.textMainColor};
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 12px;
  transition: ${TransitionMain('background-color')};

  &:hover {
    background-color: ${colors.hoverColor};
    color: ${colors.mainBgColor};
  }

  &:active {
    background-color: ${colors.hoverColor};
    color: ${colors.mainBgColor};
  }
`;