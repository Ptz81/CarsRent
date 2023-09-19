import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles.js";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.mainBgColor};
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000; /* Додайте z-index, щоб забезпечити правильне накладання над іншими елементами */
`;


export const StyledHeader = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${colors.mainBgColor};
  border-bottom: 1px solid ${colors.disabled};


  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    padding: 20px 100px;
  }
`;