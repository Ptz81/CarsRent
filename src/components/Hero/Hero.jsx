import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import {
  Section,
  BcgWrapper,
  Container,
  HeroTitle,
  HeroDescription,
} from "./Hero.styled";
import { ButtonMain } from "../../UI/Button/Button";


const HeroSection = ({ title, description, children }) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/catalog/1");
  };
  return (
    <Section>
      <BcgWrapper>
        <Container>
          {title && <HeroTitle>{title}</HeroTitle>}
          {description && <HeroDescription>{description}</HeroDescription>}
          <ButtonMain type="button" buttonStyle='active' buttonName="Select a car" onClick={handleBtnClick}/>
          {children}
        </Container>
      </BcgWrapper>
    </Section>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};