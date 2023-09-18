import{n as t,r as i,j as a}from"./index-90f562fd.js";import{T as n,C as o}from"./CardsFavorite-2bed5f1f.js";import"./CardsModal-cb6f2e35.js";const p=t.div`
  position: relative;
  margin: 0 auto;
`,g=t.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,x=t.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,l=()=>{const[r,s]=i.useState([]);return i.useEffect(()=>{const e=JSON.parse(localStorage.getItem("favoriteCars"))||[];s(e)},[]),a.jsx(a.Fragment,{children:a.jsx(p,{children:a.jsxs(x,{children:[a.jsx(n,{titlePage:"Favorite cars"}),r.map(e=>a.jsx(o,{...e},e.id))]})})})};export{x as Container,g as Container404,p as Page,l as default};
