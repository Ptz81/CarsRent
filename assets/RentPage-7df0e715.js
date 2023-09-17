import{n as i,c as s,P as t,r as h,j as e,L as K}from"./index-e0ec0f59.js";import{T as J}from"./TitlePage-c999f7e3.js";import{F as Q,M as X,C as Z,a as _,b as ee,G as I,c as P}from"./CardsModal-cc2892f8.js";i.div`
    display: flex;
    max-width: 226px;
`;const te=i.div`
  position: relative;
  background: ${s.mainBgColor};
  color: ${s.textMainColor};
  margin: 0 auto;
`,ne=i.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    /* padding: 140px 32px 60px 32px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 150px 128px 100px 128px; */
  }
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 29px;

  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;

  }
`;i.input`
max-width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: transparent;
  color: #f3f3f3;
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 265px;
    padding: 15px;
    padding-left: 24px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
     
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }

  ::before {
    content: "";
 
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }

`;i.select`
  max-width: 335px;
  position: relative;
  ${""}
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;
  appearance: none;
  @media only screen and (min-width: 768px) {
    width: 200px;
    ${""}
    padding: 18px 24px;
    font-size: 17px;
  } 
  ::after {
    content: "";

    background-repeat: no-repeat;
    background-position: right center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px; 
    width: 16px; 
    height: 16px; 
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;const ie=i.div`
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
`,oe=i.span`
color: ${s.accentColor};
margin-left: 5px;
margin-right: 5px;
`,j=i.p`
  color: ${s.subTitleColor};
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
`,re=i.img`
  background-position: center top;
  object-fit: cover;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`,se=i.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`,$=i.div`
position: relative;
width: 274px;
`;i.img`
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    stroke: ${s.hoverColor};
    fill:${s.hoverColor};
  }
`;const E=i.div`
  color: ${s.textMainColor};
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
`,ae=i.div`
  color: ${s.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,pe=i.div`
  color: ${s.textMainColor};
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
`,le=i.div`
  width: auto;
 margin-top: 24px;
`,B=i.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${s.accentColor};
  color: ${s.mainBgColor};
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
    background: ${s.hoverColor};
  }
`;i.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${s.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${s.hoverColor};
  }
`;const de=i.div`
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
`,R=i(Q)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${n=>n.favorite?"blue":"transparent"};
  stroke: white;
  stroke-width: 30px;
  &:hover,
  &:focus,
  &:active {
    fill: ${n=>n.favorite?"blue":"transparent"};
    stroke-opacity: 0.2;
  }
`,O=({id:n,make:c,year:a,address:p,rentalCompany:o,type:f,model:x,accessories:g,mileage:m,description:l,fuelConsumption:r,engineSize:w,functionalities:u,rentalPrice:d,img:v})=>{const[b,y]=h.useState(!1),[C,N]=h.useState(!1),Y=()=>{y(!b)},G=()=>{N(!C)},S=k=>{$.current&&!$.current.contains(k.target)&&y(!1)};h.useEffect(()=>{const k=V=>{V.key==="Escape"&&b&&y(!1)};return document.addEventListener("keydown",k),document.addEventListener("click",S),()=>{document.removeEventListener("keydown",k),document.removeEventListener("click",S)}},[b]);const T=Object.values({img:v})[0],M=(p||"").split(", "),H=M[M.length-2],U=(g||"")[0];return e.jsxs(ie,{children:[e.jsxs($,{children:[!T||T===""?e.jsx(de,{}):e.jsx(re,{src:v}),e.jsx(R,{size:32,onClick:G,favorite:C})]}),e.jsxs(se,{children:[e.jsxs(ae,{children:[c,e.jsxs(oe,{children:[" ",x,","]}),a]}),e.jsx(pe,{children:d})]}),e.jsxs(E,{children:[e.jsx(j,{children:H}),e.jsx(j,{children:"Ukraine"}),e.jsx(j,{children:o})]}),e.jsxs(E,{children:[e.jsx(j,{children:f}),e.jsx(j,{style:{whiteSpace:"nowrap",width:"100px",overflow:"hidden"},children:x}),e.jsx(j,{children:n}),e.jsx(j,{style:{whiteSpace:"nowrap",width:"100px",overflow:"hidden"},children:U})]}),e.jsx(le,{children:e.jsx(B,{onClick:Y,children:"Learn more"})}),b&&e.jsx(X,{isOpen:b,closeModal:()=>y(!1),children:e.jsx(Z,{id:n,make:c,model:x,year:a,type:f,rentalPrice:d,mileage:m,fuelConsumption:r,description:l,engineSize:w,functionalities:u,img:v,address:p})})]})};R.defaultProps={favorite:!1};O.propTypes={id:t.number,make:t.string,year:t.number,address:t.string,accessories:t.arrayOf(t.string),rentalCompany:t.string,model:t.string,img:t.string,type:t.string,rentalPrice:t.string,CarThumb:t.string,mileage:t.number,description:t.string,fuelConsumption:t.string,engineSize:t.string,onDelete:t.func,photoLink:t.string,functionalities:t.arrayOf(t.string)};i.div`
`;const ce=i.ul`
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
`,xe=i.div`
  /* padding-bottom: 140px; */
  cursor: pointer;
`,ge=({contentPerPage:n,count:c})=>{const[a,p]=h.useState(1),o=Math.ceil(c/n),f=a*n,x=f-n,g=l=>{p(r=>l?r===o?r:r+1:r===1?r:r-1)};return{totalPages:o,nextPage:()=>g(!0),prevPage:()=>g(!1),setPage:l=>{l>o?p(o):l<1?p(1):p(l)},firstContentIndex:x,lastContentIndex:f,page:a}},he=i.button`
  color: ${s.textMainColor};
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${n=>n.active?"rgba(64, 112, 205, 0.50)":"transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`,fe=i.p`
  // position: absolute;
  // z-index: 2;
`,ue=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,L=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,q=({prevPage:n,totalPages:c,nextPage:a,page:p,setPage:o,pageType:f})=>{const[x,g]=h.useState("#F3F3F3"),[m,l]=h.useState("rgba(243, 243, 243, 0.30)");return h.useEffect(()=>{(()=>{const w=Object.values({page:p})[0],u=Object.values({totalPages:c})[0];w>1?l("#F3F3F3"):l("rgba(243, 243, 243, 0.30)"),g(w===u?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[p,c]),e.jsxs(ue,{children:[e.jsx(L,{onClick:n,children:e.jsx(_,{style:{fill:`${m}`,width:"8px",height:"15px"}})}),[...Array(c).keys()].map(r=>e.jsx("li",{children:e.jsx(K,{to:`/${f}/${r+1}`,children:e.jsx(he,{onClick:()=>o(r+1),active:`${p===r+1?"active":""}`,children:e.jsx(fe,{children:r+1})})})},r)),e.jsx(L,{onClick:a,children:e.jsx(ee,{style:{fill:`${x}`,width:"8px",height:"15px"}})})]})};q.propTypes={prevPage:t.func,totalPages:t.number,nextPage:t.func,page:t.number,setPage:t.func,pageType:t.string};const A=({items:n,onDel:c})=>{const[a,p]=h.useState(8);h.useEffect(()=>{const d=()=>{window.innerWidth>1200?p(8):window.innerWidth>768?p(4):p(2)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);const{firstContentIndex:o,lastContentIndex:f,nextPage:x,prevPage:g,page:m,setPage:l,totalPages:r}=ge({contentPerPage:a,count:n.length}),w=async d=>{await c(d)},u=n.slice(o,f).map(d=>e.jsx(O,{...d,onDelete:w},d.id));return e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:u}),e.jsx(xe,{children:e.jsx(q,{prevPage:g,totalPages:r,nextPage:x,page:m,setPage:l,pageType:"catalog"})})]})};A.propTypes={items:t.array,onDel:t.func};const me=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;

  }
`;function be(n){return I({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function we(n){return I({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const ye=i.div`
  position: relative;
  width: 125px;
  &:first-of-type{
    width: 224px;
  }

  
`,ve=i.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: ${s.disabled};
  color: ${s.textMainColor};
  outline: none;
  text-align: left;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    padding: 14px 10px 14px 18px;
    font-size: 17px;
    margin-bottom: 0;
  }
`,je=i.div`
  position: absolute;
  top: calc(100% + 4px);
  /* top:0; */
  left: 0;
  right: 0;
  background: ${s.mainBgColor};
  color: ${s.selectColor};
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${s.mainBgColor};
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({isOpen:n})=>n?"block":"none"};
  /* padding: 14px 18px 14px 18px; */
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: ${s.disabled} transparent;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${s.disabled};
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,Ce=i.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${s.disabled};
  }
`,ke=i.div`
  color: ${s.textMainColor};
  font-size: 17px;
`,z=({options:n,value:c,onChange:a,placeholder:p})=>{const[o,f]=h.useState(!1),[x,g]=h.useState(c||""),m=r=>{r!==x&&(g(r),a(r)),f(!1)},l=()=>{f(!o)};return e.jsxs(ye,{children:[e.jsx(ve,{onClick:l,children:p?x||e.jsx(ke,{children:p}):x}),o?e.jsx(we,{width:20,height:20,style:{position:"absolute",top:"15px",right:"20px"}}):e.jsx(be,{style:{position:"absolute",top:"15px",right:"20px"}}),o&&e.jsx(je,{isOpen:o,children:n.map(r=>e.jsx(Ce,{onClick:()=>m(r),children:r},r))})]})};z.propTypes={options:t.arrayOf(t.string),value:t.string,onChange:t.func,placeholder:t.string};const W=i.input`
max-width: 166px;
  padding: 14px 22px 14px 70px;
  padding-left: 70px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-size: 14px;
  border-radius: 14px 0 0 14px;
  background: ${s.disabled};
  color: ${s.textMainColor};
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 160px;
    padding: 14px;
    padding-left: 70px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
     
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 14px ;
    font-size: 17px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }
  ::before {
    content: "";
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }
`,Pe=i(W)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`,$e=i.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`,F=({filter:n,onFilterChange:c,inputStyle:a,inputPrefix:p})=>{let o;return a==="active"?o=W:a==="secondary"&&(o=Pe),e.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e.jsx($e,{children:p}),e.jsx(o,{type:"text",name:"text",placeholder:"Enter the text",value:n,onChange:c})]})};F.propTypes={filter:t.string.isRequired,onFilterChange:t.func.isRequired,onMileageChange:t.func,inputStyle:t.string.isRequired,inputPrefix:t.string};const D=({filter:n,make:c,rentalPrice:a,mileage:p,onFilterChange:o,onModelChange:f,onPriceChange:x})=>{const g=Array.from(new Set(P.map(l=>l.make))),m=Array.from(new Set(P.map(l=>l.rentalPrice)));return e.jsxs(me,{children:[e.jsx(z,{options:["Enter the text",...g],value:c,onChange:f,placeholder:"Enter the text"}),e.jsx(z,{options:["To $",...m],value:a,onChange:x,placeholder:"To $"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"18px"},children:[e.jsx(F,{value:p,filter:n,inputStyle:"active",onFilterChange:o,inputPrefix:"From",name:"from Filter"}),e.jsx(F,{value:p,filter:n,inputStyle:"secondary",onFilterChange:o,inputPrefix:"To",name:"toFilter"})]}),e.jsx(B,{children:"Search"})]})};D.propTypes={make:t.string,rentalPrice:t.string,mileage:t.number,onModelChange:t.func.isRequired,onPriceChange:t.func.isRequired,filter:t.string.isRequired,onFilterChange:t.func.isRequired,setFilteredCars:t.func.isRequired};const Ee=()=>{const[n,c]=h.useState(""),[a,p]=h.useState("Select model"),[o,f]=h.useState("To $"),[x,g]=h.useState([]),m=u=>{c(u.target.value)},l=u=>{p(u)},r=u=>{f(u)};h.useEffect(()=>{const u=P.filter(d=>{const v=a==="Enter the text"||a==="Select model"||d.make===a,b=parseFloat(o.replace(/\$|\s/g,"")),y=o==="To $"||parseFloat(d.rentalPrice.replace(/\$|\s/g,""))<=b,C=n===""||n.includes("-");return n.includes("-")?w(n,d.mileage):parseInt(n)<=d.mileage,v&&y&&C});g(u)},[a,o,n]);function w(u,d){const[v,b]=u.split("-").map(y=>parseInt(y.trim()));return d>=v&&d<=b}return h.useEffect(()=>{a==="Select model"&&a==="Enter the text"&&o==="To $"&&n===""&&g(P)},[a,o,n]),e.jsx(e.Fragment,{children:e.jsx(te,{children:e.jsxs(ne,{children:[e.jsx(J,{titlePage:"Rent of cars"}),e.jsx(D,{filter:n,make:a,rentalPrice:o,onFilterChange:m,onModelChange:l,onPriceChange:r,setFilteredCars:g}),e.jsx(A,{items:x})]})})})};export{Ee as default};
