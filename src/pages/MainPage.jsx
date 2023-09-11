import HeroSection from '../components/Hero/Hero.jsx';
import PopularCategories from '../components/PopularCategories/PopularCategories.jsx';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
// import { LoadBtn } from '../components/LoadBtn/LoadBtn.jsx';
import LoadBtn from '../components/LoadBtn/LoadBtn'

const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/catalog/1');
  };
  return (
    <>
      <HeroSection
        title="Unlock the Road to Adventure with Our Rental Cars"
        description="Embark on a journey of exploration and convenience with our unbeatable car rental services. Your next adventure begins here. "
      ></HeroSection>
      <Page>
        <Container>
          {' '}
          <PopularCategories categoryCar="Convertible" />
          <PopularCategories categoryCar="Sedan, Hatchback" />
          <ButtonWrapper>
            <LoadBtn  onClick={handleButtonClick}>
              Other cars
            </LoadBtn>
          </ButtonWrapper>
        </Container>
      </Page>
    </>
  );
};

export default MainPage;