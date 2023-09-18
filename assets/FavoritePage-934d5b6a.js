import{n as a,r as i,j as e}from"./index-483daed2.js";import{T as m,C as c}from"./CardsFavorite-2f422e55.js";import"./CardsModal-ce71f015.js";const g=a.div`
  position: relative;
  margin: 0 auto;
`,h=a.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,l=a.ul`
  z-index: 2;
  padding: 0 20px 80px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    margin-top: 40px;
  }
`,v=a.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,j=()=>{const[r,n]=i.useState([]),[s,p]=i.useState(!1);i.useEffect(()=>{const t=JSON.parse(localStorage.getItem("favoriteCars"))||[];n(t)},[s]);const o=t=>{const x=r.filter(d=>d.id!==t);localStorage.setItem("favoriteCars",JSON.stringify(x)),p(!s)};return e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(m,{titlePage:"Favorite cars"}),e.jsx(l,{children:r.map(t=>e.jsx(c,{...t,onRemove:o},t.id))})]})})})};export{v as Container,h as Container404,l as List,g as Page,j as default};
