import{n,c as i,P as t,j as e,r as d}from"./index-90f562fd.js";import{b as H,M as W,C as K}from"./CardsModal-cb6f2e35.js";const R=n.h1`
text-align: center;
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${i.textMainColor};


  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 64px;
  }
`,U=({titlePage:o})=>e.jsx(R,{children:o});U.propTypes={titlePage:t.string};const q=n.div`
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
`,A=n.span`
color: ${i.accentColor};
margin-left: 5px;
margin-right: 5px;
`,r=n.p`
  color: ${i.subTitleColor};
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
`,G=n.img`
  background-position: center top;
  object-fit: cover;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`,J=n.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`,x=n.div`
position: relative;
width: 274px;
`;n.img`
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    stroke: ${i.hoverColor};
    fill:${i.hoverColor};
  }
`;const j=n.div`
  color: ${i.textMainColor};
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
`,N=n.div`
  color: ${i.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,Q=n.div`
  color: ${i.textMainColor};
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
`,V=n.div`
  width: auto;
 margin-top: 24px;
`,X=n.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${i.accentColor};
  color: ${i.mainBgColor};
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
    background: ${i.hoverColor};
  }
`;n.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${i.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${i.hoverColor};
  }
`;const Y=n.div`
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
`,C=n(H)`
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
`,Z=({id:o,make:h,year:f,address:g,rentalConditions:k,rentalCompany:T,type:m,model:l,accessories:$,mileage:z,description:E,fuelConsumption:M,engineSize:S,functionalities:L,rentalPrice:u,img:p})=>{const[s,a]=d.useState(!1),[v,P]=d.useState(!1),O=()=>{a(!s)},B=()=>{P(!v)},w=c=>{x.current&&!x.current.contains(c.target)&&a(!1)};d.useEffect(()=>{const c=D=>{D.key==="Escape"&&s&&a(!1)};return document.addEventListener("keydown",c),document.addEventListener("click",w),()=>{document.removeEventListener("keydown",c),document.removeEventListener("click",w)}},[s]);const b=Object.values({img:p})[0],y=(g||"").split(", "),I=y[y.length-2],F=($||"")[0];return e.jsxs(q,{children:[e.jsxs(x,{children:[!b||b===""?e.jsx(Y,{}):e.jsx(G,{src:p}),e.jsx(C,{size:32,onClick:B,favorite:v})]}),e.jsxs(J,{children:[e.jsxs(N,{children:[h,e.jsxs(A,{children:[" ",l,","]}),f]}),e.jsx(Q,{children:u})]}),e.jsxs(j,{children:[e.jsx(r,{children:I}),e.jsx(r,{children:"Ukraine"}),e.jsx(r,{children:T})]}),e.jsxs(j,{children:[e.jsx(r,{children:m}),e.jsx(r,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:l}),e.jsx(r,{children:o}),e.jsx(r,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:F})]}),e.jsx(V,{children:e.jsx(X,{onClick:O,children:"Learn more"})}),s&&e.jsx(W,{isOpen:s,closeModal:()=>a(!1),children:e.jsx(K,{id:o,make:h,model:l,year:f,type:m,rentalPrice:u,mileage:z,fuelConsumption:M,description:E,engineSize:S,functionalities:L,img:p,address:g,rentalConditions:k})})]})};C.defaultProps={favorite:!1};Z.propTypes={id:t.number,make:t.string,year:t.number,address:t.string,accessories:t.arrayOf(t.string),rentalCompany:t.string,rentalConditions:t.string,model:t.string,img:t.string,type:t.string,rentalPrice:t.string,CarThumb:t.string,mileage:t.number,description:t.string,fuelConsumption:t.string,engineSize:t.string,onDelete:t.func,photoLink:t.string,functionalities:t.arrayOf(t.string)};export{X as B,Z as C,U as T};
