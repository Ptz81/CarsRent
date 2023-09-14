
import { useState, useEffect } from "react";
import TitlePage from "../components/TitlePage/TitlePage.jsx";
import { Container, Page } from "./RentPage.styled.js";
import CardList from "../components/CardList/CardList.jsx"
import NavMenu from "../components/NavMenu/NavMenu.jsx";
// import { useSelector } from "react-redux";
// import { setToken, instance } from '../../api/auth';
import carsData from '../data/DB/advertsCars.json';

const RentPage = () => {
  const [filter, setFilter] = useState("");
  const [models, setModels] = useState("Select model");
  const [prices, setPrices] = useState("To $"); 
  const [filteredCars, setFilteredCars] = useState([]); 

  // const token = useSelector(state => state.auth.token);
  // useEffect(() => {
  //   setToken(token);
  //   const fetchData = async () => {
  //     try {
  //       const res = await instance.get('api/recipes/search?limit=90');
  //       const data = res.data;
  //       setFilteredCocktails(data.hits);
  //     } catch (error) {
  //       console.error('Error fetching cocktails', error);
  //     }
  //   };
  //   fetchData();
  // }, [token]);
useEffect(() => {
    setFilteredCars(carsData);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleCarChange = (newCarModel) => {
    setModels(newCarModel);
  };

  const handlePriceChange = (newPrice) => {
    setPrices(newPrice);
  };

  return (
    <>
      <Page>
        <Container>
          <TitlePage titlePage="Rent of cars" />
           <NavMenu
            filter={filter}
            category={models}
            ingredient={prices}
            onFilterChange={handleFilterChange}
            onCategoryChange={handleCarChange}
            onIngredientChange={handlePriceChange}
            setFilteredCars={setFilteredCars}
          />
          <CardList items={filteredCars} />
        </Container>
      </Page>
    </>
  );
};

export default RentPage;