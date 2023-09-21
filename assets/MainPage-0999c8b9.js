import{n,c as m,P as r,j as e,B,a as L,u as C,T as P,L as R,r as c}from"./index-6e226077.js";import{M as T,C as $}from"./CardsModal-8bcd6eb8.js";import{g as I}from"./Api-55848266.js";const g="/CarsRent/assets/MainPage-66e01da7.jpg",M=n.section`
position: relative;
  background-color: ${m.mainBgColor};
  min-height: 100%;
  width: 100%;
`,D=n.div`
  display: flex-inline;
  justify-content: st;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 1200px) {
    padding-top: 160px;
  }
`,N=n.div`
padding-left: 20px;
  height: 740px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0px;;
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url("${g}");

  @media screen and (min-width: 480px) {
    height: 790px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${g}");
  }
  @media screen and (min-width: 768px) {
    height: 790px;
    padding-left: 50px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${g}");
  }
  @media screen and (min-width: 1200px) {
    height: 790px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${g}");
  }
`,O=n.h1`
  max-width: 280px;
  color: ${m.mainBgColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`,W=n.p`
  max-width: 270px;
  color: ${m.mainBgColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`,h=({type:o,buttonName:p,onClick:l,buttonStyle:d})=>{let s;return d==="active"?s=B:d==="secondary"&&(s=L),e.jsx(s,{type:o,onClick:l,children:p})};h.propTypes={onClick:r.func,type:r.string.isRequired,buttonName:r.string.isRequired,buttonStyle:r.string};const y=({title:o,description:p,children:l})=>{const d=C(),s=()=>{d("/catalog/1")};return e.jsx(M,{children:e.jsx(N,{children:e.jsxs(D,{children:[o&&e.jsx(O,{children:o}),p&&e.jsx(W,{children:p}),e.jsx(h,{type:"button",buttonStyle:"active",buttonName:"Select a car",onClick:s}),l]})})})};y.propTypes={title:r.string,description:r.string,children:r.oneOfType([r.arrayOf(r.element),r.element])};const q=n.h2`
  color: #f3f3f3;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    text-align:start;
  }
`,A=n.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 50px;
`,H=n.div`
  max-width: 335px;
  max-height: 360px;
  transition: ${P("box-shadow")};
  &:hover{
    box-shadow: 0px 0px 31px -10px rgba(255,255,255,1);
  }
`,U=n.img`
  width: 335px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`,F=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,K=n.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,V=n(R)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,w=n.div`
position: relative;
width: 274px;
`,x=({categoryCar:o})=>{const[p,l]=c.useState(4),[d,s]=c.useState(!1),[i,k]=c.useState(null),[u,v]=c.useState([]),[f,j]=c.useState([]),b=t=>{w.current&&!w.current.contains(t.target)&&s(!1)};c.useEffect(()=>{(async()=>{try{const a=await I();v(a)}catch(a){console.error("Error fetching cars",a)}})()},[]),c.useEffect(()=>{const t=a=>{a.key==="Escape"&&d&&s(!1)};return document.addEventListener("keydown",t),document.addEventListener("click",b),()=>{document.removeEventListener("keydown",t),document.removeEventListener("click",b)}},[d]),c.useEffect(()=>{const t=()=>{window.innerWidth>1200?l(4):window.innerWidth>1e3?l(3):window.innerWidth>768?l(2):l(1)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),c.useEffect(()=>{(()=>{const a=u.filter(E=>E.type.toLowerCase()===o.toLowerCase());j(a)})()},[o,u]);const z=t=>{const a=S(t);a&&(k(a),s(!0))},S=t=>f.find(a=>a.id===t);return e.jsxs("div",{children:[e.jsx(q,{children:o}),e.jsx(A,{children:f.slice(0,p).map(t=>e.jsxs("li",{children:[e.jsx(H,{children:e.jsx(U,{src:t.img,alt:t.make})}),e.jsxs(F,{children:[e.jsx(K,{children:t.make}),e.jsx(V,{onClick:()=>z(t.id),children:"See more"})]})]},t.id))}),d&&i&&e.jsx(T,{isOpen:d,closeModal:()=>s(!1),children:e.jsx($,{id:i.id,make:i.make,model:i.model,year:i.year,type:i.type,rentalPrice:i.rentalPrice,mileage:i.mileage,fuelConsumption:i.fuelConsumption,description:i.description,engineSize:i.engineSize,functionalities:i.functionalities,img:i.img,address:i.address,rentalConditions:i.rentalConditions})})]})};x.propTypes={categoryCar:r.string.isRequired};const Y=n.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,G=n.div`
display: flex;
justify-content: center;
  margin-top: 80px;
`,J=n.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,_=()=>{const o=C(),p=()=>{o("/catalog/1")};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Unlock the Road to Adventure with Our Rental Cars",description:"Embark on a journey of exploration and convenience with our unbeatable car rental services. Your next adventure begins here. "}),e.jsx(Y,{children:e.jsxs(J,{children:[" ",e.jsx(x,{categoryCar:"Convertible"}),e.jsx(x,{categoryCar:"SUV"}),e.jsx(G,{children:e.jsx(h,{type:"button",buttonStyle:"secondary",buttonName:"Load more",onClick:p})})]})})]})};export{J as Container,_ as default};
