"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=l(r),u=a,b=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return r?n.createElement(b,c(c({ref:t},d),{},{components:r})):n.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},c="Override",i={unversionedId:"typescript/Override 7ce99c20d7984b38981a50eaea22ec7d",id:"typescript/Override 7ce99c20d7984b38981a50eaea22ec7d",title:"Override",description:"\u5176\u5be6 addMember() \u6709\u6c92\u6709\u5beb override \u4e0d\u5f71\u97ff\u8f38\u51fa\u7d50\u679c",source:"@site/docs/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d.md",sourceDirName:"typescript",slug:"/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d",permalink:"/docs/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/Override 7ce99c20d7984b38981a50eaea22ec7d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object literal",permalink:"/docs/typescript/Object literal a405ee473baa42589c3ea5eed829c94e"},next:{title:"Sinon",permalink:"/docs/typescript/Sinon 51612e0ebf9340a4b628d00b39a8cc0c"}},p={},l=[],d={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"override"},"Override"),(0,a.kt)("p",null,"\u5176\u5be6 ",(0,a.kt)("inlineCode",{parentName:"p"},"addMember()")," \u6709\u6c92\u6709\u5beb ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," \u4e0d\u5f71\u97ff\u8f38\u51fa\u7d50\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class Department {\n  addMember() {\n    console.log('Department addMember')\n  }\n  grow() {\n    console.log('Department grow')\n  }\n}\n\nclass ITDepartment extends Department {\n  // override \u4e0d\u5f71\u97ff\u8f38\u51fa\u7d50\u679c\n  override addMember() {\n    console.log('ITDepartment addMember')\n  }\n}\n\nconst it = new ITDepartment()\nit.addMember() // ITDepartment addMember\nit.grow() // Department grow\n")),(0,a.kt)("p",null,"\u4f46\u5beb\u4e0a\u53bb\u6703\u66f4\u597d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5047\u8a2d\u67d0\u5929\u624b\u6b98\u8aa4\u522a base class (Department) \u7684\u65b9\u6cd5\uff0c\u5c31\u6703\u63d0\u9192\u6211\u5011\u51fa\u5927\u4e8b\u5566"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u76ee\u4e86\u7136\u77e5\u9053 override base class \u7684\u65b9\u6cd5\uff0c\u4e0d\u662f\u65b0\u5beb\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class Department {\n  // addMember() {\n  //   console.log('Department addMember')\n  // }\n  grow() {\n    console.log('Department grow')\n  }\n}\n\nclass ITDepartment extends Department {\n  // This member cannot have an 'override' modifier because it is not declared\n  // in the base class 'Department'.ts(4113)\n  override addMember() {\n    console.log('ITDepartment addMember')\n  }\n}\n\nconst it = new ITDepartment()\nit.addMember() // ITDepartment addMember\nit.grow() // Department grow\n")))}s.isMDXComponent=!0}}]);