// import { useState, useEffect } from "react";
import { FilterContainer } from "./NavMenu.styled.js";
import PropTypes from "prop-types";
import CustomSelectComponent from "../../UI/Select/Select.jsx";
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from "react-redux";
// import carsData from '../../data/DB/advertsCars.json';
import InputFilter from "../Filter/Filter.jsx";
import { ButtonSee } from "../Card/CardsFavorite.styled.js";
import { useEffect, useState } from "react";
import axios from "axios";

const NavMenu = ({
  setFilteredCars,
}) => {
  // const uniqueModels = Array.from(new Set(carsData.map(item => item.make)));
  // const uniqueRentalPrices = Array.from(new Set(carsData.map(item => item.rentalPrice)));
  // const uniqueMileage = Array.from(new Set(carsData.map(item => item.mileage)));

  // const [make, setMake] = useState("Enter the text");
  // const [rentalPrice, setRentalPrice] = useState("To $");
  // const [mileageFrom, setMileageFrom] = useState(""); 
  // const [mileageTo, setMileageTo] = useState(""); 
const [make, setMake] = useState("Enter the text");
  const [rentalPrice, setRentalPrice] = useState("To $");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [uniqueModels, setUniqueModels] = useState([]);
  const [uniqueRentalPrices, setUniqueRentalPrices] = useState([]);
  const [uniqueMileage, setUniqueMileage] = useState([]);
  const [carsData, setCarsData] = useState([]);
   useEffect(() => {
    // Завантаження даних з сервера під час завантаження компонента
    axios.get("/cars/")
      .then((response) => {
        const data = response.data;
        setCarsData(data);

        const models = Array.from(new Set(data.map(item => item.make)));
        const rentalPrices = Array.from(new Set(data.map(item => item.rentalPrice)));
        const mileageValues = Array.from(new Set(data.map(item => item.mileage)));

        setUniqueModels(["Enter the text", ...models]);
        setUniqueRentalPrices(["To $", ...rentalPrices]);
        setUniqueMileage(mileageValues.map(String));
      })
      .catch((error) => {
        console.error("Помилка при отриманні даних з сервера:", error);
      });
  }, []); 
  
  const handleSearchClick = () => {
  
  const startMilesInt = mileageFrom !== "" ? parseInt(mileageFrom.replace(/,/g, '')) : null;
  const endMilesInt = mileageTo !== "" ? parseInt(mileageTo.replace(/,/g, '')) : null;

  if (startMilesInt !== null && Number.isNaN(startMilesInt) ||
      endMilesInt !== null && Number.isNaN(endMilesInt)) {
    console.error('Please enter valid mileage values.');
    return;
  }
  

  const filteredCars = carsData.filter((car) => {
    const isMakeMatch = make === "Enter the text" || car.make === make;
    const isPriceMatch = rentalPrice === "To $" || car.rentalPrice === rentalPrice;
    const isMileageFromMatch = startMilesInt === null || car.mileage >= startMilesInt;
    const isMileageToMatch = endMilesInt === null || car.mileage <= endMilesInt;

    return isMakeMatch && isPriceMatch && isMileageFromMatch && isMileageToMatch;
  });

  setFilteredCars(filteredCars);
}


  return (
    <FilterContainer>
      <CustomSelectComponent
        // options={["Enter the text", ...uniqueModels]}
        // value={make}
        // onChange={(value) => setMake(value)}
        // placeholder="Enter the text"
        key={carsData.id}
         options={uniqueModels}
        value={make}
        onChange={(value) => setMake(value)}
        placeholder="Enter the text"
      />
      <CustomSelectComponent
        // options={["To $", ...uniqueRentalPrices]} 
        // value={rentalPrice}
        // onChange={(value) => setRentalPrice(value)}
        // placeholder="To $"
        options={uniqueRentalPrices}
        value={rentalPrice}
        onChange={(value) => setRentalPrice(value)}
        placeholder="To $"
      />
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
       <InputFilter
  // options={uniqueMileage.map(String)} 
  // value={mileageFrom.toLocaleString()}
  // onFilterChange={(value) => setMileageFrom(value)}
  // inputStyle="active"
  // inputPrefix="From"
  // name="fromFilter"
            options={uniqueMileage}
          value={mileageFrom.toLocaleString()}
          onFilterChange={(value) => setMileageFrom(value)}
          inputStyle="active"
          inputPrefix="From"
          name="fromFilter"
/>
<InputFilter
  // options={uniqueMileage.map(String)} 
  // value={mileageTo.toLocaleString()}
  // onFilterChange={(value) => setMileageTo(value)}
  // inputStyle="secondary"
  // inputPrefix="To"
  // name="toFilter"
            options={uniqueMileage}
          value={mileageTo.toLocaleString()}
          onFilterChange={(value) => setMileageTo(value)}
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
