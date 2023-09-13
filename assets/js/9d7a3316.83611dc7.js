"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),l=(r(7294),r(3905));const n={},o=void 0,i={unversionedId:"docs/calculators/calculator/Calculator/logarithm_base_10",id:"docs/calculators/calculator/Calculator/logarithm_base_10",title:"logarithm_base_10",description:"logarithmbase10(number: float) -> float",source:"@site/docs/docs/calculators/calculator/Calculator/logarithm_base_10.md",sourceDirName:"docs/calculators/calculator/Calculator",slug:"/docs/calculators/calculator/Calculator/logarithm_base_10",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/logarithm_base_10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logarithm",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/logarithm"},next:{title:"logarithm_base_2",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/logarithm_base_2"}},c={},s=[{value:"<code>logarithm_base_10(number: float) -&gt; float</code>",id:"logarithm_base_10number-float---float",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],u={toc:s},m="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"logarithm_base_10number-float---float"},(0,l.kt)("inlineCode",{parentName:"h2"},"logarithm_base_10(number: float) -> float")),(0,l.kt)("h4",{id:"description"},"Description:"),(0,l.kt)("p",null,"This method calculates the base 10 logarithm of a number. This method belongs to the class Calculator."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number")," (",(0,l.kt)("inlineCode",{parentName:"li"},"float"),"): The number for which the base 10 logarithm is to be calculated.")),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"float"),": The base 10 logarithm of the given number.")),(0,l.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"None")),(0,l.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = logarithm_base_10(100)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = logarithm_base_10(1000)\nprint(result_case2)\n")),(0,l.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,l.kt)("p",null,"The method first checks if the given number is less than or equal to 0. If it is, an error message is printed and None is returned. Otherwise, the method uses the math.log10() function to calculate the base 10 logarithm of the number and returns the result."),(0,l.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"math: This method uses the math.log10() function to calculate the base 10 logarithm.")))}p.isMDXComponent=!0}}]);