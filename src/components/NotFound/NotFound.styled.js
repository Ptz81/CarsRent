import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    position: relative;
    max-width: 465px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;
export const WrapperForFour = styled.div`
display: flex;
justify-content: center;
position: relative;

`;
export const SpanStart = styled.span`
position: absolute;
top: 25%;
left: -100px;
color: ${colors.mainBgColor};
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`;
export const SpanEnd = styled.span`
position: absolute;
top: 25%;
color: ${colors.mainBgColor};
right: -100px;
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`;