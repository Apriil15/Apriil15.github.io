"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9842],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),g=r,d=c["".concat(o,".").concat(g)]||c[g]||u[g]||l;return t?a.createElement(d,p(p({ref:n},s),{},{components:t})):a.createElement(d,p({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=g;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const l={},p="\u5404\u7a2e Type \u6a5f\u5236",i={unversionedId:"typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea",id:"typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea",title:"\u5404\u7a2e Type \u6a5f\u5236",description:"- primitive type",source:"@site/docs/typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea.md",sourceDirName:"typescript",slug:"/typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea",permalink:"/docs/typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/typescript/\u5404\u7a2e Type \u6a5f\u5236 92123ecd9fc1470b85da70f84f52b6ea.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"type guard \u578b\u5225\u5224\u65b7",permalink:"/docs/typescript/type guard \u578b\u5225\u5224\u65b7 b1b322fcc7be41bcbd9138c3ac56e3b7"},next:{title:"\u7528 VS Code \u4f86 debug",permalink:"/docs/typescript/\u7528 VS Code \u4f86 debug 9d07d8f253a04db9a6f685ab757a3c14"}},o={},m=[],s={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5404\u7a2e-type-\u6a5f\u5236"},"\u5404\u7a2e Type \u6a5f\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"primitive type","  TS \u4e2d\u578b\u5225\u6709\u5169\u7a2e\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"primitive type"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"object type"),"  \u5176\u4e2d primitive type (\u539f\u59cb\u578b\u5225) \u6709\uff1aboolean\u3001number\u3001string\u3001null\u3001undefined \u548c ES6 \u7684 Symbol",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba3\u544a\u65b9\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'let a: boolean = false;\nlet b: number = 98;\nlet c: string = "test";\nlet d: string = `${c}123`; // \u5d4c\u5165\u8b8a\u6578\nlet e: undefined = undefined;\nlet f: null = null;\n\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(d);\nconsole.log(e);\nconsole.log(f);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u56de\u50b3\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function test(num: number): void {\n  console.log(num);\n}\n\ntest(87);\n"))))),(0,r.kt)("li",{parentName:"ul"},"Union",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba3\u544a\u65b9\u5f0f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u4f86\u5206\u9694\u578b\u5225"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u53ef\u4ee5\u662f string or number \u578b\u5225\nlet a: string | number\n\na = 'test'\nconsole.log(a)\n\na = 87\nconsole.log(a)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u5728 function\uff0c\u53ea\u80fd\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u5171\u540c\u7684\u65b9\u6cd5\u3001\u5c6c\u6027"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," \u662f number\u3001string \u5171\u540c\u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\uff1b\u5982\u679c\u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," \u6703\u5831\u932f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function getString(something: number | string): string {\n  return something.toString()\n}\n\nconsole.log(getString(98))\n\nconsole.log(getString('test'))\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"union type \u7684\u8b8a\u6578\u88ab assign \u6642\uff0c\u6703\u6839\u64da\u578b\u5225\u63a8\u8ad6\u7684\u898f\u5247\u63a8\u65b7\u51fa\u7576\u4e0b\u578b\u5225"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let something: string | number\n\n// \u76ee\u524d\u662f string\nsomething = 'test'\nconsole.log(something.length)\n\n// \u76ee\u524d\u662f number\nsomething = 98\nconsole.log(something.length) // \u6703\u5831\u932f\n"))))),(0,r.kt)("li",{parentName:"ul"},"Pick (\u5f9e\u4e00\u500b\u578b\u5225\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"\u53d6\u51fa\u5b50\u96c6"),"\u7576\u6210\u4e00\u500b\u578b\u5225)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u589e\u52a0\u95b1\u8b80\u6027"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type Info = {\n  name: string;\n  age: number;\n  account: string;\n  password: string;\n  phoneNumber: string;\n};\n\n// \u5f9e Info \u88e1\u9762\u53d6\u51fa password\uff0cphoneNumber \u6210\u70ba\u4e00\u500b\u65b0\u7684 type\ntype Secret = Pick<Info, "password" | "phoneNumber">;\n\nconst secret: Secret = {\n  password: "password",\n  phoneNumber: "0987654321",\n};\n'))))),(0,r.kt)("li",{parentName:"ul"},"Record",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c07\u5169\u500b type \u7d44\u6210\u4e00\u500b\u5206\u5225\u662f key\uff0cvalue \u7684\u65b0 type"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type CatName = 'A' | 'B' | 'C'\n\ntype CatInfo = {\n  age: number\n  breed: string\n}\n\n// Record<CatName, CatInfo> \u662f\u4e00\u500b\u7269\u4ef6\n// key \u662f CatName\uff0cvalue \u662f CatInfo\nconst cats: Record<CatName, CatInfo> = {\n  A: { age: 5, breed: 'AAA' },\n  B: { age: 10, breed: 'BBB' },\n  C: { age: 15, breed: 'CCC' }\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},"Partial / Required",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Partial: \u5c6c\u6027\u90fd\u8b8a\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"option"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Required: \u5c6c\u6027\u90fd\u8b8a\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"\u5fc5\u9808")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Student = {\n  name?: string\n  age: number\n}\ntype PartialStudent = Partial<Student>\ntype RequiredStudent = Required<Student>\n\nconst student: Student = { age: 20 }\nconst partialStudent: PartialStudent = {}\nconst requiredStudent: RequiredStudent = { name: 'Sam', age: 27 }\n"))))),(0,r.kt)("li",{parentName:"ul"},"Intersection type ",(0,r.kt)("inlineCode",{parentName:"li"},"&"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c0d object type \u6703\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"\u806f\u96c6")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Identity = {\n  id: string\n  name: string\n}\n\ntype Contact = {\n  phone: string\n  email: string\n}\n\ntype Employee = Identity & Contact\n\nconst employee: Employee = {\n  id: 'A001',\n  name: 'Tom',\n  phone: '0123456789',\n  email: 'abc@gmail.com'\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c0d union type \u6703\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"\u4ea4\u96c6")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type A = string | number\ntype B = string | boolean\n\n// \u6703\u662f\u4ea4\u96c6\ntype C = A & B // string\n"))))),(0,r.kt)("li",{parentName:"ul"},"Any & Unknown","  \u76f8\u540c\u5730\u65b9\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u90fd\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u578b\u5225"),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u540c\u5730\u65b9\uff1a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any \u53ef\u4ee5 assign \u7d66\u4efb\u4f55\u578b\u5225")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unknown \u53ea\u80fd assign \u7d66 any or unknown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any \u53ef\u4ee5\u4efb\u610f\u64cd\u4f5c\u5c6c\u6027 or \u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unknown \u8981\u57f7\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"\u578b\u5225\u65b7\u8a00"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u578b\u5225\u6aa2\u67e5"),"\u624d\u80fd\u64cd\u4f5c\u5c6c\u6027 or \u65b9\u6cd5\u4e14\u901a\u904e\u7de8\u8b6f"),(0,r.kt)("h2",{parentName:"li",id:"any"},"Any")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any \u53ef\u4ee5\u88ab assign \u4efb\u610f\u578b\u5225"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// any \u53ef\u4ee5\u88ab assign \u4efb\u610f\u578b\u5225\nlet a: any = "test";\nconsole.log(a);\n\na = 87;\nconsole.log(a);\n\na = true;\nconsole.log(a);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba3\u544a\u6642\u4e0d\u6307\u5b9a\u578b\u5225\uff0c\u5c31\u6703\u662f any"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u7b49\u540c\u65bc let something: any;\nlet something;\n\nsomething = true;\nconsole.log(something);\n\nsomething = 98;\nconsole.log(something);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"any  \u7684\u554f\u984c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: any = 19;\n\nlet str: string = a;\n\n// \u7de8\u8b6f\u6642\u671f\u6c92\u4e8b\uff0c\u4f46\u57f7\u884c\u6642\u671f\u6703\u932f\nconsole.log(str.toLowerCase());\n")),(0,r.kt)("h2",{parentName:"li",id:"unknown"},"Unknown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u80fd assign \u7d66 ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"let a: unknown = 19;\n\n// assign \u7d66 unknown & any\nlet b: unknown = a;\nlet c: any = a;\n\n// \u6703\u5831\u932f!!\nlet str: string = a;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6c92\u6709\u63a8\u65b7\u662f\u4ec0\u9ebc\u578b\u5225\u4e4b\u524d\uff0c\u7981\u6b62\u64cd\u4f5c\u5c6c\u6027\u8207\u65b9\u6cd5"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'let a: unknown = "123";\n\nif (typeof a === "string") {\n  console.log(a.toUpperCase()); // \u63a8\u65b7\u5f8c\u53ef\u4ee5\u7528\u65b9\u6cd5\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},"Never","  \u7528\u9014\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7121\u7aae\u8ff4\u5708"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function infiniteLoop(num: number): never {\n  while (true) {\n    console.log(num)\n  }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"throw exception"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function generateError(message: string): never {\n  throw new Error(message)\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},"Omit (\u5ffd\u7565\u7279\u5b9a\u5c6c\u6027)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Todo = {\n  title: string\n  description: string\n  completed: boolean\n  createdAt: number\n}\n\ntype TodoPreview = Omit<Todo, 'description' | 'createdAt'>\n\nconst todo: TodoPreview = {\n  title: 'Finish recap 2021',\n  completed: false\n}\n")))))}c.isMDXComponent=!0}}]);