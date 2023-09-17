import{n as o,c as t,j as n}from"./index-e0ec0f59.js";const e="/CarsRent/assets/notfoundpage-1654d9d0.png",i=o.div`
    position: relative;
    max-width: 465px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`,s=o.div`
display: flex;
justify-content: center;
position: relative;

`,a=o.span`
position: absolute;
top: 25%;
left: -100px;
color: ${t.mainBgColor};
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,r=o.span`
position: absolute;
top: 25%;
color: ${t.mainBgColor};
right: -100px;
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,p=()=>n.jsx(i,{children:n.jsxs(s,{children:[n.jsx(a,{children:"4"}),n.jsx("img",{src:e}),n.jsx(r,{children:"4"})]})}),d=o.div`
  position: relative;
  background: ${t.subTitleColor};
  margin: 0 auto;
`,l=o.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,c=()=>n.jsx(d,{children:n.jsx(l,{children:n.jsx(p,{})})});export{l as Container,c as default};
