import{n as s,c as g,r as x,P as r,j as e,L as B}from"./index-986080ef.js";import{C as T,B as E,T as I}from"./CardsFavorite-f9d233c3.js";import{F as L,a as q,G as F}from"./CardsModal-8ddd1191.js";import{c as w}from"./advertsCars-8074c75d.js";s.div`
    display: flex;
    max-width: 226px;
`;const A=s.div`
  position: relative;
  background: ${g.mainBgColor};
  color: ${g.textMainColor};
  margin: 0 auto;
`,O=s.div`
  padding: 80px 20px 40px 20px;
  max-width: 1500px;
margin-right: auto;
margin-left: auto;
  @media screen and (min-width: 768px) {
    /* padding: 140px 32px 60px 32px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 150px 128px 100px 128px; */
  }
`;s.div`
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
`;s.input`
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

`;s.select`
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
`;s.div`
`;const W=s.ul`
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
`,D=s.div`
  /* padding-bottom: 140px; */
  cursor: pointer;
`,N=({contentPerPage:t,count:l})=>{const[o,a]=x.useState(1),i=Math.ceil(l/t),u=o*t,f=u-t,c=p=>{a(n=>p?n===i?n:n+1:n===1?n:n-1)};return{totalPages:i,nextPage:()=>c(!0),prevPage:()=>c(!1),setPage:p=>{p>i?a(i):p<1?a(1):a(p)},firstContentIndex:f,lastContentIndex:u,page:o}},Y=s.button`
  color: ${g.textMainColor};
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${t=>t.active?"rgba(64, 112, 205, 0.50)":"transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`,G=s.p`
  // position: absolute;
  // z-index: 2;
`,V=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,P=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,S=({prevPage:t,totalPages:l,nextPage:o,page:a,setPage:i,pageType:u})=>{const[f,c]=x.useState("#F3F3F3"),[m,p]=x.useState("rgba(243, 243, 243, 0.30)");return x.useEffect(()=>{(()=>{const b=Object.values({page:a})[0],h=Object.values({totalPages:l})[0];b>1?p("#F3F3F3"):p("rgba(243, 243, 243, 0.30)"),c(b===h?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[a,l]),e.jsxs(V,{children:[e.jsx(P,{onClick:t,children:e.jsx(L,{style:{fill:`${m}`,width:"8px",height:"15px"}})}),[...Array(l).keys()].map(n=>e.jsx("li",{children:e.jsx(B,{to:`/${u}/${n+1}`,children:e.jsx(Y,{onClick:()=>i(n+1),active:`${a===n+1?"active":""}`,children:e.jsx(G,{children:n+1})})})},n)),e.jsx(P,{onClick:o,children:e.jsx(q,{style:{fill:`${f}`,width:"8px",height:"15px"}})})]})};S.propTypes={prevPage:r.func,totalPages:r.number,nextPage:r.func,page:r.number,setPage:r.func,pageType:r.string};const $=({items:t,onDel:l})=>{const[o,a]=x.useState(8);x.useEffect(()=>{const d=()=>{window.innerWidth>1200?a(8):window.innerWidth>768?a(4):a(2)};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);const{firstContentIndex:i,lastContentIndex:u,nextPage:f,prevPage:c,page:m,setPage:p,totalPages:n}=N({contentPerPage:o,count:t.length}),b=async d=>{await l(d)},h=t.slice(i,u).map(d=>e.jsx(T,{...d,onDelete:b},d.id));return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:h}),e.jsx(D,{children:e.jsx(S,{prevPage:c,totalPages:n,nextPage:f,page:m,setPage:p,pageType:"catalog"})})]})};$.propTypes={items:r.array,onDel:r.func};const U=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    gap: 8px;
    margin-top: 60px;

  }
  @media only screen and (min-width: 1200px) {
    margin-top: 80px;

  }
`;function H(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function J(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(t)}const K=s.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 800px) {
    width: 125px;
  &:first-of-type{
    width: 224px;
  }
  }
  
`,Q=s.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: ${g.disabled};
  color: ${g.textMainColor};
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
`,X=s.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${g.mainBgColor};
  color: ${g.selectColor};
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${g.mainBgColor};
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({isOpen:t})=>t?"block":"none"};
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: ${g.disabled} transparent;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${g.disabled};
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,Z=s.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${g.disabled};
  }
`,_=s.div`
  color: ${g.textMainColor};
  font-size: 17px;
`,j=({options:t,value:l,onChange:o,placeholder:a})=>{const[i,u]=x.useState(!1),[f,c]=x.useState(l||""),m=n=>{n!==f&&(c(n),o(n)),u(!1)},p=()=>{u(!i)};return e.jsxs(K,{children:[e.jsx(Q,{onClick:p,children:a?f||e.jsx(_,{children:a}):f}),i?e.jsx(J,{width:20,height:20,style:{position:"absolute",top:"15px",right:"20px"}}):e.jsx(H,{style:{position:"absolute",top:"15px",right:"20px"}}),i&&e.jsx(X,{isOpen:i,children:t.map(n=>e.jsx(Z,{onClick:()=>m(n),children:n},n))})]})};j.propTypes={options:r.arrayOf(r.string),value:r.string,onChange:r.func,placeholder:r.string};const z=s.input`
max-width: 166px;
  padding: 14px 22px 14px 70px;
  padding-left: 70px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-size: 14px;
  border-radius: 14px 0 0 14px;
  background: ${g.disabled};
  color: ${g.textMainColor};
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
`,ee=s(z)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`,te=s.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`,k=({filter:t,onFilterChange:l,inputStyle:o,inputPrefix:a})=>{let i;return o==="active"?i=z:o==="secondary"&&(i=ee),e.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e.jsx(te,{children:a}),e.jsx(i,{type:"text",name:"text",placeholder:"Enter the text",value:t,onChange:l})]})};k.propTypes={filter:r.string.isRequired,onFilterChange:r.func.isRequired,onMileageChange:r.func,inputStyle:r.string.isRequired,inputPrefix:r.string};const M=({filter:t,make:l,rentalPrice:o,mileage:a,onFilterChange:i,onModelChange:u,onPriceChange:f})=>{const c=Array.from(new Set(w.map(n=>n.make))),m=Array.from(new Set(w.map(n=>n.rentalPrice))),p=Array.from(new Set(w.map(n=>n.mileage)));return e.jsxs(U,{children:[e.jsx(j,{options:["Enter the text",...c],value:l,onChange:u,placeholder:"Enter the text"}),e.jsx(j,{options:["To $",...m],value:o,onChange:f,placeholder:"To $"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"18px"},children:[e.jsx(k,{options:[...p],value:a,filter:t,inputStyle:"active",onFilterChange:i,inputPrefix:"From",name:"fromFilter"}),e.jsx(k,{value:a,filter:t,inputStyle:"secondary",onFilterChange:i,inputPrefix:"To",name:"toFilter"})]}),e.jsx(E,{children:"Search"})]})};M.propTypes={make:r.string,rentalPrice:r.string,mileage:r.string,onModelChange:r.func.isRequired,onPriceChange:r.func.isRequired,filter:r.string.isRequired,onFilterChange:r.func.isRequired,setFilteredCars:r.func.isRequired};const ae=()=>{const[t,l]=x.useState(""),[o,a]=x.useState("Select model"),[i,u]=x.useState("To $"),[f,c]=x.useState([]),m=h=>{l(h.target.value)},p=h=>{a(h)},n=h=>{u(h)};x.useEffect(()=>{const h=w.filter(d=>{const y=o==="Enter the text"||o==="Select model"||d.make===o,C=parseFloat(i.replace(/\$|\s/g,"")),v=i==="To $"||parseFloat(d.rentalPrice.replace(/\$|\s/g,""))<=C,R=t===""||t.includes("-");return t.includes("-")?b(t,d.mileage):parseInt(t)<=d.mileage,y&&v&&R});c(h)},[o,i,t]);function b(h,d){const[y,C]=h.split("-").map(v=>parseInt(v.trim()));return d>=y&&d<=C}return x.useEffect(()=>{o==="Select model"&&o==="Enter the text"&&i==="To $"&&t===""&&c(w)},[o,i,t]),e.jsx(e.Fragment,{children:e.jsx(A,{children:e.jsxs(O,{children:[e.jsx(I,{titlePage:"Rent of cars"}),e.jsx(M,{filter:t,make:o,rentalPrice:i,onFilterChange:m,onModelChange:p,onPriceChange:n,setFilteredCars:c}),e.jsx($,{items:f})]})})})};export{ae as default};
