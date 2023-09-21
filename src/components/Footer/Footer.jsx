import {
  Section,
  Container,
  NavWrapper,
  LogoWrapper,
  TextWrapper,
  Text,
} from './Footer.styled.js';
import Logo from '../Logo/Logo.jsx';
import Socials from '../Socials/Socials.jsx';

const Footer = () => {
  return (
    <Section>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <Logo />
            <Socials />
          </LogoWrapper>
        </NavWrapper>
      </Container>
      <TextWrapper>
        <Text>Contact phone: +380 2222222</Text>
      </TextWrapper>
      <TextWrapper>
        <Text>©TP 2023 Rent Car. All rights reserved.</Text>
      </TextWrapper>
    </Section>
  );
};

export default Footer;