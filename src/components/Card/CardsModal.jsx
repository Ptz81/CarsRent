// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { FaHeart } from "react-icons/fa"; 
// import styled from "@emotion/styled";
import GreyPlugL from '../../assets/GreyPlug/GreyPlugL.svg';
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


// const ConditionsArray = ({ rentalConditions }) => {
//   return rentalConditions.split('\n').map((phrase, index) => {
//     const parts = phrase.split(/(\d+)/);
//     const styledPhrase = parts.map((part, partIndex) => {
//       const isNumber = /\d+/.test(part);
//       return isNumber ? (
//         <span style={{ color: 'blue' }} key={partIndex}>
//           {part}
//         </span>
//       ) : (
//         part
//       );
//     });
    
//     return (
//       <ConditionsType key={index}>
//         {styledPhrase}
//       </ConditionsType>
//     );
//   });
// };

const CardsModal = ({id, make, model, type, year, img, address, mileage,  description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, photoLink }) => {
  const propsImg = Object.values({img})[0];
  const addressText = address || "";
  const addressParts = addressText.split(', ');
  const city = addressParts[addressParts.length - 2];
  const accessoriesText = accessories || "";
  const functionalitiesText = functionalities || "";
  // const conditionsArray = rentalConditions.split('\n');
  return (
    <Wrapper>
      <CardWrapper>
        {!propsImg || propsImg === '' ? (
          <Box>
            <GreyPlugL />
          </Box>
        ) : (
          <Img src={photoLink} />
        )}
      </CardWrapper>
      <Info>
        <Title>{make}
          <SubTitle>{model}</SubTitle>  ,
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
      <Conditions>
        <SecondTitle>Rental Conditions:</SecondTitle>
        {/* <>
           {conditionsArray.map((condition, index) => (
        <ConditionsType key={index}>
          {condition}
        </ConditionsType>
      ))}
        </> */}
        <ConditionsType>Mileage:{mileage}</ConditionsType>
        <ConditionsType>Price:{ rentalPrice}</ConditionsType>
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
  // onDelete: PropTypes.func, 
  fuelConsumption: PropTypes.string,
  rentalConditions: PropTypes.string,
  description: PropTypes.string,
  photoLink: PropTypes.string,
  engineSize: PropTypes.number,
};
// const CardsModal = ({id, make, model,type, year, img, address, rentalConditions, rentalCompany, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, photoLink, onDelete }) => {

//   const propsImg = Object.values({img})[0];
//   const addressText = address || "";
//   const addressParts = addressText.split(', ');
//   const city = addressParts[addressParts.length - 2];
//   const accessoriesText = accessories || "";
//   const functionalitiesText = functionalities || "";
//   const conditionsArray = rentalConditions.split('\n').map((phrase, index) => {
//     const parts = phrase.split(/(\d+)/);
//     const styledPhrase = parts.map((part, partIndex) => {
//       const isNumber = /\d+/.test(part);
//       return isNumber ? (
//         <span style={{ color: 'blue' }} key={partIndex}>
//           {part}
//         </span>
//       ) : (
//         part
//       );
//     });
    
  
//     return (
//       <Wrapper>
//         <CardWrapper>
//           {!propsImg || propsImg === '' ? (
//             <Box>
//               <GreyPlugL />
//             </Box>
//           ) : (
//             <Img src={photoLink} />
//           )}
        
//         </CardWrapper>
//         <Info>
//           <Title>{make}
//             <SubTitle>{model}</SubTitle>  ,
//             {year}
//           </Title>
//         </Info>
//         <Description>
//           <Text>{city}</Text>
//           <Text>Ukraine</Text>
//           <Text>Id:{id}</Text>
//           <Text>Year:{year}</Text>
//           <Text>Type:{type}</Text>
//         </Description>
//         <Description>
//           <Text>Fuel consumption{fuelConsumption}</Text>
//           <Text>Engine size: {engineSize}</Text>
//         </Description>
//         <About>{description}</About>
//         <Functionality>
//           <SecondTitle>Accessories and functionalities:</SecondTitle>
//           <Description>
//             <Text>{accessoriesText[0]}</Text>
//             <Text>{accessoriesText[1]}</Text>
//             <Text>{accessoriesText[2]}</Text>
//           </Description>
//           <Description>
//             <Text>{functionalitiesText[0]}</Text>
//             <Text>{functionalitiesText[1]}</Text>
//             <Text>{functionalitiesText[2]}</Text>
//           </Description>
//         </Functionality>
//         <Conditions>
//           <SecondTitle>Rental Conditions:</SecondTitle>
//           <ConditionsType key={index}>
//             {styledPhrase}
//           </ConditionsType>
//         </Conditions>
//         <ButtonSee>Rental car</ButtonSee>
//       </Wrapper>
//     );
  
// };

// export default CardsModal;

// CardsModal.propTypes = {
//   id: PropTypes.number, 
//   make: PropTypes.string,
//   year: PropTypes.number,
//   address: PropTypes.string,
//   accessories: PropTypes.arrayOf(PropTypes.string),
//   rentalCompany: PropTypes.string,
//   model: PropTypes.string,
//   img: PropTypes.string,
//   type: PropTypes.string, 
//   rentalPrice: PropTypes.string,
//   CarThumb: PropTypes.string, 
//   onDelete: PropTypes.func, 
//   rentalConditions: PropTypes.string,
// };