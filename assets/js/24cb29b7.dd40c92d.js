"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=a,m=f["".concat(i,".").concat(g)]||f[g]||s[g]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="\u6982\u5ff5",c={unversionedId:"golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b",id:"golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b",title:"\u6982\u5ff5",description:"RPC",source:"@site/docs/golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b.md",sourceDirName:"golang/gRPC",slug:"/golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b",permalink:"/docs/golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/gRPC/\u6982\u5ff5 a05f6e5c0f034170a93be32f866d387b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6",permalink:"/docs/golang/gRPC/\u5b89\u88dd\u76f8\u95dc\u5957\u4ef6 0fa32e2693fc4ca5b9cb00e73882bce6"},next:{title:"new vs make",permalink:"/docs/golang/new vs make 6e652078954d46a1912015dfee26aae2"}},i={},u=[],p={toc:u};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("p",null,"RPC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"remote procedure call"),(0,a.kt)("li",{parentName:"ul"},"client \u5c0d server \u767c\u51fa request\uff0c\u5728\u4f7f\u7528\u9019\u652f API \u6642\uff0c\u5c31\u50cf\u662f\u547c\u53eb\u81ea\u5df1\u5167\u90e8\u7684\u65b9\u6cd5\u4e00\u6a23\u7c21\u55ae")),(0,a.kt)("p",null,"gRPC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u65bc HTTP/2"),(0,a.kt)("li",{parentName:"ul"},"low latency"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u63f4\u4e32\u6d41"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u5bb9\u6613\u505a\u5230\u6b0a\u9650\u9a57\u8b49 authentication"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Protocol Buffers \u7576\u50b3\u8f38\u683c\u5f0f\uff08\u50b3\u7d71\u4e0a\u662f JSON\uff09")),(0,a.kt)("p",null,"Protocol Buffers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Protocol Buffers \u53ef\u4ee5\u55ae\u7368\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u7528 gRPC \u4e00\u5b9a\u8981\u642d\u914d Protocol Buffers"),(0,a.kt)("li",{parentName:"ul"},"message \u5b9a\u7fa9\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"service \u5b9a\u7fa9\u65b9\u6cd5")))}f.isMDXComponent=!0}}]);