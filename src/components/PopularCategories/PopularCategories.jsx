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
  CardWrapper
} from './PopularCategories.styled.js';
import Modal from '../LoadModal/Modal';
import CardsModal from '../Card/CardsModal';

const PopularCategories = ({ categoryCar }) => {
  const [cardsPerRow, setCardsPerRow] = useState(4);
  const [carsInCategory, setCarsInCategory] = useState([]);
     const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
    setIsOpen(!isOpen);
  };



  const handleClickOutside = (event) => {
    if (CardWrapper.current && !CardWrapper.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
     const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
 }, [isOpen]);
  
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
              <Cars onClick={handleToggle}>See more</Cars>
            </NameAndType>
          </li>
        ))}
      </CarList>
       {isOpen && (
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <CardsModal/>
        </Modal>
      )}
    </div>
  );
};

export default PopularCategories;

PopularCategories.propTypes = {
    categoryCar: PropTypes.string.isRequired,
};
