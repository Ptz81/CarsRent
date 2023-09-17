import PropTypes from "prop-types";

import {
  Wrapper,
  Img,
  Info,
  Title,
  Description,
  Text,
  ButtonSee,
  CardWrapper,
  About,
  Box,
  Functionality,
  SubTitle,
  SecondTitle,
  Conditions,
  ConditionsType,
} from "./CardsModal.styled .js";
// import ConditionsArray from "./ConditionsArray";


const CardsModal = ({id, make, model, type, year, img, address, mileage,  description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice }) => {
  const propsImg = Object.values({ img })[0];
  const addressText = address || "";
  const addressParts = addressText.split(', ');
  const city = addressParts[addressParts.length - 2];
  const accessoriesText = accessories || "";
  const functionalitiesText = functionalities || "";
  return (
    <Wrapper>
      <CardWrapper>
       {!propsImg || propsImg === '' ? (
        <Box/>
      ) : (
        <Img src={img}/>
      )}
      </CardWrapper>
      <Info>
        <Title>{make}
          <SubTitle>{model},</SubTitle>
          {year}
        </Title>
      </Info>
      <Description>
        <Text>{city}</Text>
        <Text>Ukraine</Text>
        <Text>Id:{id}</Text>
        <Text>Year:{year}</Text>
        <Text>Type:{type}</Text>
      </Description>
      <Description>
        <Text>Fuel consumption{fuelConsumption}</Text>
        <Text>Engine size: {engineSize}</Text>
      </Description>
      <About>{description}</About>
      <Functionality>
        <SecondTitle>Accessories and functionalities:</SecondTitle>
        <Description>
          <Text>{accessoriesText[0]}</Text>
          <Text>{accessoriesText[1]}</Text>
          <Text>{accessoriesText[2]}</Text>
        </Description>
        <Description>
          <Text>{functionalitiesText[0]}</Text>
          <Text>{functionalitiesText[1]}</Text>
          <Text>{functionalitiesText[2]}</Text>
        </Description>
      </Functionality>
      
        <SecondTitle>Rental Conditions:</SecondTitle>
<Conditions>
        {/* <>
           {ConditionsArray.map((condition, index) => (
        <ConditionsType key={index}>
          {condition}
        </ConditionsType>
      ))}
        </> */}
        <ConditionsType>Mileage:<SubTitle>{mileage}</SubTitle></ConditionsType>
        <ConditionsType>Price:<SubTitle>{ rentalPrice}</SubTitle></ConditionsType>
      </Conditions>
      <ButtonSee>Rental car</ButtonSee>
    </Wrapper>
  );
};

export default CardsModal;

CardsModal.propTypes = {
  id: PropTypes.number, 
  make: PropTypes.string,
  year: PropTypes.number,
  address: PropTypes.string,
  accessories: PropTypes.arrayOf(PropTypes.string),
functionalities: PropTypes.arrayOf(PropTypes.string),
  model: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string, 
  mileage: PropTypes.number,
  rentalPrice: PropTypes.string,
  CarThumb: PropTypes.string, 
  fuelConsumption: PropTypes.string,
  rentalConditions: PropTypes.string,
  description: PropTypes.string,
  photoLink: PropTypes.string,
  engineSize: PropTypes.string,
};
