import { useState, useEffect } from 'react';
import carsData from '../../data/DB/advertsCars.json';
import PropTypes from 'prop-types';
import {
  NameCategory,
  CarList,
  ImgContainer,
  ImgCar,
  NameAndType,
  NameCar,
  Cars,
} from './PopularCategories.styled.js';

const PopularCategories = ({ categoryCar }) => {
  const [cardsPerRow, setCardsPerRow] = useState(4);
  const [carsInCategory, setCarsInCategory] = useState([]);
    
  useEffect(() => {
    const carsOfType = carsData.filter((car) =>
      car.type.toLowerCase() === categoryCar.toLowerCase()
    );

    const updateCardsPerRow = () => {
      if (window.innerWidth > 1200) {
        setCardsPerRow(4);
      }else if (window.innerWidth > 1000) {
        setCardsPerRow(3);
      } else if (window.innerWidth > 768) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    updateCardsPerRow();

    setCarsInCategory(carsOfType);

    window.addEventListener('resize', updateCardsPerRow);

    return () => {
      window.removeEventListener('resize', updateCardsPerRow);
    };
  }, [categoryCar]);

  return (
    <div>
       <NameCategory>{categoryCar}</NameCategory>
      <CarList>
        {carsInCategory.slice(0, cardsPerRow).map((car) => (
          <li key={car.id}>
            <ImgContainer>
              <ImgCar src={car.img} alt={car.make} />
            </ImgContainer>

            <NameAndType>
              <NameCar>{car.make}</NameCar>
              <Cars to={`/car/${car.id}`}>See more</Cars>
            </NameAndType>
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
