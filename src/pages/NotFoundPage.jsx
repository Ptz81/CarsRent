import styled from "@emotion/styled";
import NotFound from "../components/NotFound/NotFound.jsx";
import { colors } from "../styles/GlobalStyles.js";

const Page = styled.div`
  position: relative;
  background: ${colors.subTitleColor};
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`;

const NotFoundPage = () => {
  return (
    <Page>
        <Container>
          <NotFound/>
        </Container>
      </Page>
  );
};

export default NotFoundPage;