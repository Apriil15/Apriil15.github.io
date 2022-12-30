"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=c,b=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,o(o({ref:t},l),{},{components:r})):n.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),c=(r(7294),r(3905));const a={},o="Getter & Setter",i={unversionedId:"typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72",id:"typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72",title:"Getter & Setter",description:"- \u8abf\u7528\u65b9\u5f0f\u5982 property",source:"@site/docs/typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72.md",sourceDirName:"typescript",slug:"/typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72",permalink:"/docs/typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Getter & Setter bbe4e34c970749e489c1e3690bc1ce72.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generics",permalink:"/docs/typescript/Generics 1f17494a086f49ebbc2f267a8fea8621"},next:{title:"Interface",permalink:"/docs/typescript/Interface ca1fa70e6f664792a1ac002ebfee50c8"}},p={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"getter--setter"},"Getter & Setter"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8abf\u7528\u65b9\u5f0f\u5982 property")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"class Student {\n  private _name: string\n\n  constructor(name: string) {\n    this._name = name\n  }\n\n  get name(): string {\n    return this._name\n  }\n  set name(name: string) {\n    this._name = name\n  }\n}\n\nconst student = new Student('Sam')\n\n// use setter\nstudent.name = 'Ken'\n\n// use getter\nconsole.log(student.name) // Ken\n")))}u.isMDXComponent=!0}}]);