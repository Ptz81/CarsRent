// import { useState, useEffect } from 'react';
// import carsData from '../../data/DB/advertsCars.json';
// import PropTypes from 'prop-types';
// import {
//   NameCategory,
//   CarList,
//   ImgContainer,
//   ImgCar,
//   NameAndType,
//   NameCar,
//   Cars,
//   CardWrapper
// } from './PopularCategories.styled.js';
// import Modal from '../LoadModal/Modal';
// import CardsModal from '../Card/CardsModal';

// const PopularCategories = ({ categoryCar }) => {
//   const [cardsPerRow, setCardsPerRow] = useState(4);
//   const [carsInCategory, setCarsInCategory] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null);

//   const handleToggle = (car) => {
//     setSelectedCar(car);
//     setIsOpen(true);
//   };



//   const handleClickOutside = (event) => {
//     if (CardWrapper.current && !CardWrapper.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//      const handleKeyDown = (event) => {
//     if (event.key === "Escape" && isOpen) {
//       setIsOpen(false);
//     }
//   };
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("click", handleClickOutside);
//     };
//  }, [isOpen]);
  
//   useEffect(() => {
//     const carsOfType = carsData.filter((car) =>
//       car.type.toLowerCase() === categoryCar.toLowerCase()
//     );
//     const findCarById = (carId) => {
//   return carsOfType.find((car) => car.id === carId);
// };

//     const updateCardsPerRow = () => {
//       if (window.innerWidth > 1200) {
//         setCardsPerRow(4);
//       }else if (window.innerWidth > 1000) {
//         setCardsPerRow(3);
//       } else if (window.innerWidth > 768) {
//         setCardsPerRow(2);
//       } else {
//         setCardsPerRow(1);
//       }
//     };

//     updateCardsPerRow();

//     setCarsInCategory(carsOfType);

//     window.addEventListener('resize', updateCardsPerRow);

//     return () => {
//       window.removeEventListener('resize', updateCardsPerRow);
//     };
//   }, [categoryCar]);

//   return (
//     <div>
//        <NameCategory>{categoryCar}</NameCategory>
//       <CarList>
//         {carsInCategory.slice(0, cardsPerRow).map((car) => (
//           <li key={car.id}>
//             <ImgContainer>
//               <ImgCar src={car.img} alt={car.make} />
//             </ImgContainer>

//             <NameAndType>
//               <NameCar>{car.make}</NameCar>
//               <Cars onClick={handleToggle}>See more</Cars>
//             </NameAndType>
//           </li>
//         ))}
//       </CarList>
//        {isOpen && selectedCar && (
//         <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
//           <CardsModal
//             id={selectedCar.id}
//             make={selectedCar.make}
//             model={selectedCar.model}
//             year={selectedCar.year}
//             type={selectedCar.type}
//             rentalPrice={selectedCar.rentalPrice}
//             mileage={selectedCar.mileage}
//             fuelConsumption={selectedCar.fuelConsumption}
//             description={selectedCar.description}
//             engineSize={selectedCar.engineSize}
//             functionalities={selectedCar.functionalities}
//             img={selectedCar.img}
//             address={selectedCar.address}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };


// export default PopularCategories;
// PopularCategories.propTypes = {
//   categoryCar: PropTypes.string.isRequired,
// };
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
  const [selectedCar, setSelectedCar] = useState(null);

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
      } else if (window.innerWidth > 1000) {
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

  const findCarById = (carId) => {
    return carsInCategory.find((car) => car.id === carId);
  };

  const handleToggle = (carId) => {
    const car = findCarById(carId);
    if (car) {
      setSelectedCar(car);
      setIsOpen(true);
    }
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

export default PopularCategories;

PopularCategories.propTypes = {
  categoryCar: PropTypes.string.isRequired,
};
