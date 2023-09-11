import {
  Section,
  Container,
  NavWrapper,
  LogoWrapper,
  NavList,
  TextWrapper,
  Text,
  StyledNav,
} from './Footer.styled.js';
import Logo from '../Logo/Logo.jsx';
// import SubscribeForm from '../SubscribeForm/SubscribeForm';
// import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <Section>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <Logo />
            {/* <Socials /> */}
          </LogoWrapper>
          <NavList>
            <li>
              <StyledNav to="/catalog">Catalog</StyledNav>
            </li>
            <li>
              <StyledNav to="/favorite">Favorites</StyledNav>
            </li>
          </NavList>
        </NavWrapper>
        {/* <SubscribeForm /> */}
      </Container>
      <TextWrapper>
        <Text>©2023 Rent Car. All rights reserved.</Text>
        {/* <PrivacyWrapper>
          <Text>
            <TermsLink to="/privacy">Privacy Policy</TermsLink>
          </Text>
          <Text>
            <TermsLink to="/terms">Terms of Service</TermsLink>
          </Text>
        </PrivacyWrapper> */}
      </TextWrapper>
    </Section>
  );
};

export default Footer;