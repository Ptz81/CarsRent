import { Link } from "react-router-dom";
import TrashIcon from "../../assets/trash.svg";
import PropTypes from "prop-types";
import {
  Wrapper,
  Img,
  Info,
  Title,
  Description,
  TextBox,
  Text,
  ListBtn,
  ButtonSee,
  ButtonTrash,
} from "./CardsFavorite.styled.js";

const CardsFavorite = ({id, make, description, CarThumb="../../assets/favorite.png", onDelete }) => {
 
  return (
    <Wrapper>
      <Img src={CarThumb} /> 
      <Info>
        <Title>{make}</Title>
        <Description>Description</Description>
        <TextBox>
          <Text>{description}</Text>
        </TextBox>
      </Info>
      <ListBtn>
        <Link style={{ textDecoration: "none" }} to={`/catalog/${id}`}>
          <ButtonSee>See car</ButtonSee>
        </Link>
        <ButtonTrash onClick={() => onDelete(id)}>
          <img src={TrashIcon} alt="trash icon" />
        </ButtonTrash>
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