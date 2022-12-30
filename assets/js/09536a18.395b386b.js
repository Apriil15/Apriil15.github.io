"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},c="Object literal",l={unversionedId:"typescript/Object literal a405ee473baa42589c3ea5eed829c94e",id:"typescript/Object literal a405ee473baa42589c3ea5eed829c94e",title:"Object literal",description:"\u5728 JS \u53ef\u4ee5\u9019\u6a23\u5beb\uff0c\u4f46\u5728 TS \u9019\u6a23\u5beb\u662f\u884c\u4e0d\u901a\u7684",source:"@site/docs/typescript/Object literal a405ee473baa42589c3ea5eed829c94e.md",sourceDirName:"typescript",slug:"/typescript/Object literal a405ee473baa42589c3ea5eed829c94e",permalink:"/docs/typescript/Object literal a405ee473baa42589c3ea5eed829c94e",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Object literal a405ee473baa42589c3ea5eed829c94e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Non-null assertion operator",permalink:"/docs/typescript/Non-null assertion operator fb773532dac04ac1b433d24632a3e57d"},next:{title:"Override",permalink:"/docs/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d"}},i={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-literal"},"Object literal"),(0,a.kt)("p",null,"\u5728 JS \u53ef\u4ee5\u9019\u6a23\u5beb\uff0c\u4f46\u5728 TS \u9019\u6a23\u5beb\u662f\u884c\u4e0d\u901a\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'let obj = {}\n\nobj.name = "Sam"\nobj.age = 18\nconsole.log(obj);\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7e5e\u904e\uff0c\u4f46\u9019\u6a23\u5beb\u4e0d\u597d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let obj = {} as any\n\nobj.name = 'Sam'\nobj.age = 18\nconsole.log(obj)\n")),(0,a.kt)("p",null,"\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," \u6703\u662f\u6bd4\u8f03\u597d\u7684\u4f5c\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Student = {\n  name: string\n  age: number\n}\n\nlet obj = {} as Student\n\nobj.name = 'Sam'\nobj.age = 18\nconsole.log(obj)\n")))}u.isMDXComponent=!0}}]);