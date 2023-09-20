// import { useState, useEffect } from "react";
import { FilterContainer } from "./NavMenu.styled.js";
import PropTypes from "prop-types";
import CustomSelectComponent from "../../UI/Select/Select.jsx";
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from "react-redux";
import carsData from '../../data/DB/advertsCars.json';
import InputFilter from "../Filter/Filter.jsx";
import { ButtonSee } from "../Card/CardsFavorite.styled.js";
import { useState } from "react";

const NavMenu = ({
  setFilteredCars,
}) => {
  const uniqueModels = Array.from(new Set(carsData.map(item => item.make)));
  const uniqueRentalPrices = Array.from(new Set(carsData.map(item => item.rentalPrice)));
  const uniqueMileage = Array.from(new Set(carsData.map(item => item.mileage)));

  const [make, setMake] = useState("Enter the text");
  const [rentalPrice, setRentalPrice] = useState("To $");
  const [mileageFrom, setMileageFrom] = useState(""); 
  const [mileageTo, setMileageTo] = useState(""); 

  const handleSearchClick = () => {
  // Перевірка, чи введені значення мінімального і максимального пробігу є числами
  const startMilesInt = mileageFrom !== "" ? parseInt(mileageFrom) : null;
  const endMilesInt = mileageTo !== "" ? parseInt(mileageTo) : null;

  if (startMilesInt !== null && Number.isNaN(startMilesInt) ||
      endMilesInt !== null && Number.isNaN(endMilesInt)) {
    console.error('Please enter valid mileage values.');
    return;
  }
  
  // Тут може бути фільтрація за моделлю і ціною
  // Якщо mileageFrom і mileageTo порожні, то ви можете фільтрувати за моделлю і ціною
  const filteredCars = carsData.filter((car) => {
    const isMakeMatch = make === "Enter the text" || car.make === make;
    const isPriceMatch = rentalPrice === "To $" || car.rentalPrice === rentalPrice;
    const isMileageFromMatch = startMilesInt === null || car.mileage >= startMilesInt;
    const isMileageToMatch = endMilesInt === null || car.mileage <= endMilesInt;

    return isMakeMatch && isPriceMatch && isMileageFromMatch && isMileageToMatch;
  });

  // Встановлюємо відфільтровані результати в state (або викликаємо вашу функцію setFilteredCars)
  setFilteredCars(filteredCars);
}


  return (
    <FilterContainer>
      <CustomSelectComponent
        options={["Enter the text", ...uniqueModels]}
        value={make} 
        onChange={(value) => setMake(value)}
        placeholder="Enter the text"
      />
      <CustomSelectComponent
        options={["To $", ...uniqueRentalPrices]} 
        value={rentalPrice} 
        onChange={(value) => setRentalPrice(value)}
        placeholder="To $"
      />
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
       <InputFilter
  options={uniqueMileage.map(String)} // Перетворення на рядки
  value={mileageFrom}
  onFilterChange={(value) => setMileageFrom(value)} // Змінено з onChange на onFilterChange
  inputStyle="active"
  inputPrefix="From"
  name="fromFilter"
/>
<InputFilter
  options={uniqueMileage.map(String)} // Перетворення на рядки
  value={mileageTo}
  onFilterChange={(value) => setMileageTo(value)} // Змінено з onChange на onFilterChange
  inputStyle="secondary"
  inputPrefix="To"
  name="toFilter"
/>


      </div>
      <ButtonSee onClick={handleSearchClick}>Search</ButtonSee>
    </FilterContainer>
  );
};

NavMenu.propTypes = {
  setFilteredCars: PropTypes.func.isRequired,
};

export default NavMenu;

//   const token = useSelector(state => state.auth.token);
//  useEffect(() => {
//   setToken(token);
//   const fetchData = async () => {
//     try {
//       const res = await instance.get('api/catalog/search?limit=40');
//       const data = res.data;
//       setMyCars(data.hits);

//       const uniqueModels = Array.from(new Set(data.hits.map(item => item.make)));
//       const uniquePrice = Array.from(new Set(data.hits.map(item => item.rentalPrice)));

//       setModels([...uniqueModels]); 
//       setPrices([...uniquePrice]); 
//     } catch (error) {
//       console.error('Error fetching cars', error);
//     }
//   };
//   fetchData();
// }, [token]);
  //   useEffect(() => {
  //   setMyCars(carsData);

  //   const uniqueModels = Array.from(new Set(carsData.map(item => item.make)));
  //   const uniquePrice = Array.from(new Set(carsData.map(item => item.rentalPrice)));

  //   setModels([...uniqueModels]); 
  //   setPrices([...uniquePrice]); 
  // }, []);

// const filterCars = (fromFilter, toFilter, selectedCar, selectedPrice) => {
//   const newFilteredCars = myCars.filter((car) => {
//     const isCarMatch = selectedCar === "Select model" || car.make === selectedCar;
//     const isPriceMatch = selectedPrice === "To $" || car.rentalPrice === selectedPrice;
//     const isFromFilterMatch = fromFilter === "" || car.someProperty >= fromFilter; // Замініть someProperty на властивість з вашого JSON
//     const isToFilterMatch = toFilter === "" || car.someProperty <= toFilter; // Замініть someProperty на властивість з вашого JSON
//     return isCarMatch && isPriceMatch && isFromFilterMatch && isToFilterMatch;
//   });

//   setFilteredCars(newFilteredCars);
// };


//  const handleMileageChange = (fromMileage, toMileage) => {
//     // Фільтрація за пробігом (Mileage)
//     const filteredCarsByMileage = carsData.filter(car => {
//       if (fromMileage !== null && toMileage !== null) {
//         return car.mileage >= fromMileage && car.mileage <= toMileage;
//       } else if (fromMileage !== null) {
//         return car.mileage >= fromMileage;
//       } else if (toMileage !== null) {
//         return car.mileage <= toMileage;
//       }
//       return true; 
//     });
//     setFilteredCars(filteredCarsByMileage);
//   };
