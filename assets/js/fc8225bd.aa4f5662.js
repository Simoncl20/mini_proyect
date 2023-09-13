"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"docs/modules/finance_module/Finance/future_value",id:"docs/modules/finance_module/Finance/future_value",title:"future_value",description:"futurevalue(presentvalue float, time: int) -> float",source:"@site/docs/docs/modules/finance_module/Finance/future_value.md",sourceDirName:"docs/modules/finance_module/Finance",slug:"/docs/modules/finance_module/Finance/future_value",permalink:"/mini_proyect/docs/modules/finance_module/Finance/future_value",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"compound_interest",permalink:"/mini_proyect/docs/modules/finance_module/Finance/compound_interest"},next:{title:"present_value",permalink:"/mini_proyect/docs/modules/finance_module/Finance/present_value"}},u={},s=[{value:"<code>future_value(present_value: float, rate: float, time: int) -&gt; float</code>",id:"future_valuepresent_value-float-rate-float-time-int---float",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"future_valuepresent_value-float-rate-float-time-int---float"},(0,a.kt)("inlineCode",{parentName:"h2"},"future_value(present_value: float, rate: float, time: int) -> float")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method calculates the future value of an investment. It belongs to the class 'Finance'."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"present_value")," (",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"): The present value of the investment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rate")," (",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"): The rate of interest per period."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time")," (",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"): The number of periods.")),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"float"),": The future value of the investment.")),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nfinance = Finance()\nresult_case1 = finance.future_value(1000, 5, 10)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = finance.future_value(500, 3, 5)\nprint(result_case2)\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The method calculates the future value of an investment by multiplying the present value with the result of raising the sum of 1 and the rate divided by 100 to the power of the number of periods."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Calculator"),": This method depends on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Calculator")," class from the ",(0,a.kt)("inlineCode",{parentName:"li"},"calculators.calculator")," module. The ",(0,a.kt)("inlineCode",{parentName:"li"},"Calculator")," class provides mathematical operations such as addition, division, and power.")))}d.isMDXComponent=!0}}]);