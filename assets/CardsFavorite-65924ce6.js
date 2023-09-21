import{n as i,c as o,P as e,j as t,r as h}from"./index-084a58f4.js";import{b as A,M as H,C as R}from"./CardsModal-707ff992.js";const W=i.h1`
text-align: center;
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${o.textMainColor};
margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 64px;
  }
`,K=({titlePage:f})=>t.jsx(W,{children:f});K.propTypes={titlePage:e.string};const U=i.li`
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
color: ${o.accentColor};
margin-left: 5px;
margin-right: 5px;

`,s=i.li`
  color: ${o.subTitleColor};
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 12px;
max-width: 80px;
white-space: nowrap; 
overflow:hidden;
  
  :not(:last-child){
  border-right: 1px solid ${o.subTitleColor};
  padding-right: 10px;
  }
 
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
    stroke: ${o.hoverColor};
    fill:${o.hoverColor};
  }
`;const L=i.ul`
  color: ${o.textMainColor};
  display: flex;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,V=i.div`
  color: ${o.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
white-space: nowrap;
  overflow: hidden;
  
`,X=i.div`
  color: ${o.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,Y=i.div`
  width: auto;
 margin-top: 24px;
 cursor: pointer;
`,Z=i.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${o.accentColor};
  color: ${o.mainBgColor};
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
    background: ${o.hoverColor};
  }
`;i.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${o.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${o.hoverColor};
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
`,te=({onRemove:f,id:r,make:g,year:m,address:u,rentalConditions:y,rentalCompany:C,type:v,model:p,accessories:j,mileage:k,description:T,fuelConsumption:$,engineSize:S,functionalities:z,rentalPrice:b,img:d})=>{const[c,x]=h.useState(!1),[I,O]=h.useState(!1);h.useEffect(()=>{const a=(JSON.parse(localStorage.getItem("favoriteCars"))||[]).some(l=>l.id===r);O(a)},[r]);const B=()=>{x(!c)},P=()=>{const n=JSON.parse(localStorage.getItem("favoriteCars"))||[],a=n.some(l=>l.id===r);if(a){const l=n.filter(D=>D.id!==r);localStorage.setItem("favoriteCars",JSON.stringify(l))}else n.push({id:r,make:g,year:m,address:u,rentalConditions:y,rentalCompany:C,type:v,model:p,accessories:j,mileage:k,description:T,fuelConsumption:$,engineSize:S,functionalities:z,rentalPrice:b,img:d}),localStorage.setItem("favoriteCars",JSON.stringify(n));O(!a)},E=n=>{w.current&&!w.current.contains(n.target)&&x(!1)};h.useEffect(()=>{const n=a=>{a.key==="Escape"&&c&&x(!1)};return document.addEventListener("keydown",n),document.addEventListener("click",E),()=>{document.removeEventListener("keydown",n),document.removeEventListener("click",E)}},[c]);const F=Object.values({img:d})[0],M=(u||"").split(", "),J=M[M.length-2],N=(j||"")[0];return t.jsxs(U,{onClick:P,children:[t.jsxs(w,{children:[!F||F===""?t.jsx(_,{}):t.jsx(G,{src:d,alt:"car photo",width:"274px",height:"268px"}),t.jsx(ee,{size:32,style:{fill:I?"blue":"transparent",stroke:I?"transparent":"white"}})]}),t.jsxs(Q,{children:[t.jsxs(V,{children:[g,t.jsxs(q,{children:[" ",p,","]}),m]}),t.jsx(X,{children:b})]}),t.jsxs(L,{children:[t.jsx(s,{children:J}),t.jsx(s,{children:"Ukraine"}),t.jsx(s,{children:C})]}),t.jsxs(L,{children:[t.jsx(s,{children:v}),t.jsx(s,{children:p}),t.jsx(s,{children:r}),t.jsx(s,{children:N})]}),t.jsx(Y,{children:t.jsx(Z,{onClick:B,children:"Learn more"})}),c&&t.jsx(H,{isOpen:c,closeModal:()=>x(!1),children:t.jsx(R,{id:r,make:g,model:p,year:m,type:v,onRemove:f,rentalPrice:b,mileage:k,fuelConsumption:$,description:T,engineSize:S,functionalities:z,img:d,address:u,rentalConditions:y})})]})};te.propTypes={id:e.number,onRemove:e.func,make:e.string,year:e.number,address:e.string,accessories:e.arrayOf(e.string),rentalCompany:e.string,rentalConditions:e.string,model:e.string,favorite:e.bool,img:e.string,type:e.string,rentalPrice:e.string,CarThumb:e.string,mileage:e.number,description:e.string,fuelConsumption:e.string,engineSize:e.string,onDelete:e.func,photoLink:e.string,functionalities:e.arrayOf(e.string)};export{Z as B,te as C,K as T};
