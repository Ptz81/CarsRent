import styled from '@emotion/styled';
// import { colors } from '../../styles/GlobalStyles';
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;

  }
`;