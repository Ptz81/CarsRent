import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const NameCategory = styled.h2`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 40px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    line-height: 1.1;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const CarList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  max-width: 335px;
  max-height: 360px;
`;

export const ImgCar = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameAndIngridients = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const NameCocktail = styled.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Ingredients = styled(Link)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;
