import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa"; 
import styled from "@emotion/styled";

import {
  Wrapper,
  Img,
  Info,
  Title,
  Description,
  // TextBox,
  Text,
  ListBtn,
  ButtonSee,
  CardWrapper,
  Price,
  
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

const CardsFavorite = ({id, make, description, CarThumb="/volvo red.jpg", onDelete }) => {

  return (
    <Wrapper>
      <CardWrapper>
        <Img src={CarThumb}/>
        <HeartIcon size={32} onClick={() => onDelete(id)} />
      </CardWrapper>
      <Info>
        {/* <Title>{make}</Title> */}
        <Title>Volvo, 2006</Title>
        <Price>55$</Price>
        </Info>
        <Description>
          <Text>Kharkiv</Text>
          <Text>Ukraine</Text>
          <Text>Adventure Car Rentals</Text>
      </Description>
              <Description>
          <Text>Suv</Text>
          <Text>JXV 150</Text>
        <Text>9587</Text>
        <Text>Premium sound system</Text>
        </Description>
          {/* <Text>{description}</Text> */}
      
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
  id: PropTypes.string, 
  make: PropTypes.string, 
  description: PropTypes.string, 
  CarThumb: PropTypes.string, 
  onDelete: PropTypes.func, 
};