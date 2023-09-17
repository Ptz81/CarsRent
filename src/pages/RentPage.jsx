
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
  //       const res = await instance.get('api/catalog/search?limit=40');
  //       const data = res.data;
  //       setFilteredCars(data.hits);
  //     } catch (error) {
  //       console.error('Error fetching cars', error);
  //     }
  //   };
  //   fetchData();
  // }, [token]);
// useEffect(() => {
//     setFilteredCars(carsData);
//   }, []);


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
    const handleModelChange = (newCarModel) => {
   setMake(newCarModel);
  };
  const handlePriceChange = (newPrice) => {
    setRentalPrice(newPrice);
  };

useEffect(() => {
    const filteredCars = carsData.filter((car) => {
      const isModelMatch =
        make === "Enter the text"||make === "Select model" || car.make === make;
const numericRentalPrice = parseFloat(rentalPrice.replace(/\$|\s/g, ''));
const isPriceMatch =
  rentalPrice === "To $" || parseFloat(car.rentalPrice.replace(/\$|\s/g, '')) <= numericRentalPrice;

    const isMileageMatch =
      filter === "" ||filter.includes('-');
      (filter.includes('-')
        ? parseMileageRange(filter, car.mileage)
        : parseInt(filter) <= car.mileage);
   return isModelMatch && isPriceMatch && isMileageMatch;
  });
  setFilteredCars(filteredCars);
}, [make, rentalPrice, filter]);
  
  function parseMileageRange(range, carMileage) {
  const [from, to] = range.split('-').map((num) => parseInt(num.trim()));
  return carMileage >= from && carMileage <= to;
  }
  useEffect(() => {
  if (make === "Select model"&&make === "Enter the text" && rentalPrice === "To $" && filter === "") {
    setFilteredCars(carsData);
  }
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