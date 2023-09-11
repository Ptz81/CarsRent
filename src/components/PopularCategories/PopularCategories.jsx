import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from 'react-redux';
// import { selectCurrentUser } from '../../redux/selectors';
import carsData from '../../data/DB/advertsCars.json';
import PropTypes from 'prop-types';
import {
  NameCategory,
  CarList,
  ImgContainer,
  ImgCar,
  NameAndIngridients,
  NameCocktail,
  Ingredients,
} from './PopularCategories.styled.js';

const PopularCategories = ({ categoryCar }) => {
  const [carsInCategory, setCarsInCategory] = useState([]);
    const [cardsPerRow, setCardsPerRow] = useState(4);
    
    useEffect(() => {
    const carsOfType = carsData.filter((car) =>
    car.type.toLowerCase() === categoryCar.toLowerCase()
    );
    const index = Math.floor(Math.random() * carsOfType.length);
const randomCar = carsOfType[index];
    setCarsInCategory([randomCar]);
  }, [categoryCar]);
//   const token = useSelector(state => state.auth.token);
//   useEffect(() => {
//     setToken(token);
//     instance
//       .get('api/car/main-page', {
//         params: { category: categoryCar.toLowerCase() },
//       })
//       .then(res => {
//         const data = res.data;
//         setCarsInCategory(data[0].hits);
//       })
//       .catch(error => {
//         console.error('Error fetching cars:', error);
//       });
//   }, [categoryCar]);

  useEffect(() => {
    const updateCardsPerRow = () => {
      if (window.innerWidth > 768) {
        setCardsPerRow(4);
      } else if (window.innerWidth > 375) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    updateCardsPerRow();

    window.addEventListener('resize', updateCardsPerRow);

    return () => {
      window.removeEventListener('resize', updateCardsPerRow);
    };
  }, []);

  return (
    <div>
       <NameCategory>{categoryCar}</NameCategory>
      <CarList>
        {carsInCategory.slice(0, cardsPerRow).map((car) => (
          <li key={car.make}>
            <ImgContainer>
              <ImgCar src={car.img} alt={car.model} />
            </ImgContainer>

            <NameAndIngridients>
              <NameCocktail>{car.make}</NameCocktail>
              <Ingredients to={`/car/${car.id}`}>See more</Ingredients>
            </NameAndIngridients>
          </li>
        ))}
      </CarList>
    </div>
  );
};

export default PopularCategories;

PopularCategories.propTypes = {
    categoryCar: PropTypes.string.isRequired,
};