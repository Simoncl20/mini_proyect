"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"docs/modules/geometry/Geometry/area_of_rectangle",id:"docs/modules/geometry/Geometry/area_of_rectangle",title:"area_of_rectangle",description:"areaofrectangle(length float) -> float",source:"@site/docs/docs/modules/geometry/Geometry/area_of_rectangle.md",sourceDirName:"docs/modules/geometry/Geometry",slug:"/docs/modules/geometry/Geometry/area_of_rectangle",permalink:"/mini_proyect/docs/modules/geometry/Geometry/area_of_rectangle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Geometry",permalink:"/mini_proyect/docs/modules/geometry/"},next:{title:"area_of_triangle",permalink:"/mini_proyect/docs/modules/geometry/Geometry/area_of_triangle"}},c={},s=[{value:"<code>area_of_rectangle(length: float, width: float) -&gt; float</code>",id:"area_of_rectanglelength-float-width-float---float",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],u={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"area_of_rectanglelength-float-width-float---float"},(0,n.kt)("inlineCode",{parentName:"h2"},"area_of_rectangle(length: float, width: float) -> float")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method calculates the area of a rectangle. It is used to determine the total surface area of a rectangle with given length and width. This method belongs to the class Geometry."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"length")," (",(0,n.kt)("inlineCode",{parentName:"li"},"float"),"): The length of the rectangle."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"width")," (",(0,n.kt)("inlineCode",{parentName:"li"},"float"),"): The width of the rectangle.")),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float"),": The calculated area of the rectangle.")),(0,n.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,n.kt)("p",null,"This method does not throw any exceptions."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Calculate the area of a rectangle with length 5 and width 10\nresult_case1 = area_of_rectangle(5, 10)\nprint(result_case1)\n\n# Calculate the area of a rectangle with length 3.5 and width 2.5\nresult_case2 = area_of_rectangle(3.5, 2.5)\nprint(result_case2)\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"The method uses the provided length and width to calculate the area of the rectangle. It multiplies the length and width using a calculator object and returns the result."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Calculator"),": This method depends on the Calculator class from the calculators.calculator module. The Calculator class provides the multiply method used to calculate the area.")))}p.isMDXComponent=!0}}]);