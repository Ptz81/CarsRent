import{n as a,c as g,r as x,P as r,j as e,L as B}from"./index-90f562fd.js";import{C as T,B as E,T as I}from"./CardsFavorite-2bed5f1f.js";import{F as L,a as q,G as F}from"./CardsModal-cb6f2e35.js";import{c as w}from"./advertsCars-8074c75d.js";a.div`
    display: flex;
    max-width: 226px;
`;const A=a.div`
  position: relative;
  background: ${g.mainBgColor};
  color: ${g.textMainColor};
  margin: 0 auto;
`,O=a.div`
  padding: 80px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    /* padding: 140px 32px 60px 32px; */
  }
  @media screen and (min-width: 1200px) {
    /* padding: 150px 128px 100px 128px; */
  }
`;a.div`
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
`;a.input`
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

`;a.select`
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
`;a.div`
`;const W=a.ul`
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
`,D=a.div`
  /* padding-bottom: 140px; */
  cursor: pointer;
`,N=({contentPerPage:t,count:d})=>{const[o,s]=x.useState(1),i=Math.ceil(d/t),u=o*t,f=u-t,c=p=>{s(n=>p?n===i?n:n+1:n===1?n:n-1)};return{totalPages:i,nextPage:()=>c(!0),prevPage:()=>c(!1),setPage:p=>{p>i?s(i):p<1?s(1):s(p)},firstContentIndex:f,lastContentIndex:u,page:o}},Y=a.button`
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
`,G=a.p`
  // position: absolute;
  // z-index: 2;
`,V=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,P=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,S=({prevPage:t,totalPages:d,nextPage:o,page:s,setPage:i,pageType:u})=>{const[f,c]=x.useState("#F3F3F3"),[m,p]=x.useState("rgba(243, 243, 243, 0.30)");return x.useEffect(()=>{(()=>{const b=Object.values({page:s})[0],h=Object.values({totalPages:d})[0];b>1?p("#F3F3F3"):p("rgba(243, 243, 243, 0.30)"),c(b===h?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[s,d]),e.jsxs(V,{children:[e.jsx(P,{onClick:t,children:e.jsx(L,{style:{fill:`${m}`,width:"8px",height:"15px"}})}),[...Array(d).keys()].map(n=>e.jsx("li",{children:e.jsx(B,{to:`/${u}/${n+1}`,children:e.jsx(Y,{onClick:()=>i(n+1),active:`${s===n+1?"active":""}`,children:e.jsx(G,{children:n+1})})})},n)),e.jsx(P,{onClick:o,children:e.jsx(q,{style:{fill:`${f}`,width:"8px",height:"15px"}})})]})};S.propTypes={prevPage:r.func,totalPages:r.number,nextPage:r.func,page:r.number,setPage:r.func,pageType:r.string};const $=({items:t,onDel:d})=>{const[o,s]=x.useState(8);x.useEffect(()=>{const l=()=>{window.innerWidth>1200?s(8):window.innerWidth>768?s(4):s(2)};return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]);const{firstContentIndex:i,lastContentIndex:u,nextPage:f,prevPage:c,page:m,setPage:p,totalPages:n}=N({contentPerPage:o,count:t.length}),b=async l=>{await d(l)},h=t.slice(i,u).map(l=>e.jsx(T,{...l,onDelete:b},l.id));return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:h}),e.jsx(D,{children:e.jsx(S,{prevPage:c,totalPages:n,nextPage:f,page:m,setPage:p,pageType:"catalog"})})]})};$.propTypes={items:r.array,onDel:r.func};const U=a.div`
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
`;function H(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function J(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(t)}const K=a.div`
  position: relative;
  width: 125px;
  &:first-of-type{
    width: 224px;
  }
`,Q=a.button`
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
`,X=a.div`
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
`,Z=a.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${g.disabled};
  }
`,_=a.div`
  color: ${g.textMainColor};
  font-size: 17px;
`,j=({options:t,value:d,onChange:o,placeholder:s})=>{const[i,u]=x.useState(!1),[f,c]=x.useState(d||""),m=n=>{n!==f&&(c(n),o(n)),u(!1)},p=()=>{u(!i)};return e.jsxs(K,{children:[e.jsx(Q,{onClick:p,children:s?f||e.jsx(_,{children:s}):f}),i?e.jsx(J,{width:20,height:20,style:{position:"absolute",top:"15px",right:"20px"}}):e.jsx(H,{style:{position:"absolute",top:"15px",right:"20px"}}),i&&e.jsx(X,{isOpen:i,children:t.map(n=>e.jsx(Z,{onClick:()=>m(n),children:n},n))})]})};j.propTypes={options:r.arrayOf(r.string),value:r.string,onChange:r.func,placeholder:r.string};const z=a.input`
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
`,ee=a(z)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`,te=a.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`,k=({filter:t,onFilterChange:d,inputStyle:o,inputPrefix:s})=>{let i;return o==="active"?i=z:o==="secondary"&&(i=ee),e.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e.jsx(te,{children:s}),e.jsx(i,{type:"text",name:"text",placeholder:"Enter the text",value:t,onChange:d})]})};k.propTypes={filter:r.string.isRequired,onFilterChange:r.func.isRequired,onMileageChange:r.func,inputStyle:r.string.isRequired,inputPrefix:r.string};const M=({filter:t,make:d,rentalPrice:o,mileage:s,onFilterChange:i,onModelChange:u,onPriceChange:f})=>{const c=Array.from(new Set(w.map(n=>n.make))),m=Array.from(new Set(w.map(n=>n.rentalPrice))),p=Array.from(new Set(w.map(n=>n.mileage)));return e.jsxs(U,{children:[e.jsx(j,{options:["Enter the text",...c],value:d,onChange:u,placeholder:"Enter the text"}),e.jsx(j,{options:["To $",...m],value:o,onChange:f,placeholder:"To $"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"18px"},children:[e.jsx(k,{value:p,filter:t,inputStyle:"active",onFilterChange:i,inputPrefix:"From",name:"from Filter"}),e.jsx(k,{value:s,filter:t,inputStyle:"secondary",onFilterChange:i,inputPrefix:"To",name:"toFilter"})]}),e.jsx(E,{children:"Search"})]})};M.propTypes={make:r.string,rentalPrice:r.string,mileage:r.number,onModelChange:r.func.isRequired,onPriceChange:r.func.isRequired,filter:r.string.isRequired,onFilterChange:r.func.isRequired,setFilteredCars:r.func.isRequired};const ae=()=>{const[t,d]=x.useState(""),[o,s]=x.useState("Select model"),[i,u]=x.useState("To $"),[f,c]=x.useState([]),m=h=>{d(h.target.value)},p=h=>{s(h)},n=h=>{u(h)};x.useEffect(()=>{const h=w.filter(l=>{const y=o==="Enter the text"||o==="Select model"||l.make===o,C=parseFloat(i.replace(/\$|\s/g,"")),v=i==="To $"||parseFloat(l.rentalPrice.replace(/\$|\s/g,""))<=C,R=t===""||t.includes("-");return t.includes("-")?b(t,l.mileage):parseInt(t)<=l.mileage,y&&v&&R});c(h)},[o,i,t]);function b(h,l){const[y,C]=h.split("-").map(v=>parseInt(v.trim()));return l>=y&&l<=C}return x.useEffect(()=>{o==="Select model"&&o==="Enter the text"&&i==="To $"&&t===""&&c(w)},[o,i,t]),e.jsx(e.Fragment,{children:e.jsx(A,{children:e.jsxs(O,{children:[e.jsx(I,{titlePage:"Rent of cars"}),e.jsx(M,{filter:t,make:o,rentalPrice:i,onFilterChange:m,onModelChange:p,onPriceChange:n,setFilteredCars:c}),e.jsx($,{items:f})]})})})};export{ae as default};
