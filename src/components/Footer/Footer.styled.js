import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  padding: 20px 32px;
  background-color: ${colors.disabled};
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
  /* @media (min-width: 1200px) {
    padding: 20px 100px;
  } */
`;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

 

  @media (min-width: 768px) {
    row-gap: 28px;
    margin: 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:0px;
  }
`;
export const Text = styled.p`
  display: inline-flex;
  color: ${colors.textMainColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  
  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;