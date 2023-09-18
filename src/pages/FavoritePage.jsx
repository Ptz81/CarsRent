import styled from '@emotion/styled';
// import { useState } from 'react';
// import CardList from '../components/CardList/CardList';
import TitlePage from '../components/TitlePage/TitlePage';
import { useEffect, useState } from 'react';
import CardsFavorite from '../components/Card/CardsFavorite';
export const Page = styled.div`
  position: relative;
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
   const [favoriteCars, setFavoriteCars] = useState([]);
 useEffect(() => {
    const favoriteCarsFromLocalStorage = JSON.parse(localStorage.getItem('favoriteCars')) || [];
    setFavoriteCars(favoriteCarsFromLocalStorage);
  }, []);
  // useEffect(() => {
  //   instance
  //     .get('api/favorite')
  //     .then(res => {
  //       const data = res.data;
  //      setFavoriteCars(data.hits);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching cars:', error);
  //     });
  // }, []);
  // console.log(`page ${favoriteCars}`);
  return (
     <>
        <Page>
        <Container>
             <TitlePage titlePage="Favorite cars"/>
              {favoriteCars.map((car) => (
            <CardsFavorite key={car.id} {...car} />
          ))}
        </Container>
      </Page>
    </>
  );
};

export default FavoritePage;