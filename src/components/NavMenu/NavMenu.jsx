// import { useState, useEffect } from "react";
import { FilterContainer } from "./NavMenu.styled.js";
import PropTypes from "prop-types";
import CustomSelectComponent from "../../UI/Select/Select.jsx";
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from "react-redux";
import carsData from '../../data/DB/advertsCars.json';
import InputFilter from "../Filter/Filter.jsx";
import { ButtonSee } from "../Card/CardsFavorite.styled.js";


const NavMenu = ({
  filter,
  make,
  rentalPrice,
  mileage,
  onFilterChange,
  onModelChange,
  onPriceChange,
  // setFilteredCars,
}) => {

 const uniqueModels = Array.from(
  new Set(carsData.map(item => item.make))
);

 const uniqueRentalPrices = Array.from(
  new Set(carsData.map(item => item.rentalPrice))
);
  const uniqueMileage = Array.from(
  new Set(carsData.map(item => item.mileage))
);
  
  return (
    <FilterContainer>
      
      <CustomSelectComponent
        options={["Enter the text", ...uniqueModels]}
        value={make} 
        onChange={onModelChange}
        placeholder="Enter the text"
      />
      <CustomSelectComponent
        options={["To $", ...uniqueRentalPrices]} 
        value={rentalPrice} 
        onChange={onPriceChange}
        placeholder="To $"
      />
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
        <InputFilter
          value={uniqueMileage}
          filter={filter}
          inputStyle="active"
          onFilterChange={onFilterChange}
          inputPrefix="From"
          name="from Filter"
        />
        <InputFilter
          value={mileage}
          filter={filter}
          inputStyle="secondary"
          onFilterChange={onFilterChange}
          inputPrefix="To"
          name="toFilter"
        />
       
      </div>
       <ButtonSee>Search</ButtonSee>
    </FilterContainer>
  );
};

export default NavMenu;

NavMenu.propTypes = {
  make: PropTypes.string,
  rentalPrice: PropTypes.string,
  mileage: PropTypes.number,
  onModelChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  setFilteredCars: PropTypes.func.isRequired,
};
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

//   const handleFilterChange = (e) => {
//     // const { name, value } = e.target.value;
//   // if (name === "fromFilter") {
//   //   setFromFilter(value);
//   // } else if (name === "toFilter") {
//   //   setToFilter(value);
//   //   }
//     onFilterChange(e.target.value);
//   filterCars(e.target.value, make, rentalPrice);
// };

// const handleCarChange = (selectedCar) => {
//   onCategoryChange(selectedCar);
//   filterCars(filter, selectedCar, rentalPrice);
// };

// const handlePriceChange = (selectedPrice) => {
//   onPriceChange(selectedPrice);
//   filterCars(filter, make, selectedPrice);
// };
//   const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   onFilterChange(name, value);
// };


  



// import { useState, useEffect } from 'react';
// import Filter from "../Filter/Filter.jsx";
// import { FilterContainer } from "./NavMenu.styled.js";
// import PropTypes from "prop-types";
// import CustomSelectComponent from "../../UI/Select/Select.jsx";
// import carsData from '../../data/DB/advertsCars.json';
// const NavMenu = ({ filter, make, rentalPrice, onFilterChange, onCategoryChange, onPriceChange, setFilteredCars }) => {
//   // Логіка фільтрації та вибору даних тут

//   const handleMakeChange = (selectedMake) => {
//     // Фільтрація за маркою (make) автомобіля
//     const filteredCarsByMake = carsData.filter(car => car.make === selectedMake);
//     setFilteredCars(filteredCarsByMake);
//   };

//   const handlePriceChange = (selectedPrice) => {
//     // Фільтрація за ціною оренди (rentalPrice)
//     const filteredCarsByPrice = carsData.filter(car => car.rentalPrice <= selectedPrice);
//     setFilteredCars(filteredCarsByPrice);
//   };

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

//   return (
//     <FilterContainer>
//       <CustomSelectComponent
//         options={make}
//         placeholder="Select model"
//         onChange={handleMakeChange}
//       />
//       <CustomSelectComponent
//         options={rentalPrice}
//         placeholder="To $"
//         onChange={handlePriceChange}
//       />
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//          <Filter

//       />
//         <Filter  

//         />
//       </div>
//     </FilterContainer>
//   );
// };

// export default NavMenu;
// NavMenu.propTypes = {
//   make: PropTypes.string,
//   rentalPrice: PropTypes.string,
//   onCategoryChange: PropTypes.func.isRequired,
//   onPriceChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
//   setFilteredCars: PropTypes.func.isRequired,
// };