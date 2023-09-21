import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa"; 
import styled from "@emotion/styled";

import {
  Wrapper,
  Img,
  Info,
  Title,
  Description,
  Text,
  ListBtn,
  ButtonSee,
  CardWrapper,
  Price,
  Box,
  SubTitle
} from "./CardsFavorite.styled.js";
import Modal from "../LoadModal/Modal.jsx";
import { useEffect, useState } from "react";
import CardsModal from "./CardsModal";


const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: transparent;
   stroke: #fff;
  stroke-width: 30px;
  &:hover,
  &:focus,
  &:active {
    fill: blue;
    stroke-opacity: 0.2;
     stroke: blue; 
  }
`;
const CardsFavorite = ({ onRemove, id, make, year, address, rentalConditions, rentalCompany, type, model, accessories, mileage,  description, fuelConsumption, engineSize, functionalities, rentalPrice, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    const isAlreadyFavorite = favoriteCars.some((car) => car.id === id);
    setIsFavorite(isAlreadyFavorite);
  }, [id]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleFavorite = () => {
    const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    const isAlreadyFavorite = favoriteCars.some((car) => car.id === id);

    if (isAlreadyFavorite) {
      const updatedFavoriteCars = favoriteCars.filter((car) => car.id !== id);
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavoriteCars));
    } else {
      favoriteCars.push({ id, make, year, address, rentalConditions, rentalCompany, type, model, accessories, mileage, description, fuelConsumption, engineSize, functionalities, rentalPrice, img });
      localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
    }

    setIsFavorite(!isAlreadyFavorite);
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

  const propsImg = Object.values({ img })[0];
  
  const addressText = address || "";
  const addressParts = addressText.split(', ');
  const city = addressParts[addressParts.length - 2];
  const accessoriesText = accessories || "";
  const advantages = accessoriesText[0];
  
  return (
    <Wrapper onClick={toggleFavorite}>
      <CardWrapper>
          {!propsImg || propsImg === '' ? (
        <Box/>
      ) : (
        <Img src={img} alt="car photo" width="274px" height= "268px"/>
      )}
        
      <HeartIcon
          size={32}
           style={{ fill: isFavorite ? 'blue' : 'transparent', stroke: isFavorite ? 'transparent' : 'white'}}
        />

      </CardWrapper>
      <Info>
        <Title>{make}
          <SubTitle> { model},</SubTitle>
           {year}
        </Title>
        <Price>{ rentalPrice}</Price>
        </Info>
        <Description>
          <Text>{ city }</Text>
          <Text>Ukraine</Text>
        <Text>{ rentalCompany }</Text>
      </Description>
              <Description>
        <Text>{ type}</Text>
        <Text style={{whiteSpace: "nowrap", overflow:'hidden'}}>{ model }</Text>
        <Text>{ id }</Text>
        <Text style={{whiteSpace: "nowrap",overflow:'hidden'}}>{ advantages }</Text>
        </Description>
      
      <ListBtn>
        <ButtonSee onClick={handleToggle} >Learn more</ButtonSee>
      </ListBtn>
    
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <CardsModal
             id={id}
            make={make}
            model={model}
            year={year}
            type={type}
            onRemove={onRemove}
            rentalPrice={rentalPrice}
            mileage={mileage}
            fuelConsumption={fuelConsumption}
            description={description}
            engineSize={engineSize}
            functionalities={functionalities}
            img={img}
            address={address}
            rentalConditions={rentalConditions}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default CardsFavorite;
// HeartIcon.defaultProps = {
//   favorite: "false",
// };
CardsFavorite.propTypes = {
  id: PropTypes.number, 
  onRemove: PropTypes.func,
  make: PropTypes.string,
  year: PropTypes.number,
  address: PropTypes.string,
  accessories: PropTypes.arrayOf(PropTypes.string),
  rentalCompany: PropTypes.string,
  rentalConditions: PropTypes.string,
  model: PropTypes.string,
  favorite: PropTypes.bool,
  img: PropTypes.string,
  type: PropTypes.string, 
  rentalPrice: PropTypes.string,
  CarThumb: PropTypes.string, 
  mileage: PropTypes.number,
  description: PropTypes.string,
  fuelConsumption: PropTypes.string,
  engineSize: PropTypes.string,
  onDelete: PropTypes.func, 
  photoLink: PropTypes.string,
  functionalities: PropTypes.arrayOf(PropTypes.string),

};