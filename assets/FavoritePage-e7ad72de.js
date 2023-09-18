import{n as t,r as i,j as e}from"./index-986080ef.js";import{T as p,C as s}from"./CardsFavorite-f9d233c3.js";import"./CardsModal-8ddd1191.js";const x=t.div`
  position: relative;
  margin: 0 auto;
`,l=t.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,o=t.ul`
  z-index: 2;
  padding: 0 20px 80px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    margin-top: 40px;
  }
`,d=t.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,v=()=>{const[r,n]=i.useState([]);return i.useEffect(()=>{const a=JSON.parse(localStorage.getItem("favoriteCars"))||[];n(a)},[]),e.jsx(e.Fragment,{children:e.jsx(x,{children:e.jsxs(d,{children:[e.jsx(p,{titlePage:"Favorite cars"}),e.jsx(o,{children:r.map(a=>e.jsx(s,{...a},a.id))})]})})})};export{d as Container,l as Container404,o as List,x as Page,v as default};
