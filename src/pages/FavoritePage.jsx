import styled from '@emotion/styled';
// import { useState } from 'react';
// import CardList from '../components/CardList/CardList';
import TitlePage from '../components/TitlePage/TitlePage.jsx';
import { useEffect, useState } from 'react';
import CardsFavorite from '../components/Card/CardsFavorite.jsx';
// import { colors } from '../styles/GlobalStyles.js';
import NotFoundMobile from '../assets/notfoundpage.png'

export const Page = styled.div`
  position: relative;
  margin: 0 auto;
min-height: 85vh;
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

export const List = styled.ul`
  z-index: 2;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
     margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Container = styled.div`
  padding: 60px 30px 30px 30px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`;

export const Warning = styled.div`
 display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  height: 100vh;
font-size: 30px;
text-transform: uppercase;
`

const FavoritePage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

useEffect(() => {
    const storedFavoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    setFavoriteCars(storedFavoriteCars);
  }, [updateTrigger]);

  const handleRemoveFavorite = (id) => {
    const updatedFavoriteCars = favoriteCars.filter((card) => card.id !== id);
    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    setUpdateTrigger(!updateTrigger);
  };

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
          <TitlePage titlePage="Favorite cars" />
               {favoriteCars.length > 0 ? (
          <List>
            {favoriteCars.map((card) => (
              <CardsFavorite key={card.id} {...card} onRemove={handleRemoveFavorite} />
            ))}
          </List>
          ) : (
              <Warning> 
                <img width="200px" src={ NotFoundMobile} />
                <p>
                  No favorite cars available.
               </p>  
              </Warning>
             
        )}
        </Container>
      </Page>
    </>
  );
};

export default FavoritePage;