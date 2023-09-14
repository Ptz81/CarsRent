// import CardsFavorite from "../components/Card/CardsFavorite.jsx";


import styled from '@emotion/styled';

export const Page = styled.div`
  position: relative;
  // background: #0a0a11;
  margin: 0 auto;
`;

export const Container404 = styled.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
    
  }
`;

export const Container = styled.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`;

const FavoritePage = () => {
  
  return (
    <>
      <h2>FavoritePage</h2>
   
    </>
  );
};

export default FavoritePage;