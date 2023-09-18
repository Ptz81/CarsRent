import{R as p,n as o,P as i,j as t,c as l}from"./index-08fd5b3a.js";var T={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=p.createContext&&p.createContext(T),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)},R=globalThis&&globalThis.__rest||function(e,r){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n};function O(e){return e&&e.map(function(r,n){return p.createElement(r.tag,d({key:n},r.attr),O(r.child))})}function f(e){return function(r){return p.createElement(F,d({attr:d({},e.attr)},r),O(e.child))}}function F(e){var r=function(n){var s=e.attr,a=e.size,h=e.title,m=R(e,["attr","size","title"]),g=a||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),p.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,m,{className:x,style:d(d({color:e.color||n.color},n.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),h&&p.createElement("title",null,h),e.children)};return w!==void 0?p.createElement(w.Consumer,null,function(n){return r(n)}):r(T)}function tt(e){return f({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}function et(e){return f({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function nt(e){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function I(e){return f({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const N=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,S=o.div`
  background-color: #fff;
  width: 540px;
  min-height: 720px;
  position: relative;
  padding: 40px;
  overflow-y: auto;
  border-radius: 24px;
`,_=o.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,A=({isOpen:e,closeModal:r,children:n})=>{const s=a=>{a.stopPropagation()};return t.jsx(t.Fragment,{children:e&&t.jsx(N,{children:t.jsxs(S,{className:"ModalContent",onClick:s,children:[t.jsx(_,{onClick:r,children:t.jsx(I,{size:24})}),n]})})})};A.propTypes={isOpen:i.bool.isRequired,closeModal:i.func.isRequired,children:i.node.isRequired};const H=o.div`
  display: flex;
  flex-direction: column;

`,v=o.span`
color: ${l.accentColor};
margin-left: 5px;
margin-right: 5px;
`,q=o.p`
margin-top: 14px;
/* margin-bottom: 24px; */
font-size: 14px;
line-height: 20px;
`,c=o.p`
  color: ${l.subTitleColor};
  font-family: inherit;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 18px;
  }
`,W=o.div`
width: 100%;
display: flex;
flex-direction: column;
`,z=o.p`
font-weight: 600;
font-size: 14px;
line-height: 20px;
margin-bottom: 8px;
margin-top: 24px;
`,D=o.div`
position: relative;
width: auto;
margin-bottom: 14px;
`,G=o.img`
  background-position: center top;
  object-fit: cover;
  width: 100%;
  height: 248px;
  border-radius: 14px;
`,U=o.div`
  margin-top: 14px;
  margin-bottom: 8px;
display: flex;
justify-content: space-between;
`;o.img`
  position: absolute;
  cursor: pointer;
  top: 14px;
  right: 14px;
  &:hover,
  &:focus {
    stroke: ${l.hoverColor};
    fill:${l.hoverColor};
  }
`;const Y=o.div`

margin-bottom: 17px;
display: flex;
`,k=o.div`
display: flex;
margin: 10px;
justify-content: space-between;
border-radius: 35px;
background-color: ${l.disabled};
color: ${l.textMainColor};
font-size: 12px;
line-height: 18px;
`,u=o.div`
  color: ${l.textMainColor};
  display: flex;
  margin-bottom: 4px;


  /* @media screen and (min-width: 768px) {
    font-size: 16px;
  } */
`,J=o.div`
  color: ${l.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,K=o.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${l.accentColor};
  color: ${l.mainBgColor};
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
 max-width: 168px;
 margin-top: 24px;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background: ${l.hoverColor};
  }
`;o.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${l.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${l.hoverColor};
  }
`;const Q=o.div`
background-position: center top;
background-size: cover;
height: 248px;
justify-content: space-around;
  align-items: center;
  display: flex;
  border-radius: 14px;
  background: rgba(22, 31, 55, 0.5);

/* @media screen and (min-width: 1440px) {
  height: 400px;
} */
`,V=({id:e,make:r,model:n,type:s,year:a,img:h,address:m,mileage:g,description:x,fuelConsumption:M,engineSize:L,accessories:$,functionalities:P,rentalPrice:B})=>{const y=Object.values({img:h})[0],C=(m||"").split(", "),E=C[C.length-2],b=$||"",j=P||"";return t.jsxs(H,{children:[t.jsx(D,{children:!y||y===""?t.jsx(Q,{}):t.jsx(G,{src:h})}),t.jsx(U,{children:t.jsxs(J,{children:[r,t.jsxs(v,{children:[n,","]}),a]})}),t.jsxs(u,{children:[t.jsx(c,{children:E}),t.jsx(c,{children:"Ukraine"}),t.jsxs(c,{children:["Id:",e]}),t.jsxs(c,{children:["Year:",a]}),t.jsxs(c,{children:["Type:",s]})]}),t.jsxs(u,{children:[t.jsxs(c,{children:["Fuel consumption",M]}),t.jsxs(c,{children:["Engine size: ",L]})]}),t.jsx(q,{children:x}),t.jsxs(W,{children:[t.jsx(z,{children:"Accessories and functionalities:"}),t.jsxs(u,{children:[t.jsx(c,{children:b[0]}),t.jsx(c,{children:b[1]}),t.jsx(c,{children:b[2]})]}),t.jsxs(u,{children:[t.jsx(c,{children:j[0]}),t.jsx(c,{children:j[1]}),t.jsx(c,{children:j[2]})]})]}),t.jsx(z,{children:"Rental Conditions:"}),t.jsxs(Y,{children:[t.jsxs(k,{children:["Mileage:",t.jsx(v,{children:g})]}),t.jsxs(k,{children:["Price:",t.jsx(v,{children:B})]})]}),t.jsx(K,{children:"Rental car"})]})};V.propTypes={id:i.number,make:i.string,year:i.number,address:i.string,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),model:i.string,img:i.string,type:i.string,mileage:i.number,rentalPrice:i.string,CarThumb:i.string,fuelConsumption:i.string,rentalConditions:i.string,description:i.string,photoLink:i.string,engineSize:i.string};export{V as C,tt as F,f as G,A as M,et as a,nt as b};
