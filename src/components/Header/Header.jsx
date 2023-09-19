import { useState, useEffect } from "react";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { HeaderContainer, StyledHeader } from "./Header.styled";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        <StyledHeader style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}/>;
      } else {
        <StyledHeader style={{ backgroundColor: "rgb(255, 255, 255)" }}/>;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileMenuVisible(true);
      } else {
        setIsMobileMenuVisible(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>


    <StyledHeader>
      <Logo />
      {isMobileMenuVisible ? (
        <>
          <MobileMenu />
        </>
      ) : (
        <>
          <Navigation />
        </>
      )}
      </StyledHeader>
          </HeaderContainer>
  );
};

export default Header;