import styled from "@emotion/styled";

export const FilterContainer = styled.div`
`;

export const List = styled.ul`
  z-index: 2;
  padding: 0 20px 80px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    /* padding: 0 32px 140px 32px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 0 20px 80px 20px; */
  }
`;

export const ContainerBtnPagination = styled.div`
  padding-bottom: 140px;
  cursor: pointer;
`;