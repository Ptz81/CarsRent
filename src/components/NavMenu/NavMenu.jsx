import { useState, useEffect } from "react";
import { FilterContainer } from "./NavMenu.styled.js";
import Filter from "../Filter/Filter.jsx";
import PropTypes from "prop-types";
import CustomSelectComponent from "../../UI/Select/Select.jsx";
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from "react-redux";
import carsData from '../../data/DB/advertsCars.json';


const NavMenu = ({
  filter,
  make,
  rentalPrice,
  onFilterChange,
  onCategoryChange,
  onIngredientChange,
  setFilteredCars,
}) => {
  const [myCars, setMyCars] = useState([]);
  const [models, setModels] = useState([]);
  const [prices, setPrices] = useState([]); 

//   const token = useSelector(state => state.auth.token);
//  useEffect(() => {
//   setToken(token);
//   const fetchData = async () => {
//     try {
//       const res = await instance.get('api/catalog/search?limit=60');
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
    useEffect(() => {
    setMyCars(carsData);

    const uniqueModels = Array.from(new Set(carsData.map(item => item.make)));
    const uniquePrice = Array.from(new Set(carsData.map(item => item.rentalPrice)));

    setModels([...uniqueModels]); 
    setPrices([...uniquePrice]); 
  }, []);

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
    filterCars(e.target.value, make, rentalPrice);
  };

  const handleCarChange = (selectedCar) => {
    onCategoryChange(selectedCar);
    filterCars(filter, selectedCar, rentalPrice);
  };

  const handlePriceChange = (selectedPrice) => {
    onIngredientChange(selectedPrice);
    filterCars(filter, make, selectedPrice);
  };

  const filterCars = (text, selectedCar, selectedPrice) => {
  const newFilteredCars = myCars.filter((car) => {
    const isCarMatch = selectedCar === "Select model" || car.make === selectedCar;
    const isPriceMatch = selectedPrice === "To $" || car.rentalPrice === selectedPrice;
    const isTextMatch = text === "" || car.make.toLowerCase().includes(text.toLowerCase());
    return isCarMatch && isPriceMatch && isTextMatch;
  });

  setFilteredCars(newFilteredCars);
};


  return (
    <FilterContainer>
      
      <CustomSelectComponent
        options={["Select model", ...models]}
        value={make} 
        onChange={handleCarChange}
        placeholder="Select model"
      />
      <CustomSelectComponent
        options={["To $", ...prices]} 
        value={rentalPrice} 
        onChange={handlePriceChange}
        placeholder="To $"
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Filter filter={filter} inputStyle='active' onFilterChange={handleFilterChange} inputPrefix="From" />
      <Filter filter={filter} inputStyle='secondary' onFilterChange={handleFilterChange} inputPrefix="To"/>
      </div>
      
    </FilterContainer>
  );
};

export default NavMenu;

NavMenu.propTypes = {
  make: PropTypes.string,
  rentalPrice: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onIngredientChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  setFilteredCars: PropTypes.func.isRequired,
};