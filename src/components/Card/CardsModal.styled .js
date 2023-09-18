import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

`;

export const SubTitle = styled.span`
color: ${colors.accentColor};
margin-left: 5px;
margin-right: 5px;
`
export const About = styled.p`
margin-top: 14px;
/* margin-bottom: 24px; */
font-size: 14px;
line-height: 20px;
`

export const Text = styled.p`
  color: ${colors.subTitleColor};
  font-family: inherit;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const Functionality = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const SecondTitle = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 20px;
margin-bottom: 8px;
margin-top: 24px;
`
export const CardWrapper = styled.div`
position: relative;
width: auto;
margin-bottom: 14px;
`
export const Img = styled.img`
  background-position: center top;
  object-fit: cover;
  width: 100%;
  height: 248px;
  border-radius: 14px;
`;

export const Info = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`;

export const Favorite = styled.img`
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    stroke: ${colors.hoverColor};
    fill:${colors.hoverColor};
  }
`;

export const Conditions = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 8px;
margin-bottom: 17px;

`
export const ConditionsType = styled.p`
border-radius: 35px;
background-color: ${colors.disabled};
color: ${colors.textMainColor};
font-size: 12px;
line-height: 18px;
 margin: 0;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block; /* Змінив display на inline-block */
  margin-right: 8px; 
`
export const Description = styled.div`
  color: ${colors.textMainColor};
  display: flex;
  margin-bottom: 4px;


  /* @media screen and (min-width: 768px) {
    font-size: 16px;
  } */
`;
export const Title = styled.div`
  color: ${colors.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`;


export const ButtonSee = styled.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${colors.accentColor};
  color: ${colors.mainBgColor};
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
 max-width: 168px;
 margin-top: 24px;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background: ${colors.hoverColor};
  }
`;
export const ButtonTrash = styled.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${colors.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${colors.hoverColor};
  }
`;

export const Box = styled.div`
background-position: center top;
background-size: cover;
height: 248px;
justify-content: space-around;
  align-items: center;
  display: flex;
  border-radius: 14px;
  background: rgba(22, 31, 55, 0.5);

/* @media screen and (min-width: 1440px) {
  height: 400px;
} */
`;