import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TransitionMain } from '../../styles/shared';
export const NameCategory = styled.h2`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    text-align:start;
  }
`;

export const CarList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export const ImgContainer = styled.div`
  max-width: 335px;
  max-height: 360px;
  transition: ${TransitionMain('box-shadow')};
  &:hover{
    box-shadow: 0px 0px 31px -10px rgba(255,255,255,1);
  }
`;

export const ImgCar = styled.img`
  width: 335px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`;

export const NameAndType = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const NameCar = styled.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Cars = styled(Link)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;
export const CardWrapper = styled.div`
position: relative;
width: 274px;
`