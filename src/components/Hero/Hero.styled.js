import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles.js";
import bcgDesktop from "../../assets/MainPage.jpg";

export const Section = styled.section`
position: relative;
  background-color: ${colors.mainBgColor};
  min-height: 100%;
  width: 100%;
`;
export const Container = styled.div`
  display: flex-inline;
  justify-content: st;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 1200px) {
    padding-top: 160px;
  }
`;
export const BcgWrapper = styled.div`
padding-left: 20px;
  height: 740px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0px;;
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url("${bcgDesktop}");

  @media screen and (min-width: 480px) {
    height: 790px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
  @media screen and (min-width: 768px) {
    height: 790px;
    padding-left: 50px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
  @media screen and (min-width: 1200px) {
    height: 790px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
`;
export const HeroTitle = styled.h1`
  max-width: 280px;
  color: ${colors.mainBgColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`;
export const HeroDescription = styled.p`
  max-width: 270px;
  color: ${colors.mainBgColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`;