(this["webpackJsonproom-new"]=this["webpackJsonproom-new"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){e.exports=t(24)},,,,,,,function(e,n,t){var r={"./student.svg":20};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=19},function(e,n,t){e.exports=t.p+"static/media/student.1b7cd0ac.svg"},function(e,n,t){var r={"./Roboto/Roboto-Bold.ttf":22,"./Roboto/Roboto-Regular.ttf":23};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=21},function(e,n,t){e.exports=t.p+"static/media/Roboto-Bold.e07df86c.ttf"},function(e,n,t){e.exports=t.p+"static/media/Roboto-Regular.11eabca2.ttf"},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t.n(o),l=t(1),u=t(2);function c(){var e=Object(l.a)(["\n    display: flex;\n    max-width: 210px; \n    width: 100%; \n"]);return c=function(){return e},e}function f(){var e=Object(l.a)(["\n    &:not(.meta_my) {\n        margin-left: 4px; \n        width: 100%; \n        display: flex; \n        justify-content: center; \n        flex-direction: column;\n    }\n\n    h4, p {\n        margin: 0; \n    }\n\n    h4 {\n        font-size: 13px; \n    }\n\n    p {\n        color: #70819A; \n        font-size: 12px; \n    }\n\n    .meta_my {\n        text-align: right; \n        padding: 7px 0; \n\n    }\n"]);return f=function(){return e},e}function s(){var e=Object(l.a)(["\n    width: 36px; \n    height: 36px; \n    border-radius: 50%; \n    object-fit: cover;\n"]);return s=function(){return e},e}var p=u.b.img(s()),d=u.b.div(f()),m=u.b.div(c()),b=function(e){return e.fromMe?a.a.createElement(m,null,a.a.createElement(d,null,a.a.createElement("p",{className:"meta_my"},a.a.createElement("span",null,e.date),"\xa0\u2022\xa0",a.a.createElement("span",null,e.time),"PM"))):a.a.createElement(m,null,a.a.createElement(p,{src:e.photoURL,alt:e.author}),a.a.createElement(d,null,a.a.createElement("h4",null,e.author),a.a.createElement("p",null,a.a.createElement("span",null,e.date)," \u2022 ",a.a.createElement("span",null,e.time),"PM")))},h={fluent:{LIGHT_GREY:"#E3EAED",BLUE:"#C1E0F2",PEACH:"#D4B586",SHADOW_BLUE:"#C5D0DA",DARK_BROWN:"#28313E",LIGHT_BLUE:"#D5E3EF",ICON_BLUE:"#2F548B",ICON_DARK_BLUE:"#00183C",status:{online:"#39FF65",do_not_disturb:"#F98600"}}};function v(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;  \n    position: absolute; \n    border-radius: ","; \n    background-color: ","; \n\n    &::before {\n        content: '';\n        display: block;\n        position: absolute; \n        width: ","px; \n        height: ","px; \n        border-width: ","px;\n        border-style: solid; \n        transform: ",";\n        border-color: ",";\n        ",": 0;\n        ",": 0; \n    }\n"]);return v=function(){return e},e}function g(){var e=Object(l.a)(["\n    display: flex; \n    margin-top: 5px;\n    position: relative;\n    max-width: 210px; \n    justify-content: center; \n    position: relative;\n\n    p {\n        z-index: 3; \n        font-size: 13px; \n        padding: 10px 10px 15px 5%;\n    }\n"]);return g=function(){return e},e}var x=u.b.div(g()),E=function(e,n){return function(t){return t.fromMe?e:n}},C=u.b.div(v(),E("5px 5px 0 5px","0 5px 5px 5px"),E(h.fluent.BLUE,h.fluent.LIGHT_GREY),3,3,3,E("translateY(100%)","translateY(-100%)"),E(h.fluent.BLUE+" "+h.fluent.BLUE+" transparent transparent","transparent transparent "+h.fluent.LIGHT_GREY+" "+h.fluent.LIGHT_GREY),E("right","left"),E("bottom","top")),y=function(e){return a.a.createElement(x,null,a.a.createElement("p",null,e.text),a.a.createElement(C,{fromMe:e.fromMe}))};function O(){var e=Object(l.a)(["\n    display: flex; \n    max-width: 210px; \n    flex-direction: ","; \n"]);return O=function(){return e},e}var w=u.b.div(O(),(function(e){return e.flexDirection})),j=function(e){var n=e.fromMe?"column-reverse":"column";return a.a.createElement(w,{flexDirection:n},a.a.createElement(b,{fromMe:e.fromMe,date:e.date,time:e.time,photoURL:e.photoURL,author:e.author}),a.a.createElement(y,{fromMe:e.fromMe,text:e.text}))};function R(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    overflow-y: scroll; \n    padding: 20px 0; \n    background-color: #F5FAFC;\n"]);return R=function(){return e},e}var L=u.b.div(R()),k=function(e){var n=e.messages.map((function(e,n){return a.a.createElement(j,{author:e.author,text:e.text,date:e.date,time:e.time,fromMe:e.fromMe,photoURL:e.photoURL,key:n})}));return a.a.createElement(L,null,n)};function M(){var e=Object(l.a)(["\n    display: inline-block; \n    position: relative; \n    height: 100%;\n    border: 0; \n    border-radius: 5px 5px 0 0; \n    padding: 8px 12px; \n    margin-right: 2px; \n    outline: 0; \n    background-color: ",";\n    z-index: ","; \n\n    &::after, &::before {\n        content: ''; \n        display: block;       \n        width: 0; \n        height: 0; \n        position: absolute;\n        border-width: 1.5px; \n        border-style: solid; \n        bottom: 0; \n    }\n\n    &::after {\n        right: 0; \n        transform: translateX(100%);\n        border-color: transparent transparent "," ",";\n    }\n\n    &::before {\n        left: 0; \n        transform: translateX(-100%);\n        border-color: transparent "," "," transparent;\n    }\n"]);return M=function(){return e},e}function B(){var e=Object(l.a)(["\n    display: ","; \n"]);return B=function(){return e},e}var H=u.b.span(B(),(function(e){return e.displayed?"inline-block":"none"})),P=function(e){return e.active?"white":h.fluent.SHADOW_BLUE},U=u.b.button(M(),P,(function(e){return e.active?1:0}),P,P,P,P),V=function(e){var n=e.title,t=e.closeButton,r=e.active;return a.a.createElement(U,{active:r},n,a.a.createElement(H,{displayed:t||!1}))};function Z(){var e=Object(l.a)(["\n    height: 100%; \n"]);return Z=function(){return e},e}function _(){var e=Object(l.a)(["\n    width: 100%; \n    height: 30px; \n    background-color: ","; \n"]);return _=function(){return e},e}var D=u.b.div(_(),(function(e){return e.backgroundColor})),F=u.b.div(Z()),I=function(e){var n=e.tabs.map((function(e,n){return a.a.createElement(V,{title:e.title,closeButton:e.closeButton,active:e.active,key:n})}));return a.a.createElement(D,{backgroundColor:e.backgroundColor},a.a.createElement(F,null,n))};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function N(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var A=a.a.createElement("path",{d:"M5.763 17H20V5H4V18.385L5.763 17ZM6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455Z",fill:"#2F548B"}),z=a.a.createElement("path",{d:"M12.5004 11L10 8.33396L11.2498 7L15 11L11.2498 15L10 13.666L12.5004 11Z",fill:"#2F548B"}),G=function(e){var n=e.svgRef,t=e.title,r=N(e,["svgRef","title"]);return a.a.createElement("svg",S({width:24,height:24,viewBox:"0 0 24 24",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,A,z)},T=a.a.forwardRef((function(e,n){return a.a.createElement(G,S({svgRef:n},e))}));t.p;function Y(){var e=Object(l.a)(["\n    width: 24px; \n    height: 24px; \n    cursor: pointer; \n    outline: 0; \n    border: 0; \n    background-color: transparent; \n"]);return Y=function(){return e},e}var W=u.b.button(Y());function K(){var e=Object(l.a)(["\n    display: flex; \n    align-items: center;\n    background-color: ",";\n    padding: 6px 14px 0 14px; \n"]);return K=function(){return e},e}var X=u.b.div(K(),(function(e){return e.backgroundColor})),J=function(e){return a.a.createElement(X,{backgroundColor:e.backgroundColor},a.a.createElement(I,{tabs:e.tabs,backgroundColor:e.backgroundColor}),a.a.createElement(W,null,a.a.createElement(T,null)))};function $(){return($=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function q(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Q=a.a.createElement("path",{d:"M11.4072 11.2706H9.02489L10.8507 7.54808L11.4072 11.2706Z",fill:"#2F548B"}),ee=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM8.21041 12.9396H11.6584L11.9706 15H14L12.1199 5H10.2805L5 15H7.19231L8.21041 12.9396Z",fill:"#2F548B"}),ne=function(e){var n=e.svgRef,t=e.title,r=q(e,["svgRef","title"]);return a.a.createElement("svg",$({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,Q,ee)},te=a.a.forwardRef((function(e,n){return a.a.createElement(ne,$({svgRef:n},e))}));t.p;function re(){return(re=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ae(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var oe=a.a.createElement("path",{d:"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM7.71 17.667C6.72341 15.5743 6.15187 13.3102 6.027 11H2.062C2.25659 12.5389 2.89392 13.9882 3.89657 15.1717C4.89922 16.3552 6.22401 17.2221 7.71 17.667ZM8.03 11C8.181 13.439 8.878 15.73 10 17.752C11.1523 15.6766 11.8254 13.3695 11.97 11H8.03ZM17.938 11H13.973C13.8481 13.3102 13.2766 15.5743 12.29 17.667C13.776 17.2221 15.1008 16.3552 16.1034 15.1717C17.1061 13.9882 17.7434 12.5389 17.938 11ZM2.062 9H6.027C6.15187 6.68979 6.72341 4.42569 7.71 2.333C6.22401 2.77788 4.89922 3.64475 3.89657 4.8283C2.89392 6.01184 2.25659 7.4611 2.062 9ZM8.031 9H11.969C11.8248 6.6306 11.152 4.32353 10 2.248C8.84768 4.32345 8.17456 6.63052 8.03 9H8.031ZM12.29 2.333C13.2766 4.42569 13.8481 6.68979 13.973 9H17.938C17.7434 7.4611 17.1061 6.01184 16.1034 4.8283C15.1008 3.64475 13.776 2.77788 12.29 2.333Z",fill:"#2F548B"}),ie=function(e){var n=e.svgRef,t=e.title,r=ae(e,["svgRef","title"]);return a.a.createElement("svg",re({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,oe)},le=a.a.forwardRef((function(e,n){return a.a.createElement(ie,re({svgRef:n},e))}));t.p;function ue(){return(ue=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ce(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var fe=a.a.createElement("path",{d:"M7.95405 1.21C9.30298 0.927135 10.6958 0.926454 12.045 1.208C12.1349 1.80129 12.3574 2.36669 12.6958 2.86218C13.0343 3.35767 13.4801 3.77051 14 4.07C14.5196 4.37053 15.1002 4.55007 15.6987 4.59525C16.2973 4.64044 16.8983 4.55012 17.457 4.331C18.3753 5.35906 19.0709 6.56604 19.5 7.876C19.0314 8.25058 18.6532 8.72595 18.3935 9.26679C18.1338 9.80764 17.9993 10.4 18 11C17.9993 11.6002 18.134 12.1927 18.3941 12.7336C18.6541 13.2745 19.0329 13.7498 19.502 14.124C19.0704 15.4329 18.3739 16.6389 17.456 17.667C16.8974 17.448 16.2966 17.3578 15.6983 17.403C15.0999 17.4482 14.5195 17.6276 14 17.928C13.4805 18.2274 13.0351 18.64 12.6968 19.1351C12.3585 19.6302 12.1361 20.1952 12.046 20.788C10.6973 21.0715 9.30439 21.0729 7.95505 20.792C7.86559 20.1982 7.64335 19.6322 7.30487 19.1361C6.96639 18.6401 6.52038 18.2268 6.00005 17.927C5.48041 17.6266 4.89975 17.4473 4.30124 17.4023C3.70272 17.3572 3.10176 17.4477 2.54305 17.667C1.62465 16.6386 0.929052 15.4313 0.500047 14.121C0.96844 13.7466 1.34651 13.2716 1.60618 12.7311C1.86586 12.1906 2.00048 11.5986 2.00005 10.999C2.00054 10.3989 1.86575 9.80637 1.60571 9.26552C1.34568 8.72466 0.96707 8.24938 0.498047 7.875C0.929715 6.56612 1.62616 5.3601 2.54405 4.332C3.1027 4.55096 3.70352 4.6412 4.30184 4.59601C4.90017 4.55083 5.48062 4.37138 6.00005 4.071C6.51959 3.7716 6.96503 3.35903 7.30331 2.86391C7.64158 2.36879 7.864 1.80384 7.95405 1.211V1.21ZM10 14C10.7957 14 11.5588 13.6839 12.1214 13.1213C12.684 12.5587 13 11.7957 13 11C13 10.2044 12.684 9.44129 12.1214 8.87868C11.5588 8.31607 10.7957 8 10 8C9.2044 8 8.44134 8.31607 7.87873 8.87868C7.31612 9.44129 7.00005 10.2044 7.00005 11C7.00005 11.7957 7.31612 12.5587 7.87873 13.1213C8.44134 13.6839 9.2044 14 10 14Z",fill:"#2F548B"}),se=function(e){var n=e.svgRef,t=e.title,r=ce(e,["svgRef","title"]);return a.a.createElement("svg",ue({width:20,height:22,viewBox:"0 0 20 22",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,fe)},pe=a.a.forwardRef((function(e,n){return a.a.createElement(se,ue({svgRef:n},e))}));t.p;function de(){return(de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function me(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var be=a.a.createElement("path",{d:"M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6 11C6 12.0609 6.42143 13.0783 7.17157 13.8284C7.92172 14.5786 8.93913 15 10 15C11.0609 15 12.0783 14.5786 12.8284 13.8284C13.5786 13.0783 14 12.0609 14 11H6ZM6 9C6.39782 9 6.77936 8.84196 7.06066 8.56066C7.34196 8.27936 7.5 7.89782 7.5 7.5C7.5 7.10218 7.34196 6.72064 7.06066 6.43934C6.77936 6.15804 6.39782 6 6 6C5.60218 6 5.22064 6.15804 4.93934 6.43934C4.65804 6.72064 4.5 7.10218 4.5 7.5C4.5 7.89782 4.65804 8.27936 4.93934 8.56066C5.22064 8.84196 5.60218 9 6 9ZM14 9C14.3978 9 14.7794 8.84196 15.0607 8.56066C15.342 8.27936 15.5 7.89782 15.5 7.5C15.5 7.10218 15.342 6.72064 15.0607 6.43934C14.7794 6.15804 14.3978 6 14 6C13.6022 6 13.2206 6.15804 12.9393 6.43934C12.658 6.72064 12.5 7.10218 12.5 7.5C12.5 7.89782 12.658 8.27936 12.9393 8.56066C13.2206 8.84196 13.6022 9 14 9Z",fill:"#2F548B"}),he=function(e){var n=e.svgRef,t=e.title,r=me(e,["svgRef","title"]);return a.a.createElement("svg",de({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,be)},ve=a.a.forwardRef((function(e,n){return a.a.createElement(he,de({svgRef:n},e))}));t.p;function ge(){var e=Object(l.a)(["\n    display: inline-block;\n    border: 0;\n    outline: 0; \n    background-color: transparent;\n    width: 20px; \n    height: 20px; \n    cursor: pointer;\n\n    &:hover svg path {\n        fill: ","; \n    }\n\n    &:nth-child(2) {\n        margin-left: 16px; \n        margin-right: 16px; \n    }\n\n    &:last-child {\n        margin-left: auto; \n        margin-right: 0; \n    }\n"]);return ge=function(){return e},e}function xe(){var e=Object(l.a)(["\n    display: flex; \n    padding: 0 12px;\n"]);return xe=function(){return e},e}var Ee=u.b.div(xe()),Ce=u.b.button(ge(),h.fluent.ICON_DARK_BLUE),ye=function(e){return a.a.createElement(Ee,null,a.a.createElement(Ce,null,a.a.createElement(ve,null)),a.a.createElement(Ce,null,a.a.createElement(te,null)),a.a.createElement(Ce,null,a.a.createElement(le,null)),a.a.createElement(Ce,null,a.a.createElement(pe,null)))};function Oe(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px; \n\n    span, button {\n        font-size: 10px; \n    }\n\n    span {\n        color: #70819A; \n    }\n\n    button {\n        text-transform: uppercase; \n        border: 0; \n        outline: 0; \n        background-color: transparent; \n        color: ",";\n        font-weight: bold; \n        cursor: pointer;\n    }\n\n\n"]);return Oe=function(){return e},e}function we(){var e=Object(l.a)(["\n    display: block; \n    max-width: 216px;\n    width: 100%;  \n    height: 48px;\n    outline: 0; \n    border: 0;\n    resize: none;\n    border-radius: 6px; \n    padding: 6px 12px;\n    margin-top: 8px;\n    font-family: 'Roboto', sans-serif;\n"]);return we=function(){return e},e}function je(){var e=Object(l.a)(["\n    display: flex; \n    max-height: 120px;\n    height: 100%; \n    flex-direction: column; \n    padding: 8px 12px 12px 12px; \n    background-color: #D5E3EF;\n"]);return je=function(){return e},e}var Re=u.b.div(je()),Le=u.b.textarea(we()),ke=u.b.div(Oe(),h.fluent.ICON_BLUE),Me=function(e){return a.a.createElement(Re,null,a.a.createElement(ye,null),a.a.createElement(Le,{placeholder:"Type your message here"}),a.a.createElement(ke,null,a.a.createElement("button",null,"send"),a.a.createElement("span",null,"or press Ctrl + Enter")))};function Be(){var e=Object(l.a)(["\n    display: flex; \n    flex-direction: column; \n    justify-content: space-between; \n    max-width: 240px;\n    width: 100%; \n    height: 100%; \n"]);return Be=function(){return e},e}var He=u.b.div(Be()),Pe=function(e){return a.a.createElement(He,null,a.a.createElement(J,{tabs:e.tabs,backgroundColor:h.fluent.PEACH}),a.a.createElement(k,{messages:e.messages}),a.a.createElement(Me,null))},Ue=t(11);function Ve(){var e=Object(l.a)(["\n    display: block; \n    width: 100%; \n    height: 100%; \n    object-fit: cover;\n    border-radius: inherit;\n"]);return Ve=function(){return e},e}function Ze(){var e=Object(l.a)(["  \n    width: 100%; \n    height: 100%; \n    border-radius: inherit;\n"]);return Ze=function(){return e},e}var _e=u.b.div(Ze()),De=u.b.video(Ve()),Fe=function(e){var n=Object(r.useRef)(null),t=Object(r.useState)(e.isEnabled),o=Object(Ue.a)(t,2),i=o[0];o[1];return Object(r.useEffect)((function(){navigator.mediaDevices.getUserMedia&&i&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){n.current&&(n.current.srcObject=e)}))}),[e.isEnabled]),a.a.createElement(_e,null,a.a.createElement(De,{ref:n,autoPlay:!0}))};function Ie(){return(Ie=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Se(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var Ne=a.a.createElement("path",{d:"M14.4747 3.00777C14.5625 3.00074 14.6505 3.01704 14.73 3.055C14.8116 3.09723 14.8799 3.1611 14.9275 3.2396C14.9751 3.31809 15.0002 3.40819 15 3.5V10.5C14.9996 10.5916 14.974 10.6813 14.9261 10.7594C14.8781 10.8375 14.8097 10.9008 14.7281 10.9426C14.6466 10.9844 14.5552 11.003 14.4638 10.9964C14.3724 10.9897 14.2847 10.9581 14.21 10.905L11.5 8.97V11C11.5 11.2652 11.3947 11.5196 11.2071 11.7071C11.0196 11.8946 10.7652 12 10.5 12H3.72003L1.72003 14L1.00003 13.28L14.28 0L15 0.72L11.5 4.22V5.03L14.23 3.095C14.3025 3.04488 14.3869 3.01479 14.4747 3.00777Z",fill:"#8C0808"}),Ae=a.a.createElement("path",{d:"M2.00001 2H10.155L1.00001 11.145C0.997554 11.0967 0.997554 11.0483 1.00001 11V3C1.00001 2.73478 1.10537 2.48043 1.29291 2.29289C1.48044 2.10536 1.7348 2 2.00001 2Z",fill:"#8C0808"}),ze=function(e){var n=e.svgRef,t=e.title,r=Se(e,["svgRef","title"]);return a.a.createElement("svg",Ie({width:15,height:14,viewBox:"0 0 15 14",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,Ne,Ae)},Ge=a.a.forwardRef((function(e,n){return a.a.createElement(ze,Ie({svgRef:n},e))}));t.p;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ye(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var We=a.a.createElement("path",{d:"M10.5 7.5C10.4981 8.17843 10.299 8.84166 9.92698 9.40902C9.55499 9.97637 9.02613 10.4234 8.40475 10.6957C7.78335 10.968 7.09622 11.0538 6.42695 10.9427C5.75768 10.8316 5.13511 10.5284 4.635 10.07L5.345 9.365C5.70516 9.68312 6.14937 9.8907 6.62446 9.96288C7.09954 10.0351 7.58536 9.96881 8.02376 9.77203C8.46216 9.57525 8.83455 9.2563 9.09637 8.85335C9.35818 8.4504 9.49832 7.98053 9.5 7.5V5.21L14 0.71L13.295 0L0 13.295L0.705 14L3.925 10.78C4.63075 11.4466 5.53493 11.8645 6.5 11.97V13H4.5V14H9.5V13H7.5V11.97C8.59968 11.8471 9.61551 11.3232 10.3534 10.4987C11.0913 9.67408 11.4995 8.60653 11.5 7.5V6H10.5V7.5Z",fill:"#8C0808"}),Ke=a.a.createElement("path",{d:"M3.5 7.66V6H2.5V7.5C2.50065 7.85202 2.5426 8.20275 2.625 8.545L3.5 7.66Z",fill:"#8C0808"}),Xe=a.a.createElement("path",{d:"M8.32313 0.432666C8.82489 0.745843 9.19937 1.22678 9.38 1.79001L4.5 6.67001V2.50001C4.51265 1.90866 4.73456 1.34095 5.12628 0.897781C5.518 0.454608 6.05417 0.164678 6.63949 0.0795193C7.22481 -0.00563979 7.82136 0.119489 8.32313 0.432666Z",fill:"#8C0808"}),Je=function(e){var n=e.svgRef,t=e.title,r=Ye(e,["svgRef","title"]);return a.a.createElement("svg",Te({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,We,Ke,Xe)},$e=a.a.forwardRef((function(e,n){return a.a.createElement(Je,Te({svgRef:n},e))}));t.p;function qe(){return(qe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Qe(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var en=a.a.createElement("path",{d:"M6.99998 6.33334V4.33334L9.66665 7.00001L6.99998 9.66668V7.66668H4.33331V6.33334H6.99998ZM6.99998 0.333344C10.68 0.333344 13.6666 3.32001 13.6666 7.00001C13.6666 10.68 10.68 13.6667 6.99998 13.6667C3.31998 13.6667 0.333313 10.68 0.333313 7.00001C0.333313 3.32001 3.31998 0.333344 6.99998 0.333344ZM6.99998 12.3333C9.94665 12.3333 12.3333 9.94668 12.3333 7.00001C12.3333 4.05334 9.94665 1.66668 6.99998 1.66668C4.05331 1.66668 1.66665 4.05334 1.66665 7.00001C1.66665 9.94668 4.05331 12.3333 6.99998 12.3333Z",fill:"#2F548B"}),nn=function(e){var n=e.svgRef,t=e.title,r=Qe(e,["svgRef","title"]);return a.a.createElement("svg",qe({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:n},r),t?a.a.createElement("title",null,t):null,en)},tn=a.a.forwardRef((function(e,n){return a.a.createElement(nn,qe({svgRef:n},e))}));t.p;function rn(){var e=Object(l.a)(["\n    display: inline-block;\n    width: 13.33px; \n    height: 13.33px;\n    margin-top: auto; \n    margin-bottom: 0; \n"]);return rn=function(){return e},e}function an(){var e=Object(l.a)(["\n    max-width: 135px; \n    width: 100%; \n    margin-left: 5px; \n    h4 {\n        font-size: 13px; \n    }\n    \n    "," {\n        margin-top: 6px; \n        button, i {\n            display: flex; \n            justify-content: center; \n            align-items: center;\n            max-width: 14px;\n            max-height: 14px;\n        }\n    }\n"]);return an=function(){return e},e}function on(){var e=Object(l.a)(["\n    display: flex; \n    justify-content: space-between;\n    max-width: 62px; \n    width: 100%; \n"]);return on=function(){return e},e}function ln(){var e=Object(l.a)(["\n    position: relative;\n    min-width: ","; \n    max-width: ",";\n    min-height: ","; \n    max-height: ","; \n    height: ",";\n    img {\n        width: 100%; \n        height: 100%; \n        border-radius: 50%;  \n        object-fit: cover; \n    }\n\n    &::after {\n        content: ''; \n        display: block; \n        width: 10px; \n        height: 10px;\n        position: absolute;\n        right: 0;\n        bottom: 0;  \n        border-radius: 50%;\n        background-color: ",";\n        border: 1px solid black; \n    }\n"]);return ln=function(){return e},e}function un(){var e=Object(l.a)(["\n    display: flex; \n    width: 100%; \n    height: 48px; \n    background-color: inherit; \n    transform: translateY(-100%); \n    opacity: .85;\n    padding: 8px 20px 7px 6px;  \n    border-radius: 0 0 8px 8px; \n\n    button {\n        outline: 0; \n        border: 0; \n        background-color: transparent;\n        cursor: pointer;\n    }\n"]);return un=function(){return e},e}var cn=u.b.div(un()),fn=u.b.div(ln(),"36px","36px","36px","36px","36px",(function(e){var n=e.status.replace(" ","_");return h.fluent.status[n]})),sn=u.b.div(on()),pn=u.b.div(an(),sn),dn=u.b.button(rn()),mn=function(e){var n=t(19)("./"+e.role+".svg");return a.a.createElement(cn,null,a.a.createElement(fn,{status:e.status},a.a.createElement("img",{src:e.photoURL,alt:"".concat(e.name," is ").concat(e.status)})),a.a.createElement(pn,null,a.a.createElement("h4",null,e.name),a.a.createElement(sn,null,a.a.createElement("i",null,a.a.createElement("img",{src:n,alt:e.role})),!e.isMicroEnabled&&a.a.createElement("button",null,a.a.createElement($e,null)),!e.isVideoEnabled&&a.a.createElement("button",null,a.a.createElement(Ge,null)))),a.a.createElement(dn,null,a.a.createElement(tn,null)))};function bn(){var e=Object(l.a)(["\n    max-width: 210px; \n    max-height: 144px;\n    width: 100%; \n    height: 100%; \n    border-radius: 8px;\n    background-color: ","; \n"]);return bn=function(){return e},e}var hn=u.b.div(bn(),h.fluent.LIGHT_GREY),vn=function(e){return a.a.createElement(hn,null,a.a.createElement(Fe,{isEnabled:e.isVideoEnabled}),a.a.createElement(mn,{isVideoEnabled:e.isVideoEnabled,isMicroEnabled:e.isMicroEnabled,profileLink:e.profileLink,photoURL:e.photoURL,status:e.status,role:e.role,name:e.name}))},gn=function(e){return a.a.createElement(vn,{isVideoEnabled:!0,isMicroEnabled:!1,name:"Alexey",profileLink:"https://vk.com/nortimg",photoURL:"https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png",status:"online",role:"student"})};function xn(){var e=Object(l.a)(["\n  display: flex; \n  justify-content: space-between; \n  height: 100%; \n"]);return xn=function(){return e},e}var En=[{author:"Vasya",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.",date:"6.25.2020",time:"2:35",fromMe:!1,photoURL:"https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"},{author:"Nikita",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.",date:"6.26.2020",time:"4:35",fromMe:!0,photoURL:"https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"},{author:"Nikita",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.",date:"6.26.2020",time:"4:35",fromMe:!1,photoURL:"https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"},{author:"Nikita",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.",date:"6.26.2020",time:"4:35",fromMe:!0,photoURL:"https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"},{author:"Nikita",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.",date:"6.26.2020",time:"4:35",fromMe:!1,photoURL:"https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"}],Cn=[{title:"RoomName",active:!0},{title:"All",active:!1}],yn=[],On=u.b.div(xn()),wn=function(){return a.a.createElement(On,null,a.a.createElement(gn,{users:yn}),a.a.createElement(Pe,{messages:En,tabs:Cn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function jn(){var e=Object(l.a)(["\n\n    ","\n    ","\n\n    body, #root, html {\n        height: 100%; \n    }\n\n    body {\n        font-family: 'Roboto', sans-serif\n    }\n\n    &::placeholder {\n        font-family: 'Roboto', sans-serif; \n        font-size: 13px; \n    }\n\n    *, *::before, *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    .text-right {\n        text-align: right;\n    }\n\n    h4 {\n        color: ","\n    }\n"]);return jn=function(){return e},e}var Rn=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"normal";return'\n      @font-face {\n          font-family: "'.concat(e,'";\n          src: url(').concat(t(21)("./".concat(e,"/").concat(n,".ttf")),') format("truetype"); \n          font-style: ').concat(a,";\n          font-weight: ").concat(r,";\n      } \n  ")},Ln=Object(u.a)(jn(),Rn("Roboto","Roboto-Bold","bold"),Rn("Roboto","Roboto-Regular"),h.fluent.DARK_BROWN);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ln,null),a.a.createElement(wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.3508cab3.chunk.js.map