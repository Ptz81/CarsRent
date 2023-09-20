import{R as h,n as o,P as i,j as e,c}from"./index-41abf8aa.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=h.createContext&&h.createContext(O),p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},p.apply(this,arguments)},_=globalThis&&globalThis.__rest||function(t,r){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&r.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(n[s[a]]=t[s[a]]);return n};function L(t){return t&&t.map(function(r,n){return h.createElement(r.tag,p({key:n},r.attr),L(r.child))})}function b(t){return function(r){return h.createElement(A,p({attr:p({},t.attr)},r),L(t.child))}}function A(t){var r=function(n){var s=t.attr,a=t.size,d=t.title,g=_(t,["attr","size","title"]),u=a||n.size||"1em",x;return n.className&&(x=n.className),t.className&&(x=(x?x+" ":"")+t.className),h.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,g,{className:x,style:p(p({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),d&&h.createElement("title",null,d),t.children)};return z!==void 0?h.createElement(z.Consumer,null,function(n){return r(n)}):r(O)}function oe(t){return b({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(t)}function se(t){return b({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(t)}function ae(t){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(t)}function H(t){return b({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const q=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,W=o.div`
  background-color: #fff;
  width: 540px;
  min-height: 720px;
  position: relative;
  padding: 40px;
  overflow-y: auto;
  border-radius: 24px;
`,D=o.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,G=({isOpen:t,closeModal:r,children:n})=>{const s=d=>{d.stopPropagation()},a=d=>{d.target===d.currentTarget&&r()};return e.jsx(e.Fragment,{children:t&&e.jsx(q,{onClick:a,children:e.jsxs(W,{className:"ModalContent",onClick:s,children:[e.jsx(D,{onClick:r,children:e.jsx(H,{size:18})}),n]})})})};G.propTypes={isOpen:i.bool.isRequired,closeModal:i.func.isRequired,children:i.node.isRequired};const U=o.div`
  display: flex;
  flex-direction: column;

`,w=o.span`
color: ${c.accentColor};
margin-left: 5px;
margin-right: 5px;
`,Y=o.p`
margin-top: 14px;
/* margin-bottom: 24px; */
font-size: 14px;
line-height: 20px;
`,l=o.p`
  color: ${c.subTitleColor};
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
`,J=o.div`
width: 100%;
display: flex;
flex-direction: column;
`,T=o.p`
font-weight: 600;
font-size: 14px;
line-height: 20px;
margin-bottom: 8px;
margin-top: 24px;
`,K=o.div`
position: relative;
width: auto;
margin-bottom: 14px;
`,Q=o.img`
  background-position: center top;
  object-fit: cover;
  width: 100%;
  height: 248px;
  border-radius: 14px;
`,V=o.div`
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
    stroke: ${c.hoverColor};
    fill:${c.hoverColor};
  }
`;const X=o.div`
display: flex;
  flex-wrap: wrap;
  gap: 8px;
margin-bottom: 17px;

`,m=o.p`
border-radius: 35px;
background-color: ${c.disabled};
color: ${c.textMainColor};
font-size: 12px;
line-height: 18px;
 margin: 0;
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block; /* Змінив display на inline-block */
  margin-right: 8px; 
`,f=o.div`
  color: ${c.textMainColor};
  display: flex;
  margin-bottom: 4px;


  /* @media screen and (min-width: 768px) {
    font-size: 16px;
  } */
`,Z=o.div`
  color: ${c.textMainColor};
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* margin-bottom: 8px; */
`,ee=o.p`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${c.accentColor};
  color: ${c.mainBgColor};
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
 max-width: 168px;
 margin-top: 24px;
cursor: pointer;
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }
  &:hover,
  &:focus {
    background: ${c.hoverColor};
  }
`;o.div`
  display: flex;
  width: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  background: ${c.accentColor};

  @media screen and (min-width: 768px) {
    width: 56px;
  }
  &:hover,
  &:focus {
    background: ${c.hoverColor};
  }
`;const te=o.div`
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
`,ne=({id:t,make:r,model:n,type:s,year:a,rentalConditions:d,img:g,address:u,mileage:x,description:M,fuelConsumption:$,engineSize:P,accessories:B,functionalities:E,rentalPrice:F})=>{const C=Object.values({img:g})[0],k=(u||"").split(", "),N=k[k.length-2],j=B||"",v=E||"",R=d.split(`
`),S=()=>{const y=" +3802222222";window.location.href=`tel:${y}`};return e.jsxs(U,{children:[e.jsx(K,{children:!C||C===""?e.jsx(te,{}):e.jsx(Q,{src:g,alt:"car photo"})}),e.jsx(V,{children:e.jsxs(Z,{children:[r,e.jsxs(w,{children:[n,","]}),a]})}),e.jsxs(f,{children:[e.jsx(l,{children:N}),e.jsx(l,{children:"Ukraine"}),e.jsxs(l,{children:["Id:",t]}),e.jsxs(l,{children:["Year:",a]}),e.jsxs(l,{children:["Type:",s]})]}),e.jsxs(f,{children:[e.jsxs(l,{children:["Fuel consumption",$]}),e.jsxs(l,{children:["Engine size: ",P]})]}),e.jsx(Y,{children:M}),e.jsxs(J,{children:[e.jsx(T,{children:"Accessories and functionalities:"}),e.jsxs(f,{children:[e.jsx(l,{children:j[0]}),e.jsx(l,{children:j[1]}),e.jsx(l,{children:j[2]})]}),e.jsxs(f,{children:[e.jsx(l,{children:v[0]}),e.jsx(l,{children:v[1]}),e.jsx(l,{children:v[2]})]})]}),e.jsx(T,{children:"Rental Conditions:"}),e.jsxs(X,{children:[e.jsx(e.Fragment,{children:R.map((y,I)=>e.jsx(m,{children:y},I))}),e.jsx(m,{children:d}),e.jsxs(m,{children:["Mileage:",e.jsx(w,{children:x})]}),e.jsxs(m,{children:["Price:",e.jsx(w,{children:F})]})]}),e.jsx(ee,{onClick:S,children:"Rental car"})]})};ne.propTypes={id:i.number,make:i.string,year:i.number,address:i.string,accessories:i.arrayOf(i.string),functionalities:i.arrayOf(i.string),model:i.string,img:i.string,type:i.string,mileage:i.number,rentalPrice:i.string,CarThumb:i.string,fuelConsumption:i.string,rentalConditions:i.string,description:i.string,photoLink:i.string,engineSize:i.string};export{ne as C,oe as F,b as G,G as M,se as a,ae as b};