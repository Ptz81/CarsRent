import styled from "@emotion/styled";
import { colors } from "../styles/GlobalStyles";
// import downArrow from './down-arrow-svgrepo-com.svg';
// import loop from './loop-svgrepo-com.svg'

export const InputWrapper = styled.div`
    display: flex;
    max-width: 226px;
`
export const Page = styled.div`
  position: relative;
  background: ${colors.mainBgColor};
  color: ${colors.textMainColor};
  margin: 0 auto;
`;
export const Container = styled.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    /* padding: 140px 32px 60px 32px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 150px 128px 100px 128px; */
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;

  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;

  }
`;

export const InputElem = styled.input`
max-width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: transparent;
  color: #f3f3f3;
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 265px;
    padding: 15px;
    padding-left: 24px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
     
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }

  ::before {
    content: "";
 
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }

`;

export const Select = styled.select`
  max-width: 335px;
  position: relative;
  ${'' /* padding: 18px 48px 18px 24px; */}
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  appearance: none;
  @media only screen and (min-width: 768px) {
    width: 200px;
    ${'' /* padding: 15px 48px 15px 24px; */}
    padding: 18px 24px;
    font-size: 17px;
  } 
  ::after {
    content: "";

    background-repeat: no-repeat;
    background-position: right center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; 
    width: 16px; 
    height: 16px; 
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;