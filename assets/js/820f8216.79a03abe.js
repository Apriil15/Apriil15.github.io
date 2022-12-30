"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7105],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={},i="Template",o={unversionedId:"golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89",id:"golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89",title:"Template",description:"\u9019\u4e5f\u592a\u795e\u5947\u60f9\u5427XD\uff0c\u5370\u8c61\u4e2d Hugo (?!) \u6709\u770b\u904e\u9019\u6a23\u7684\u5beb\u6cd5",source:"@site/docs/golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89",permalink:"/docs/golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89",draft:!1,editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Template a7d97db5e05a44a5bc6ae0fcfd702b89.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Switch",permalink:"/docs/golang/Basis/Switch 974bc26ad26f4d5cb256414c457b1740"},next:{title:"Type \u81ea\u8a02\u578b\u5225",permalink:"/docs/golang/Basis/Type \u81ea\u8a02\u578b\u5225 619db940c5324124937a765ca1215d69"}},s={},u=[{value:"Remark",id:"remark",level:2},{value:"Example",id:"example",level:2},{value:"Template",id:"template-1",level:3},{value:"\u7c3d\u5230\u7c3f\u61c9\u7528\u7a0b\u5f0f",id:"\u7c3d\u5230\u7c3f\u61c9\u7528\u7a0b\u5f0f",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"template"},"Template"),(0,a.kt)("p",null,"\u9019\u4e5f\u592a\u795e\u5947\u60f9\u5427XD\uff0c\u5370\u8c61\u4e2d Hugo (?!) \u6709\u770b\u904e\u9019\u6a23\u7684\u5beb\u6cd5"),(0,a.kt)("h2",{id:"remark"},"Remark"),(0,a.kt)("p",null,"\u76f4\u63a5\u63d2\u5165 data\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"{{.}}")),(0,a.kt)("p",null,"struct \u5beb\u6cd5\uff0c\u5f8c\u9762\u8981\u52a0\u5165\u6b04\u4f4d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"{{.field}}")),(0,a.kt)("p",null,"true \u624d\u6703\u986f\u793a\u4e2d\u9593\u7684 data\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"{{if .}}xxx{{end}}")),(0,a.kt)("p",null,"\u8ff4\u5708\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"{{range .}}{{.}}{{end}}")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"template-1"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "os"\n    "text/template"\n)\n\nfunc main() {\n    // {{.}}\n    exeTemplate("i am not a {{.}} guy\\n", "C#")\n    exeTemplate("i am a {{.}} guy\\n", "Go")\n\n    // {{if .}}xxx{{end}}\n    exeTemplate("{{if .}}i like Go{{end}}\\n", true)\n    exeTemplate("{{if .}}i like C#{{end}}\\n", false)\n\n    // {{range .}}{{.}}{{end}}\n    exeTemplate("{{range .}}i am a {{.}} guy\\n{{end}}\\n", []string{"Go", "Java", "Python"})\n\n    // {{.field}} struct \u5beb\u6cd5\n    exeTemplate("{{.Name}} language\'s salary is {{.Salary}}K.{{if .IsPopular}} Besides, it\'s very popular.{{end}}\\n",\n        Language{Name: "Go", Salary: 121, IsPopular: true})\n}\n\nfunc exeTemplate(text string, data interface{}) {\n    tmpl, err := template.New("test").Parse(text)\n    check(err)\n    err = tmpl.Execute(os.Stdout, data) // Stdout (standard output) -> terminal\n    check(err)\n}\n\nfunc check(err error) {\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n\ntype Language struct {\n    Name      string\n    Salary    int\n    IsPopular bool\n}\n')),(0,a.kt)("h3",{id:"\u7c3d\u5230\u7c3f\u61c9\u7528\u7a0b\u5f0f"},"\u7c3d\u5230\u7c3f\u61c9\u7528\u7a0b\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"main.go")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "bufio"\n    "fmt"\n    "html/template"\n    "log"\n    "net/http"\n    "os"\n)\n\nfunc main() {\n    http.HandleFunc("/guestbook", viewHandler)\n    http.HandleFunc("/guestbook/new", newHandler)\n    http.HandleFunc("/guestbook/create", createHandler)\n    err := http.ListenAndServe(":8080", nil)\n    log.Fatal(err)\n}\n\nfunc viewHandler(writer http.ResponseWriter, request *http.Request) {\n    signatures := getSignatures("signatures.txt")\n    tmpl, err := template.ParseFiles("view.html")\n    check(err)\n\n    guestBook := GuestBook{SignatureCount: len(signatures), Signatures: signatures}\n    err = tmpl.Execute(writer, guestBook)\n    check(err)\n}\n\nfunc newHandler(writer http.ResponseWriter, request *http.Request) {\n    tmpl, err := template.ParseFiles("new.html")\n    check(err)\n    err = tmpl.Execute(writer, nil)\n    check(err)\n}\n\nfunc createHandler(writer http.ResponseWriter, request *http.Request) {\n    signature := request.FormValue("signature")\n\n    // OR \u4f4d\u5143\u904b\u7b97\u5b50\n    options := os.O_WRONLY | os.O_APPEND | os.O_CREATE\n\n    file, err := os.OpenFile("signatures.txt", options, os.FileMode(0600))\n    check(err)\n    _, err = fmt.Fprintln(file, signature)\n    check(err)\n    err = file.Close()\n    check(err)\n\n    http.Redirect(writer, request, "/guestbook", http.StatusFound)\n}\n\ntype GuestBook struct {\n    SignatureCount int\n    Signatures     []string\n}\n\nfunc getSignatures(fileName string) []string {\n    var result []string\n\n    file, err := os.Open(fileName)\n    if os.IsNotExist(err) {\n        return nil\n    }\n    check(err)\n    defer file.Close()\n    scanner := bufio.NewScanner(file)\n    for scanner.Scan() {\n        result = append(result, scanner.Text())\n    }\n    check(scanner.Err())\n    return result\n}\n\nfunc check(err error) {\n    if err != nil {\n        log.Fatal(err)\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Guestbook</h1>\n\n<div>\n  {{.SignatureCount}} total signature -\n  <a href="/guestbook/new">Add Your Signature</a>\n</div>\n\n<div>\n  {{range .Signatures}}\n  <p>{{.}}</p>\n  {{end}}\n</div>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>Add a Signature</h1>\n\n<form action="/guestbook/create" method="post">\n  <div><input type="text" name="signature" id="" /></div>\n  <div><input type="submit" /></div>\n</form>\n')))}c.isMDXComponent=!0}}]);