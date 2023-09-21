import{n as s,c as h,r as o,P as p,j as e,L as q}from"./index-6e226077.js";import{C as N,B as O,T as W}from"./CardsFavorite-06e8d7e9.js";import{F as U,a as V,G as E}from"./CardsModal-8bcd6eb8.js";import{a as Y,g as G}from"./Api-55848266.js";s.div`
    display: flex;
    max-width: 226px;
`;const H=s.div`
  position: relative;
  background: ${h.mainBgColor};
  color: ${h.textMainColor};
  margin: 0 auto;
`,J=s.div`
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
`;const K=s.ul`
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
`,Q=s.div`
  /* padding-bottom: 140px; */
  cursor: pointer;
`,X=({contentPerPage:t,count:c})=>{const[a,i]=o.useState(1),r=Math.ceil(c/t),d=a*t,f=d-t,x=g=>{i(n=>g?n===r?n:n+1:n===1?n:n-1)};return{totalPages:r,nextPage:()=>x(!0),prevPage:()=>x(!1),setPage:g=>{g>r?i(r):g<1?i(1):i(g)},firstContentIndex:f,lastContentIndex:d,page:a}},Z=s.button`
  color: ${h.textMainColor};
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
`,_=s.p`
  // position: absolute;
  // z-index: 2;
`,ee=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,T=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`,I=({prevPage:t,totalPages:c,nextPage:a,page:i,setPage:r,pageType:d})=>{const[f,x]=o.useState("#F3F3F3"),[m,g]=o.useState("rgba(243, 243, 243, 0.30)");return o.useEffect(()=>{(()=>{const C=Object.values({page:i})[0],v=Object.values({totalPages:c})[0];C>1?g("#F3F3F3"):g("rgba(243, 243, 243, 0.30)"),x(C===v?"rgba(243, 243, 243, 0.30)":"#F3F3F3")})()},[i,c]),e.jsxs(ee,{children:[e.jsx(T,{onClick:t,children:e.jsx(U,{style:{fill:`${m}`,width:"8px",height:"15px"}})}),[...Array(c).keys()].map(n=>e.jsx("li",{children:e.jsx(q,{to:`/${d}/${n+1}`,children:e.jsx(Z,{onClick:()=>r(n+1),active:`${i===n+1?"active":""}`,children:e.jsx(_,{children:n+1})})})},n)),e.jsx(T,{onClick:a,children:e.jsx(V,{style:{fill:`${f}`,width:"8px",height:"15px"}})})]})};I.propTypes={prevPage:p.func,totalPages:p.number,nextPage:p.func,page:p.number,setPage:p.func,pageType:p.string};const B=({items:t,onDel:c})=>{const[a,i]=o.useState(8);o.useEffect(()=>{const b=()=>{window.innerWidth>1200?i(8):window.innerWidth>768?i(4):i(2)};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[]);const{firstContentIndex:r,lastContentIndex:d,nextPage:f,prevPage:x,page:m,setPage:g,totalPages:n}=X({contentPerPage:a,count:t.length}),C=async b=>{await c(b)},v=t.slice(r,d).map(b=>e.jsx(N,{...b,onDelete:C},b.id));return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:v}),e.jsx(Q,{children:e.jsx(I,{prevPage:x,totalPages:n,nextPage:f,page:m,setPage:g,pageType:"catalog"})})]})};B.propTypes={items:p.array,onDel:p.func};const te=s.div`
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
`;function ne(t){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function re(t){return E({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(t)}const oe=s.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 800px) {
    width: 125px;
  &:first-of-type{
    width: 224px;
  }
  }
  
`,ie=s.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: ${h.disabled};
  color: ${h.textMainColor};
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
`,ae=s.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${h.mainBgColor};
  color: ${h.selectColor};
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${h.mainBgColor};
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({isOpen:t})=>t?"block":"none"};
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: ${h.grayColor} transparent;
  ::-webkit-scrollbar {
    width: 8px;
    margin-right: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${h.disabled};
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,se=s.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${h.disabled};
  }
`,le=s.div`
  color: ${h.textMainColor};
  font-size: 17px;
`,M=({options:t,value:c,onChange:a,placeholder:i})=>{const[r,d]=o.useState(!1),[f,x]=o.useState(c||""),m=n=>{n!==f&&(x(n),a(n)),d(!1)},g=()=>{d(!r)};return e.jsxs(oe,{children:[e.jsx(ie,{onClick:g,children:i?f||e.jsx(le,{children:i}):f}),r?e.jsx(re,{width:20,height:20,style:{position:"absolute",top:"15px",right:"20px"}}):e.jsx(ne,{style:{position:"absolute",top:"15px",right:"20px"}}),r&&e.jsx(ae,{isOpen:r,children:t.map(n=>e.jsx(se,{onClick:()=>m(n),children:n},n))})]})};M.propTypes={options:p.arrayOf(p.string),value:p.string,onChange:p.func,placeholder:p.string};const L=s.input`
max-width: 166px;
  padding: 14px 22px 14px 70px;
  padding-left: 70px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-size: 14px;
  border-radius: 14px 0 0 14px;
  background: ${h.disabled};
  color: ${h.textMainColor};
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
`,pe=s(L)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`,ce=s.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`,z=({value:t,onFilterChange:c,inputStyle:a,inputPrefix:i})=>{let r;return a==="active"?r=L:a==="secondary"&&(r=pe),e.jsxs("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[e.jsx(ce,{children:i}),e.jsx(r,{type:"text",name:"text",placeholder:"Enter the text",value:t,onChange:d=>c(d.target.value.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,","))})]})};z.propTypes={value:p.string,inputStyle:p.string.isRequired,inputPrefix:p.string,onFilterChange:p.func.isRequired};const R=({setFilteredCars:t})=>{const[c,a]=o.useState("Enter the text"),[i,r]=o.useState("To $"),[d,f]=o.useState(""),[x,m]=o.useState(""),[g,n]=o.useState([]),[C,v]=o.useState([]),[b,w]=o.useState([]),[u,P]=o.useState([]);o.useEffect(()=>{Y.get("/cars/").then(l=>{const y=l.data;P(y);const F=Array.from(new Set(y.map(j=>j.make))),k=Array.from(new Set(y.map(j=>j.rentalPrice))),$=Array.from(new Set(y.map(j=>j.mileage)));n(["Enter the text",...F]),v(["To $",...k]),w($.map(String))}).catch(l=>{console.error("Помилка при отриманні даних з сервера:",l)})},[]);const S=()=>{const l=d!==""?parseInt(d.replace(/,/g,"")):null,y=x!==""?parseInt(x.replace(/,/g,"")):null;if(l!==null&&Number.isNaN(l)||y!==null&&Number.isNaN(y)){console.error("Please enter valid mileage values.");return}const F=u.filter(k=>{const $=c==="Enter the text"||k.make===c,j=i==="To $"||k.rentalPrice===i,A=l===null||k.mileage>=l,D=y===null||k.mileage<=y;return $&&j&&A&&D});t(F)};return e.jsxs(te,{children:[e.jsx(M,{options:g,value:c,onChange:l=>a(l),placeholder:"Enter the text"},u.id),e.jsx(M,{options:C,value:i,onChange:l=>r(l),placeholder:"To $"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",marginLeft:"18px"},children:[e.jsx(z,{options:b,value:d.toLocaleString(),onFilterChange:l=>f(l),inputStyle:"active",inputPrefix:"From",name:"fromFilter"}),e.jsx(z,{options:b,value:x.toLocaleString(),onFilterChange:l=>m(l),inputStyle:"secondary",inputPrefix:"To",name:"toFilter"})]}),e.jsx(O,{onClick:S,children:"Search"})]})};R.propTypes={setFilteredCars:p.func.isRequired};const he=()=>{const[t,c]=o.useState(""),[a,i]=o.useState("Select model"),[r,d]=o.useState("To $"),[f,x]=o.useState([]),[m,g]=o.useState([]);o.useEffect(()=>{(async()=>{try{const u=await G();g(u)}catch(u){console.error("Error fetching cars",u)}})()},[]);const n=w=>{c(w.target.value)},C=w=>{i(w)},v=w=>{d(w)};o.useEffect(()=>{const w=m.filter(u=>{const P=a==="Enter the text"||a==="Select model"||u.make===a,S=parseFloat(r.replace(/\$|\s/g,"")),l=r==="To $"||parseFloat(u.rentalPrice.replace(/\$|\s/g,""))<=S,y=t===""||(t.includes("-")?b(t,u.mileage):parseInt(t)<=u.mileage);return P&&l&&y});x(w)},[a,r,t,m]);function b(w,u){const[P,S]=w.split("-").map(l=>parseInt(l.trim()));return u>=P&&u<=S}return o.useEffect(()=>{a==="Select model"&&a==="Enter the text"&&r==="To $"&&t===""&&x(m)},[a,r,t,m]),e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsxs(J,{children:[e.jsx(W,{titlePage:"Rent of cars"}),e.jsx(R,{filter:t,make:a,rentalPrice:r,onFilterChange:n,onModelChange:C,onPriceChange:v,setFilteredCars:x}),e.jsx(B,{items:f})]})})})};export{he as default};
