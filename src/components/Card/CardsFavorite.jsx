import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa"; 
import styled from "@emotion/styled";
import GreyPlugL from '../../assets/greyPlug/greyPlugL.svg';
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
  
} from "./CardsFavorite.styled.js";
import { colors } from "../../styles/GlobalStyles";


const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: transparent;
  stroke: white;
  stroke-width: 30px; 
  &:hover,
  &:focus{
    fill:${colors.hoverColor};
    stroke-opacity: 0.2;
  }
`;

const CardsFavorite = ({id, make, year, address, rentalCompany, type, model, accessories, rentalPrice, img, onDelete }) => {
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
        <Box>
          <GreyPlugL />
        </Box>
      ) : (
        <Img src={img}/>
      )}
        
        <HeartIcon size={32} onClick={() => onDelete(id)} />
      </CardWrapper>
      <Info>
        {/* <Title>{make}</Title> */}
        <Title>{make}, {year}</Title>
        <Price>{ rentalPrice}</Price>
        </Info>
        <Description>
          <Text>{ city }</Text>
          <Text>Ukraine</Text>
        <Text>{ rentalCompany }</Text>
      </Description>
              <Description>
        <Text>{ type}</Text>
        <Text>{ model }</Text>
        <Text>{ id }</Text>
        <Text style={{whiteSpace: "nowrap", width:"100px", overflow:'hidden'}}>{ advantages }</Text>
        </Description>
      
      <ListBtn>
        <Link style={{ textDecoration: "none" }} to={`/catalog/${id}`}>
          <ButtonSee>Learn more</ButtonSee>
        </Link>
      </ListBtn>
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
  onDelete: PropTypes.func, 
};