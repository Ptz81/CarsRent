import { useState, useEffect } from 'react';
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
import { getAllCars } from '../../data/Api.jsx';

const PopularCategories = ({ categoryCar }) => {
  const [cardsPerRow, setCardsPerRow] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [carsData, setCarsData] = useState([]);
  const [carsInCategory, setCarsInCategory] = useState([]);

  const handleClickOutside = (event) => {
    if (CardWrapper.current && !CardWrapper.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCars();
        setCarsData(data);
      } catch (error) {
        console.error('Error fetching cars', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateCardsPerRow = () => {
      if (window.innerWidth > 1200) {
        setCardsPerRow(4);
      } else if (window.innerWidth > 1000) {
        setCardsPerRow(3);
      } else if (window.innerWidth > 768) {
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

  useEffect(() => {
    const updateCarsInCategory = () => {
      const filteredCars = carsData.filter((car) =>
        car.type.toLowerCase() === categoryCar.toLowerCase()
      );
      setCarsInCategory(filteredCars);
    };

    updateCarsInCategory();
  }, [categoryCar, carsData]);

  const handleToggle = (carId) => {
    const car = findCarById(carId);
    if (car) {
      setSelectedCar(car);
      setIsOpen(true);
    }
  };

  const findCarById = (carId) => {
    return carsInCategory.find((car) => car.id === carId);
  };

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
              <Cars onClick={() => handleToggle(car.id)}>See more</Cars>
            </NameAndType>
          </li>
        ))}
      </CarList>
      {isOpen && selectedCar && (
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <CardsModal
            id={selectedCar.id}
            make={selectedCar.make}
            model={selectedCar.model}
            year={selectedCar.year}
            type={selectedCar.type}
            rentalPrice={selectedCar.rentalPrice}
            mileage={selectedCar.mileage}
            fuelConsumption={selectedCar.fuelConsumption}
            description={selectedCar.description}
            engineSize={selectedCar.engineSize}
            functionalities={selectedCar.functionalities}
            img={selectedCar.img}
            address={selectedCar.address}
            rentalConditions={selectedCar.rentalConditions}
          />
        </Modal>
      )}
    </div>
  );
};

PopularCategories.propTypes = {
  categoryCar: PropTypes.string.isRequired,
};

export default PopularCategories;
