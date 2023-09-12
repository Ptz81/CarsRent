import { useState, useEffect } from "react";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

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
  );
};

export default Header;