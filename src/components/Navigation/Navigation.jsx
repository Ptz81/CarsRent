import PropTypes from 'prop-types';
import { StyledNav, StyledNavLink } from './Navigation.styled.js';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={closeMobileMenu}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/catalog/1" onClick={closeMobileMenu}>
        Catalog
      </StyledNavLink>
      <StyledNavLink to="/favorite/1" onClick={closeMobileMenu}>
        Favorites
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
Navigation.propTypes = {
  closeMobileMenu: PropTypes.func,
};