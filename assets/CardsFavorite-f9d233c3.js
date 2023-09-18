import{n as i,c as n,P as e,j as t,r as v}from"./index-986080ef.js";import{b as N,M as A,C as H}from"./CardsModal-8ddd1191.js";const W=i.h1`
text-align: center;
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${n.textMainColor};


  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 64px;
  }
`,K=({titlePage:o})=>t.jsx(W,{children:o});K.propTypes={titlePage:e.string};const R=i.div`
width: 274px;
  /* flex-basis: 274px;  */
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
  /* margin: 20px; */

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 5);
    /* width: 342px;
    flex-basis: 342px; */
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 40px) /7);
    /* flex-basis: 274px; */
  }
`,U=i.span`
color: ${n.accentColor};
margin-left: 5px;
margin-right: 5px;
`,s=i.p`
  color: ${n.subTitleColor};
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
`,q=i.img`
  background-position: center top;
  object-fit: cover;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`,G=i.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`,b=i.div`
position: relative;
width: 274px;
`;i.img`
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    stroke: ${n.hoverColor};
    fill:${n.hoverColor};
  }
`;const F=i.div`
  color: ${n.textMainColor};
  display: flex;
  margin-bottom: 4px;
  /* font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; */

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Q=i.div`
  color: ${n.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,V=i.div`
  color: ${n.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-left: 140px; */

  /* @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  } */

  /* margin-bottom: 8px; */
`,X=i.div`
  width: auto;
 margin-top: 24px;
`,Y=i.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${n.accentColor};
  color: ${n.mainBgColor};
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
 

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background: ${n.hoverColor};
  }
`;i.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${n.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${n.hoverColor};
  }
`;const Z=i.div`
background-position: center top;
background-size: cover;
height: 268px;
justify-content: space-around;
  align-items: center;
  display: flex;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
/* 
@media screen and (min-width: 1440px) {
  height: 400px;
} */
`,_=i(N)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${o=>o.favorite?"blue":"transparent"};
  stroke: white;
  stroke-width: 30px;
  &:hover,
  &:focus,
  &:active {
    fill: ${o=>o.favorite?"blue":"transparent"};
    stroke-opacity: 0.2;
  }
`,ee=({id:o,make:d,year:x,address:h,rentalConditions:w,rentalCompany:y,type:f,model:c,accessories:j,mileage:C,description:k,fuelConsumption:T,engineSize:$,functionalities:z,rentalPrice:g,img:l})=>{const[a,p]=v.useState(!1),[m,M]=v.useState(!1),L=()=>{p(!a)},B=()=>{const r=JSON.parse(localStorage.getItem("favoriteCars"))||[];if(!r.some(u=>u.id===o)){if(m){const u=r.filter(J=>J.id!==o);localStorage.setItem("favoriteCars",JSON.stringify(u))}else r.push({id:o,make:d,year:x,address:h,rentalConditions:w,rentalCompany:y,type:f,model:c,accessories:j,mileage:C,description:k,fuelConsumption:T,engineSize:$,functionalities:z,rentalPrice:g,img:l}),localStorage.setItem("favoriteCars",JSON.stringify(r));M(!m)}},S=r=>{b.current&&!b.current.contains(r.target)&&p(!1)};v.useEffect(()=>{const r=E=>{E.key==="Escape"&&a&&p(!1)};return document.addEventListener("keydown",r),document.addEventListener("click",S),()=>{document.removeEventListener("keydown",r),document.removeEventListener("click",S)}},[a]);const I=Object.values({img:l})[0],O=(h||"").split(", "),P=O[O.length-2],D=(j||"")[0];return t.jsxs(R,{children:[t.jsxs(b,{children:[!I||I===""?t.jsx(Z,{}):t.jsx(q,{src:l}),t.jsx(_,{size:32,onClick:B,favorite:m})]}),t.jsxs(G,{children:[t.jsxs(Q,{children:[d,t.jsxs(U,{children:[" ",c,","]}),x]}),t.jsx(V,{children:g})]}),t.jsxs(F,{children:[t.jsx(s,{children:P}),t.jsx(s,{children:"Ukraine"}),t.jsx(s,{children:y})]}),t.jsxs(F,{children:[t.jsx(s,{children:f}),t.jsx(s,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:c}),t.jsx(s,{children:o}),t.jsx(s,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:D})]}),t.jsx(X,{children:t.jsx(Y,{onClick:L,children:"Learn more"})}),a&&t.jsx(A,{isOpen:a,closeModal:()=>p(!1),children:t.jsx(H,{id:o,make:d,model:c,year:x,type:f,rentalPrice:g,mileage:C,fuelConsumption:T,description:k,engineSize:$,functionalities:z,img:l,address:h,rentalConditions:w})})]})};ee.propTypes={id:e.number,make:e.string,year:e.number,address:e.string,accessories:e.arrayOf(e.string),rentalCompany:e.string,rentalConditions:e.string,model:e.string,favorite:e.bool,img:e.string,type:e.string,rentalPrice:e.string,CarThumb:e.string,mileage:e.number,description:e.string,fuelConsumption:e.string,engineSize:e.string,onDelete:e.func,photoLink:e.string,functionalities:e.arrayOf(e.string)};export{Y as B,ee as C,K as T};
