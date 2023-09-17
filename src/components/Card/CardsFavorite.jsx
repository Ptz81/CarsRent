// import { Link } from "react-router-dom";
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
import { colors } from "../../styles/GlobalStyles";
import Modal from "../LoadModal/Modal.jsx";
import { useEffect, useState } from "react";
import CardsModal from "./CardsModal";


const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: transparent;
  stroke: white;
  stroke-width: 30px; 
  &:hover,
  &:focus, &:active{
    fill:${colors.hoverColor};
    stroke-opacity: 0.2;
  }
`;

const CardsFavorite = ({id, make, year, address, rentalCompany, type, model, accessories, mileage,  description, fuelConsumption, engineSize, functionalities, rentalPrice, img, onDelete }) => {
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

  const propsImg = Object.values({ img })[0];
  
  const addressText = address || "";
  const addressParts = addressText.split(', ');
  const city = addressParts[addressParts.length - 2];
  const accessoriesText = accessories || "";
  const advantages = accessoriesText[0];
  
  return (
    <Wrapper>
      <CardWrapper>
          {!propsImg || propsImg === '' ? (
        <Box/>
      ) : (
        <Img src={img}/>
      )}
        
        <HeartIcon size={32} onClick={() => onDelete(id)} />
      </CardWrapper>
      <Info>
        <Title>{make}
          <SubTitle> { model}</SubTitle> ,
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
        <Text style={{whiteSpace: "nowrap", width:"100px", overflow:'hidden'}}>{ model }</Text>
        <Text>{ id }</Text>
        <Text style={{whiteSpace: "nowrap", width:"100px", overflow:'hidden'}}>{ advantages }</Text>
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
            rentalPrice={rentalPrice}
            mileage={mileage}
            fuelConsumption={fuelConsumption}
            description={description}
            engineSize={engineSize}
            functionalities={functionalities}
            img={img}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default CardsFavorite;

CardsFavorite.propTypes = {
  id: PropTypes.number, 
  make: PropTypes.string,
  year: PropTypes.number,
  address: PropTypes.string,
  accessories: PropTypes.arrayOf(PropTypes.string),
  rentalCompany: PropTypes.string,
  model: PropTypes.string,
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