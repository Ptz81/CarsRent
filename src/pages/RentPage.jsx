
import { useEffect, useState } from "react";
import TitlePage from "../components/TitlePage/TitlePage.jsx";
import { Container, Page } from "./RentPage.styled.js";
import CardList from "../components/CardList/CardList.jsx"
import NavMenu from "../components/NavMenu/NavMenu.jsx";
// import { useSelector } from "react-redux";
// import { setToken, instance } from '../../api/auth';
import carsData from '../data/DB/advertsCars.json';

const RentPage = () => {
  const [filter, setFilter] = useState("");
  const [make, setMake] = useState("Select model");
  const [rentalPrice, setRentalPrice] = useState("To $"); 
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
// useEffect(() => {
//     setFilteredCars(carsData);
//   }, []);

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleCarChange = (newCarModel) => {
//     setModels(newCarModel);
//   };

//   const handlePriceChange = (newPrice) => {
//     setPrices(newPrice);
//   };

  // return (
  //   <>
  //     <Page>
  //       <Container>
  //         <TitlePage titlePage="Rent of cars" />
  //          <NavMenu
  //           filter={filter}
  //           models={models}
  //           prices={prices}
  //           onFilterChange={handleFilterChange}
  //           onCategoryChange={handleCarChange}
  //           onPriceChange={handlePriceChange}
  //           setFilteredCars={setFilteredCars}
  //         />
  //         <CardList items={filteredCars} />
  //       </Container>
  //     </Page>
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
    const handleModelChange = (newCarModel) => {
   setMake(newCarModel);
  };
  const handlePriceChange = (newPrice) => {
    setRentalPrice(newPrice);
  };

// const handlePriceChange = (event) => {
//   setRentalPrice(event.target.value);
// };
//перевіряємо у інпутах фільтри
useEffect(() => {
    const newFilteredCars = carsData.filter((car) => {
      const isModelMatch =
        make === "Select model" || car.make === make;
     
   // Конвертуємо рядок в число, видаляючи символ "$" та будь-які пробіли
const numericRentalPrice = parseFloat(rentalPrice.replace(/\$|\s/g, ''));

const isPriceMatch =
  rentalPrice === "To $" || parseFloat(car.rentalPrice.replace(/\$|\s/g, '')) <= numericRentalPrice;


      const isTextMatch =
        filter === "" || car.mileage.toLowerCase().includes(filter.toLowerCase());
      return isModelMatch && isPriceMatch && isTextMatch;
    });
    setFilteredCars(newFilteredCars);
  }, [make, rentalPrice, filter]);

    return (
      <>
        <Page>
        <Container>
             <TitlePage titlePage="Rent of cars"/>
            <NavMenu
            filter={filter}
            make={make}
            rentalPrice={rentalPrice}
            onFilterChange={handleFilterChange}
            onModelChange={handleModelChange}
              onPriceChange={handlePriceChange}
              setFilteredCars={setFilteredCars} 
            />
            <CardList items={filteredCars} />
        </Container>
      </Page>
    </>
  );
};

export default RentPage;