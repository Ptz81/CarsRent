import{n as t,c as u,P as a,j as e,B as S,a as B,u as y,T as E,L,r as l}from"./index-41abf8aa.js";import{c as P}from"./advertsCars-8074c75d.js";import{M as T,C as R}from"./CardsModal-a381c18d.js";const m="/CarsRent/assets/MainPage-66e01da7.jpg",$=t.section`
position: relative;
  background-color: ${u.mainBgColor};
  min-height: 100%;
  width: 100%;
`,M=t.div`
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
`,N=t.div`
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
    url("${m}");

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
      url("${m}");
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
      url("${m}");
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
      url("${m}");
  }
`,O=t.h1`
  max-width: 280px;
  color: ${u.mainBgColor};
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
`,I=t.p`
  max-width: 270px;
  color: ${u.mainBgColor};
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
`,f=({type:o,buttonName:s,onClick:d,buttonStyle:c})=>{let p;return c==="active"?p=S:c==="secondary"&&(p=B),e.jsx(p,{type:o,onClick:d,children:s})};f.propTypes={onClick:a.func,type:a.string.isRequired,buttonName:a.string.isRequired,buttonStyle:a.string};const C=({title:o,description:s,children:d})=>{const c=y(),p=()=>{c("/catalog/1")};return e.jsx($,{children:e.jsx(N,{children:e.jsxs(M,{children:[o&&e.jsx(O,{children:o}),s&&e.jsx(I,{children:s}),e.jsx(f,{type:"button",buttonStyle:"active",buttonName:"Select a car",onClick:p}),d]})})})};C.propTypes={title:a.string,description:a.string,children:a.oneOfType([a.arrayOf(a.element),a.element])};const W=t.h2`
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
`,D=t.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 50px;
`,q=t.div`
  max-width: 335px;
  max-height: 360px;
  transition: ${E("box-shadow")};
  &:hover{
    box-shadow: 0px 0px 31px -10px rgba(255,255,255,1);
  }
`,H=t.img`
  width: 335px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`,A=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,U=t.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,F=t(L)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,w=t.div`
position: relative;
width: 274px;
`,h=({categoryCar:o})=>{const[s,d]=l.useState(4),[c,p]=l.useState([]),[g,x]=l.useState(!1),[i,k]=l.useState(null),b=n=>{w.current&&!w.current.contains(n.target)&&x(!1)};l.useEffect(()=>{const n=r=>{r.key==="Escape"&&g&&x(!1)};return document.addEventListener("keydown",n),document.addEventListener("click",b),()=>{document.removeEventListener("keydown",n),document.removeEventListener("click",b)}},[g]),l.useEffect(()=>{const n=P.filter(z=>z.type.toLowerCase()===o.toLowerCase()),r=()=>{window.innerWidth>1200?d(4):window.innerWidth>1e3?d(3):window.innerWidth>768?d(2):d(1)};return r(),p(n),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[o]);const v=n=>c.find(r=>r.id===n),j=n=>{const r=v(n);r&&(k(r),x(!0))};return e.jsxs("div",{children:[e.jsx(W,{children:o}),e.jsx(D,{children:c.slice(0,s).map(n=>e.jsxs("li",{children:[e.jsx(q,{children:e.jsx(H,{src:n.img,alt:n.make})}),e.jsxs(A,{children:[e.jsx(U,{children:n.make}),e.jsx(F,{onClick:()=>j(n.id),children:"See more"})]})]},n.id))}),g&&i&&e.jsx(T,{isOpen:g,closeModal:()=>x(!1),children:e.jsx(R,{id:i.id,make:i.make,model:i.model,year:i.year,type:i.type,rentalPrice:i.rentalPrice,mileage:i.mileage,fuelConsumption:i.fuelConsumption,description:i.description,engineSize:i.engineSize,functionalities:i.functionalities,img:i.img,address:i.address,rentalConditions:i.rentalConditions})})]})};h.propTypes={categoryCar:a.string.isRequired};const K=t.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,V=t.div`
display: flex;
justify-content: center;
  margin-top: 80px;
`,Y=t.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,X=()=>{const o=y(),s=()=>{o("/catalog/1")};return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Unlock the Road to Adventure with Our Rental Cars",description:"Embark on a journey of exploration and convenience with our unbeatable car rental services. Your next adventure begins here. "}),e.jsx(K,{children:e.jsxs(Y,{children:[" ",e.jsx(h,{categoryCar:"Convertible"}),e.jsx(h,{categoryCar:"SUV"}),e.jsx(V,{children:e.jsx(f,{type:"button",buttonStyle:"secondary",buttonName:"Load more",onClick:s})})]})})]})};export{Y as Container,X as default};
