import{n,c as m,P as i,j as e,B as j,a as C,u as w,T as z,L as B,r as g}from"./index-9992320d.js";import{c as E,M as L,C as S}from"./CardsModal-3a7bad6c.js";const x="/CarsRent/assets/MainPage-66e01da7.jpg",T=n.section`
position: relative;
  background-color: ${m.mainBgColor};
  min-height: 100%;
  width: 100%;
`,P=n.div`
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
`,R=n.div`
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
    url("${x}");

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
      url("${x}");
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
      url("${x}");
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
      url("${x}");
  }
`,$=n.h1`
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
`,M=n.p`
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
`,u=({type:a,buttonName:o,onClick:r,buttonStyle:d})=>{let s;return d==="active"?s=j:d==="secondary"&&(s=C),e.jsx(s,{type:a,onClick:r,children:o})};u.propTypes={onClick:i.func,type:i.string.isRequired,buttonName:i.string.isRequired,buttonStyle:i.string};const y=({title:a,description:o,children:r})=>{const d=w(),s=()=>{d("/catalog/1")};return e.jsx(T,{children:e.jsx(R,{children:e.jsxs(P,{children:[a&&e.jsx($,{children:a}),o&&e.jsx(M,{children:o}),e.jsx(u,{type:"button",buttonStyle:"active",buttonName:"Select a car",onClick:s}),r]})})})};y.propTypes={title:i.string,description:i.string,children:i.oneOfType([i.arrayOf(i.element),i.element])};const N=n.h2`
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
`,O=n.ul`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 50px;
`,W=n.div`
  max-width: 335px;
  max-height: 360px;
  transition: ${z("box-shadow")};
  &:hover{
    box-shadow: 0px 0px 31px -10px rgba(255,255,255,1);
  }
`,I=n.img`
  width: 335px;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
`,D=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`,q=n.p`
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,H=n(B)`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,b=n.div`
position: relative;
width: 274px;
`,h=({categoryCar:a})=>{const[o,r]=g.useState(4),[d,s]=g.useState([]),[c,l]=g.useState(!1),v=()=>{l(!c)},f=t=>{b.current&&!b.current.contains(t.target)&&l(!1)};return g.useEffect(()=>{const t=p=>{p.key==="Escape"&&c&&l(!1)};return document.addEventListener("keydown",t),document.addEventListener("click",f),()=>{document.removeEventListener("keydown",t),document.removeEventListener("click",f)}},[c]),g.useEffect(()=>{const t=E.filter(k=>k.type.toLowerCase()===a.toLowerCase()),p=()=>{window.innerWidth>1200?r(4):window.innerWidth>1e3?r(3):window.innerWidth>768?r(2):r(1)};return p(),s(t),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[a]),e.jsxs("div",{children:[e.jsx(N,{children:a}),e.jsx(O,{children:d.slice(0,o).map(t=>e.jsxs("li",{children:[e.jsx(W,{children:e.jsx(I,{src:t.img,alt:t.make})}),e.jsxs(D,{children:[e.jsx(q,{children:t.make}),e.jsx(H,{onClick:v,children:"See more"})]})]},t.id))}),c&&e.jsx(L,{isOpen:c,closeModal:()=>l(!1),children:e.jsx(S,{})})]})};h.propTypes={categoryCar:i.string.isRequired};const A=n.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`,U=n.div`
display: flex;
justify-content: center;
  margin-top: 80px;
`,F=n.div`
  padding: 40px 20px 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 80px 50px 40px 50px;
  }
`,Y=()=>{const a=w(),o=()=>{a("/catalog/1")};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Unlock the Road to Adventure with Our Rental Cars",description:"Embark on a journey of exploration and convenience with our unbeatable car rental services. Your next adventure begins here. "}),e.jsx(A,{children:e.jsxs(F,{children:[" ",e.jsx(h,{categoryCar:"Convertible"}),e.jsx(h,{categoryCar:"SUV"}),e.jsx(U,{children:e.jsx(u,{type:"button",buttonStyle:"secondary",buttonName:"Load more",onClick:o})})]})})]})};export{F as Container,Y as default};
