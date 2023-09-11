import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles.js';
import { TransitionMain } from '../../styles/shared.jsx';

export const StyledMenuIcon = styled.img`
  margin-left: 14px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: ${TransitionMain('scale')};
  &:hover,
  &:focus {
    scale: calc(1.05);
  }

  /* tablet screen */
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: ${colors.mainBgColor};
`;

