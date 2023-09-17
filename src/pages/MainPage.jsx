import HeroSection from '../components/Hero/Hero.jsx';
import PopularCategories from '../components/PopularCategories/PopularCategories.jsx';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ButtonMain } from '../UI/Button/Button.jsx';

const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
  margin-top: 80px;
`;

export const Container = styled.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
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
          <PopularCategories categoryCar="SUV" />
          <ButtonWrapper>
            <ButtonMain type="button" buttonStyle='secondary' buttonName="Load more" onClick={handleButtonClick}/>
          </ButtonWrapper>
        </Container>
      </Page>
    </>
  );
};

export default MainPage;