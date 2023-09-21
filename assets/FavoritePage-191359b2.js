import{n as i,r,j as e}from"./index-6e226077.js";import{T as c,C as m}from"./CardsFavorite-06e8d7e9.js";import{N as l}from"./notfoundpage-fcb94ca6.js";import"./CardsModal-8bcd6eb8.js";const g=i.div`
  position: relative;
  margin: 0 auto;
min-height: 85vh;
`,w=i.div`
  position: absolute;

  margin: -16px 0 40px 20px;
  @media screen and (min-width: 768px) {
    margin: -116px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 105px 0 62px 130px;
  }
`,f=i.ul`
  z-index: 2;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
     margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`,v=i.div`
  padding: 60px 30px 30px 30px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,h=i.div`
 display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  height: 100vh;
font-size: 30px;
text-transform: uppercase;
`,S=()=>{const[a,s]=r.useState([]),[n,o]=r.useState(!1);r.useEffect(()=>{const t=JSON.parse(localStorage.getItem("favoriteCars"))||[];s(t)},[n]);const p=t=>{const x=a.filter(d=>d.id!==t);localStorage.setItem("favoriteCars",JSON.stringify(x)),o(!n)};return e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(c,{titlePage:"Favorite cars"}),a.length>0?e.jsx(f,{children:a.map(t=>e.jsx(m,{...t,onRemove:p},t.id))}):e.jsxs(h,{children:[e.jsx("img",{width:"200px",src:l}),e.jsx("p",{children:"No favorite cars available."})]})]})})})};export{v as Container,w as Container404,f as List,g as Page,h as Warning,S as default};