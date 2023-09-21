import{n as t,c as m,P as a,j as e,B as z,a as S,u as w,T as E,L as B,r as l}from"./index-084a58f4.js";import{M as P,C as L}from"./CardsModal-707ff992.js";import{g as R}from"./Api-55848266.js";const g="/CarsRent/assets/MainPage-66e01da7.jpg",T=t.section`
position: relative;
  background-color: ${m.mainBgColor};
  min-height: 100%;
  width: 100%;
`,$=t.div`
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
`,M=t.div`
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
`,D=t.h1`
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
`,N=t.p`
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
`,h=({type:d,buttonName:c,onClick:p,buttonStyle:s})=>{let r;return s==="active"?r=z:s==="secondary"&&(r=S),e.jsx(r,{type:d,onClick:p,children:c})};h.propTypes={onClick:a.func,type:a.string.isRequired,buttonName:a.string.isRequired,buttonStyle:a.string};const y=({title:d,description:c,children:p})=>{const s=w(),r=()=>{s("/catalog/1")};return e.jsx(T,{children:e.jsx(M,{children:e.jsxs($,{children:[d&&e.jsx(D,{children:d}),c&&e.jsx(N,{children:c}),e.jsx(h,{type:"button",buttonStyle:"active",buttonName:"Select a car",onClick:r}),p]})})})};y.propTypes={title:a.string,description:a.string,children:a.oneOfType([a.arrayOf(a.element),a.element])};const O=t.h2`
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
`,W=t.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 50px;
`,I=t.div`
  max-width: 335px;
  max-height: 360px;
  transition: ${E("box-shadow")};
  &:hover{
    box-shadow: 0px 0px 31px -10px rgba(255,255,255,1);
  }
`,q=t.img`
  width: 335px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`,A=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,H=t.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,U=t(B)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,b=t.div`
position: relative;
width: 274px;
`,x=({categoryCar:d})=>{const[c,p]=l.useState(4),[s,r]=l.useState(!1),[i,C]=l.useState(null),[u,k]=l.useState([]),f=n=>{b.current&&!b.current.contains(n.target)&&r(!1)};l.useEffect(()=>{(async()=>{try{const o=await R();k(o)}catch(o){console.error("Error fetching cars",o)}})()},[]),l.useEffect(()=>{const n=o=>{o.key==="Escape"&&s&&r(!1)};return document.addEventListener("keydown",n),document.addEventListener("click",f),()=>{document.removeEventListener("keydown",n),document.removeEventListener("click",f)}},[s]),l.useEffect(()=>{const n=()=>{window.innerWidth>1200?p(4):window.innerWidth>1e3?p(3):window.innerWidth>768?p(2):p(1)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const v=n=>{const o=j(n);o&&(C(o),r(!0))},j=n=>u.find(o=>o.id===n);return e.jsxs("div",{children:[e.jsx(O,{children:d}),e.jsx(W,{children:u.slice(0,c).map(n=>e.jsxs("li",{children:[e.jsx(I,{children:e.jsx(q,{src:n.img,alt:n.make})}),e.jsxs(A,{children:[e.jsx(H,{children:n.make}),e.jsx(U,{onClick:()=>v(n.id),children:"See more"})]})]},n.id))}),s&&i&&e.jsx(P,{isOpen:s,closeModal:()=>r(!1),children:e.jsx(L,{id:i.id,make:i.make,model:i.model,year:i.year,type:i.type,rentalPrice:i.rentalPrice,mileage:i.mileage,fuelConsumption:i.fuelConsumption,description:i.description,engineSize:i.engineSize,functionalities:i.functionalities,img:i.img,address:i.address,rentalConditions:i.rentalConditions})})]})};x.propTypes={categoryCar:a.string.isRequired};const F=t.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,K=t.div`
display: flex;
justify-content: center;
  margin-top: 80px;
`,V=t.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,Q=()=>{const d=w(),c=()=>{d("/catalog/1")};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Unlock the Road to Adventure with Our Rental Cars",description:"Embark on a journey of exploration and convenience with our unbeatable car rental services. Your next adventure begins here. "}),e.jsx(F,{children:e.jsxs(V,{children:[" ",e.jsx(x,{categoryCar:"Convertible"}),e.jsx(x,{categoryCar:"SUV"}),e.jsx(K,{children:e.jsx(h,{type:"button",buttonStyle:"secondary",buttonName:"Load more",onClick:c})})]})})]})};export{V as Container,Q as default};
