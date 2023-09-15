import { colors } from '../../styles/GlobalStyles';
// import { breakpoint as bp } from '../../styles/shared';
import styled from '@emotion/styled';

export const Title = styled.h1`
text-align: center;
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${colors.textMainColor};


  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 64px;
  }
`;