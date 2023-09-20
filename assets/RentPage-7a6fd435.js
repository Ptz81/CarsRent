import{n as s,c as f,r as p,P as l,j as e,L}from"./index-41abf8aa.js";import{C as R,B as A,T as N}from"./CardsFavorite-8283b500.js";import{F as O,a as q,G as F}from"./CardsModal-a381c18d.js";import{c as C}from"./advertsCars-8074c75d.js";s.div`
    display: flex;
    max-width: 226px;
`;const W=s.div`
  position: relative;
  background: ${f.mainBgColor};
  color: ${f.textMainColor};
  margin: 0 auto;
`,D=s.div`
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
`;const Y=s.ul`
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
`,G=s.div`
  /* padding-bottom: 140px; */
  cursor: pointer;
`,V=({contentPerPage:n,count:c})=>{const[i,a]=p.useState(1),o=Math.ceil(c/n),x=i*n,g=x-n,u=d=>{a(r=>d?r===o?r:r+1:r===1?r:r-1)};return{totalPages:o,nextPage:()=>u(!0),prevPage:()=>u(!1),setPage:d=>{d>o?a(o):d<1?a(1):a(d)},firstContentIndex:g,lastContentIndex:x,page:i}},U=s.button`
  color: ${f.textMainColor};
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
`,H=s.p`
  // position: absolute;
  // z-index: 2;
`,J=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,S=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,$=({prevPage:n,totalPages:c,nextPage:i,page:a,setPage:o,pageType:x})=>{const[g,u]=p.useState("#F3F3F3"),[m,d]=p.useState("rgba(243, 243, 243, 0.30)");return p.useEffect(()=>{(()=>{const b=Object.values({page:a})[0],h=Object.values({totalPages:c})[0];b>1?d("#F3F3F3"):d("rgba(243, 243, 243, 0.30)"),u(b===h?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[a,c]),e.jsxs(J,{children:[e.jsx(S,{onClick:n,children:e.jsx(O,{style:{fill:`${m}`,width:"8px",height:"15px"}})}),[...Array(c).keys()].map(r=>e.jsx("li",{children:e.jsx(L,{to:`/${x}/${r+1}`,children:e.jsx(U,{onClick:()=>o(r+1),active:`${a===r+1?"active":""}`,children:e.jsx(H,{children:r+1})})})},r)),e.jsx(S,{onClick:i,children:e.jsx(q,{style:{fill:`${g}`,width:"8px",height:"15px"}})})]})};$.propTypes={prevPage:l.func,totalPages:l.number,nextPage:l.func,page:l.number,setPage:l.func,pageType:l.string};const M=({items:n,onDel:c})=>{const[i,a]=p.useState(8);p.useEffect(()=>{const t=()=>{window.innerWidth>1200?a(8):window.innerWidth>768?a(4):a(2)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const{firstContentIndex:o,lastContentIndex:x,nextPage:g,prevPage:u,page:m,setPage:d,totalPages:r}=V({contentPerPage:i,count:n.length}),b=async t=>{await c(t)},h=n.slice(o,x).map(t=>e.jsx(R,{...t,onDelete:b},t.id));return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:h}),e.jsx(G,{children:e.jsx($,{prevPage:u,totalPages:r,nextPage:g,page:m,setPage:d,pageType:"catalog"})})]})};M.propTypes={items:l.array,onDel:l.func};const K=s.div`
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
`;function Q(n){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(n)}function X(n){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(n)}const Z=s.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 800px) {
    width: 125px;
  &:first-of-type{
    width: 224px;
  }
  }
  
`,_=s.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: ${f.disabled};
  color: ${f.textMainColor};
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
`,ee=s.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${f.mainBgColor};
  color: ${f.selectColor};
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${f.mainBgColor};
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({isOpen:n})=>n?"block":"none"};
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: ${f.grayColor} transparent;
  ::-webkit-scrollbar {
    width: 8px;
    margin-right: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${f.disabled};
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,te=s.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${f.disabled};
  }
`,ne=s.div`
  color: ${f.textMainColor};
  font-size: 17px;
`,k=({options:n,value:c,onChange:i,placeholder:a})=>{const[o,x]=p.useState(!1),[g,u]=p.useState(c||""),m=r=>{r!==g&&(u(r),i(r)),x(!1)},d=()=>{x(!o)};return e.jsxs(Z,{children:[e.jsx(_,{onClick:d,children:a?g||e.jsx(ne,{children:a}):g}),o?e.jsx(X,{width:20,height:20,style:{position:"absolute",top:"15px",right:"20px"}}):e.jsx(Q,{style:{position:"absolute",top:"15px",right:"20px"}}),o&&e.jsx(ee,{isOpen:o,children:n.map(r=>e.jsx(te,{onClick:()=>m(r),children:r},r))})]})};k.propTypes={options:l.arrayOf(l.string),value:l.string,onChange:l.func,placeholder:l.string};const z=s.input`
max-width: 166px;
  padding: 14px 22px 14px 70px;
  padding-left: 70px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-size: 14px;
  border-radius: 14px 0 0 14px;
  background: ${f.disabled};
  color: ${f.textMainColor};
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
`,re=s(z)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`,oe=s.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`,P=({value:n,onFilterChange:c,inputStyle:i,inputPrefix:a})=>{let o;return i==="active"?o=z:i==="secondary"&&(o=re),e.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e.jsx(oe,{children:a}),e.jsx(o,{type:"text",name:"text",placeholder:"Enter the text",value:n,onChange:x=>c(x.target.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","))})]})};P.propTypes={value:l.string,inputStyle:l.string.isRequired,inputPrefix:l.string,onFilterChange:l.func.isRequired};const T=({setFilteredCars:n})=>{const c=Array.from(new Set(C.map(t=>t.make))),i=Array.from(new Set(C.map(t=>t.rentalPrice))),a=Array.from(new Set(C.map(t=>t.mileage))),[o,x]=p.useState("Enter the text"),[g,u]=p.useState("To $"),[m,d]=p.useState(""),[r,b]=p.useState(""),h=()=>{const t=m!==""?parseInt(m.replace(/,/g,"")):null,w=r!==""?parseInt(r.replace(/,/g,"")):null;if(t!==null&&Number.isNaN(t)||w!==null&&Number.isNaN(w)){console.error("Please enter valid mileage values.");return}const v=C.filter(y=>{const j=o==="Enter the text"||y.make===o,I=g==="To $"||y.rentalPrice===g,B=t===null||y.mileage>=t,E=w===null||y.mileage<=w;return j&&I&&B&&E});n(v)};return e.jsxs(K,{children:[e.jsx(k,{options:["Enter the text",...c],value:o,onChange:t=>x(t),placeholder:"Enter the text"}),e.jsx(k,{options:["To $",...i],value:g,onChange:t=>u(t),placeholder:"To $"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"18px"},children:[e.jsx(P,{options:a.map(String),value:m.toLocaleString(),onFilterChange:t=>d(t),inputStyle:"active",inputPrefix:"From",name:"fromFilter"}),e.jsx(P,{options:a.map(String),value:r.toLocaleString(),onFilterChange:t=>b(t),inputStyle:"secondary",inputPrefix:"To",name:"toFilter"})]}),e.jsx(A,{onClick:h,children:"Search"})]})};T.propTypes={setFilteredCars:l.func.isRequired};const le=()=>{const[n,c]=p.useState(""),[i,a]=p.useState("Select model"),[o,x]=p.useState("To $"),[g,u]=p.useState([]),m=h=>{c(h.target.value)},d=h=>{a(h)},r=h=>{x(h)};p.useEffect(()=>{const h=C.filter(t=>{const w=i==="Enter the text"||i==="Select model"||t.make===i,v=parseFloat(o.replace(/\$|\s/g,"")),y=o==="To $"||parseFloat(t.rentalPrice.replace(/\$|\s/g,""))<=v,j=n===""||n.includes("-");return n.includes("-")?b(n,t.mileage):parseInt(n)<=t.mileage,w&&y&&j});u(h)},[i,o,n]);function b(h,t){const[w,v]=h.split("-").map(y=>parseInt(y.trim()));return t>=w&&t<=v}return p.useEffect(()=>{i==="Select model"&&i==="Enter the text"&&o==="To $"&&n===""&&u(C)},[i,o,n]),e.jsx(e.Fragment,{children:e.jsx(W,{children:e.jsxs(D,{children:[e.jsx(N,{titlePage:"Rent of cars"}),e.jsx(T,{filter:n,make:i,rentalPrice:o,onFilterChange:m,onModelChange:d,onPriceChange:r,setFilteredCars:u}),e.jsx(M,{items:g})]})})})};export{le as default};
