import{n as o,c as t,j as n}from"./index-41abf8aa.js";import{N as i}from"./notfoundpage-fcb94ca6.js";const e=o.div`
    position: relative;
    max-width: 465px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`,r=o.div`
display: flex;
justify-content: center;
position: relative;

`,s=o.span`
position: absolute;
top: 25%;
left: -100px;
color: ${t.mainBgColor};
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,a=o.span`
position: absolute;
top: 25%;
color: ${t.mainBgColor};
right: -100px;
font-family: Manrope;
font-size: 200px;
font-style: normal;
font-weight: 600;
line-height: 0.82; /* 82% */
`,p=()=>n.jsx(e,{children:n.jsxs(r,{children:[n.jsx(s,{children:"4"}),n.jsx("img",{src:i}),n.jsx(a,{children:"4"})]})}),l=o.div`
  position: relative;
  background: ${t.subTitleColor};
  margin: 0 auto;
`,d=o.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`,m=()=>n.jsx(l,{children:n.jsx(d,{children:n.jsx(p,{})})});export{d as Container,m as default};
