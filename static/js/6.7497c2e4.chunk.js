(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[6],{153:function(e,a,t){"use strict";var r=t(3),s=t.n(r),c=t(0),l=t(35),d=t(4),n=t(1);const i=c.forwardRef((e,a)=>{let{as:t,bsPrefix:r,variant:c="primary",size:i,active:o=!1,disabled:b=!1,className:m,...f}=e;const j=Object(d.c)(r,"btn"),[y,{tagName:x}]=Object(l.b)({tagName:t,disabled:b,...f}),p=x;return Object(n.jsx)(p,{...y,...f,ref:a,disabled:b,className:s()(m,j,o&&"active",c&&`${j}-${c}`,i&&`${j}-${i}`,f.href&&b&&"disabled")})});i.displayName="Button",a.a=i},82:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),c=t(78),l=t(3),d=t.n(l),n=t(4),i=t(1);const o=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s="div",...c}=e;return r=Object(n.c)(r,"card-body"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});o.displayName="CardBody";var b=o;const m=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s="div",...c}=e;return r=Object(n.c)(r,"card-footer"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});m.displayName="CardFooter";var f=m,j=t(59);const y=r.forwardRef((e,a)=>{let{bsPrefix:t,className:s,as:c="div",...l}=e;const o=Object(n.c)(t,"card-header"),b=Object(r.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return Object(i.jsx)(j.a.Provider,{value:b,children:Object(i.jsx)(c,{ref:a,...l,className:d()(s,o)})})});y.displayName="CardHeader";var x=y;const p=r.forwardRef((e,a)=>{let{bsPrefix:t,className:r,variant:s,as:c="img",...l}=e;const o=Object(n.c)(t,"card-img");return Object(i.jsx)(c,{ref:a,className:d()(s?`${o}-${s}`:o,r),...l})});p.displayName="CardImg";var u=p;const N=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s="div",...c}=e;return r=Object(n.c)(r,"card-img-overlay"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});N.displayName="CardImgOverlay";var g=N;const v=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s="a",...c}=e;return r=Object(n.c)(r,"card-link"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});v.displayName="CardLink";var O=v,S=t(58);const h=Object(S.a)("h6"),w=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s=h,...c}=e;return r=Object(n.c)(r,"card-subtitle"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});w.displayName="CardSubtitle";var C=w;const k=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s="p",...c}=e;return r=Object(n.c)(r,"card-text"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});k.displayName="CardText";var P=k;const R=Object(S.a)("h5"),T=r.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:s=R,...c}=e;return r=Object(n.c)(r,"card-title"),Object(i.jsx)(s,{ref:a,className:d()(t,r),...c})});T.displayName="CardTitle";var B=T;const E=r.forwardRef((e,a)=>{let{bsPrefix:t,className:r,bg:s,text:c,border:l,body:o=!1,children:m,as:f="div",...j}=e;const y=Object(n.c)(t,"card");return Object(i.jsx)(f,{ref:a,...j,className:d()(r,y,s&&"bg-"+s,c&&"text-"+c,l&&"border-"+l),children:o?Object(i.jsx)(b,{children:m}):m})});E.displayName="Card";var $=Object.assign(E,{Img:u,Title:B,Subtitle:C,Body:b,Link:O,Text:P,Header:x,Footer:f,ImgOverlay:g}),I=t(153);const F=r.forwardRef((e,a)=>{let{bsPrefix:t,bg:r="primary",pill:s=!1,text:c,className:l,as:o="span",...b}=e;const m=Object(n.c)(t,"badge");return Object(i.jsx)(o,{ref:a,...b,className:d()(l,m,s&&"rounded-pill",c&&"text-"+c,r&&"bg-"+r)})});F.displayName="Badge";var V=F,H=t(9),L=t(79);const z={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=e=>{var a;const t=Object(r.useContext)(H.a),{project:l}=e;return s.a.createElement(c.a,null,s.a.createElement($,{style:{...z.cardStyle,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor},text:t.bsSecondaryVariant},s.a.createElement($.Img,{variant:"top",src:null===l||void 0===l?void 0:l.image}),s.a.createElement($.Body,null,s.a.createElement($.Title,{style:z.cardTitleStyle},l.title),s.a.createElement($.Text,{style:z.cardTextStyle},(d=l.bodyText,s.a.createElement(L.a,{children:d})))),s.a.createElement($.Body,null,null===l||void 0===l||null===(a=l.links)||void 0===a?void 0:a.map(e=>s.a.createElement(I.a,{key:e.href,style:z.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank")},e.text))),l.tags&&s.a.createElement($.Footer,{style:{backgroundColor:t.cardFooterBackground}},l.tags.map(e=>s.a.createElement(V,{key:e,pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:z.badgeStyle},e)))));var d}}}]);
//# sourceMappingURL=6.7497c2e4.chunk.js.map