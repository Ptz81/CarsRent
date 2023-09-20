import{n as i,c as n,P as e,j as t,r as f}from"./index-41abf8aa.js";import{b as A,M as H,C as R}from"./CardsModal-a381c18d.js";const W=i.h1`
text-align: center;
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${n.textMainColor};
margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 64px;
  }
`,K=({titlePage:h})=>t.jsx(W,{children:h});K.propTypes={titlePage:e.string};const U=i.div`
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
`,q=i.span`
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
`,G=i.img`
  background-position: center top;
  object-fit: cover;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`,Q=i.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`,w=i.div`
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
`;const M=i.div`
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
`,V=i.div`
  color: ${n.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,X=i.div`
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
`,Y=i.div`
  width: auto;
 margin-top: 24px;
 cursor: pointer;
`,Z=i.p`
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
  cursor: pointer;
 

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
`;const _=i.div`
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
`,ee=i(A)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: transparent;
   stroke: #fff;
  stroke-width: 30px;
  &:hover,
  &:focus,
  &:active {
    fill: blue;
    stroke-opacity: 0.2;
     stroke: blue; 
  }
`,te=({onRemove:h,id:r,make:g,year:m,address:u,rentalConditions:y,rentalCompany:j,type:v,model:p,accessories:C,mileage:k,description:T,fuelConsumption:S,engineSize:z,functionalities:$,rentalPrice:b,img:d})=>{const[c,x]=f.useState(!1),[L,I]=f.useState(!1);f.useEffect(()=>{const a=(JSON.parse(localStorage.getItem("favoriteCars"))||[]).some(l=>l.id===r);I(a)},[r]);const B=()=>{x(!c)},P=()=>{const o=JSON.parse(localStorage.getItem("favoriteCars"))||[],a=o.some(l=>l.id===r);if(a){const l=o.filter(D=>D.id!==r);localStorage.setItem("favoriteCars",JSON.stringify(l))}else o.push({id:r,make:g,year:m,address:u,rentalConditions:y,rentalCompany:j,type:v,model:p,accessories:C,mileage:k,description:T,fuelConsumption:S,engineSize:z,functionalities:$,rentalPrice:b,img:d}),localStorage.setItem("favoriteCars",JSON.stringify(o));I(!a)},O=o=>{w.current&&!w.current.contains(o.target)&&x(!1)};f.useEffect(()=>{const o=a=>{a.key==="Escape"&&c&&x(!1)};return document.addEventListener("keydown",o),document.addEventListener("click",O),()=>{document.removeEventListener("keydown",o),document.removeEventListener("click",O)}},[c]);const E=Object.values({img:d})[0],F=(u||"").split(", "),J=F[F.length-2],N=(C||"")[0];return t.jsxs(U,{onClick:P,children:[t.jsxs(w,{children:[!E||E===""?t.jsx(_,{}):t.jsx(G,{src:d,alt:"car photo"}),t.jsx(ee,{size:32,style:{fill:L?"blue":"transparent"}})]}),t.jsxs(Q,{children:[t.jsxs(V,{children:[g,t.jsxs(q,{children:[" ",p,","]}),m]}),t.jsx(X,{children:b})]}),t.jsxs(M,{children:[t.jsx(s,{children:J}),t.jsx(s,{children:"Ukraine"}),t.jsx(s,{children:j})]}),t.jsxs(M,{children:[t.jsx(s,{children:v}),t.jsx(s,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:p}),t.jsx(s,{children:r}),t.jsx(s,{style:{whiteSpace:"nowrap",width:"100%",overflow:"hidden"},children:N})]}),t.jsx(Y,{children:t.jsx(Z,{onClick:B,children:"Learn more"})}),c&&t.jsx(H,{isOpen:c,closeModal:()=>x(!1),children:t.jsx(R,{id:r,make:g,model:p,year:m,type:v,onRemove:h,rentalPrice:b,mileage:k,fuelConsumption:S,description:T,engineSize:z,functionalities:$,img:d,address:u,rentalConditions:y})})]})};te.propTypes={id:e.number,onRemove:e.func,make:e.string,year:e.number,address:e.string,accessories:e.arrayOf(e.string),rentalCompany:e.string,rentalConditions:e.string,model:e.string,favorite:e.bool,img:e.string,type:e.string,rentalPrice:e.string,CarThumb:e.string,mileage:e.number,description:e.string,fuelConsumption:e.string,engineSize:e.string,onDelete:e.func,photoLink:e.string,functionalities:e.arrayOf(e.string)};export{Z as B,te as C,K as T};
