"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"docs/calculators/calculator/Calculator/sine",id:"docs/calculators/calculator/Calculator/sine",title:"sine",description:"sine(angle_degrees: float) -> float",source:"@site/docs/docs/calculators/calculator/Calculator/sine.md",sourceDirName:"docs/calculators/calculator/Calculator",slug:"/docs/calculators/calculator/Calculator/sine",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/sine",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"remainder",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/remainder"},next:{title:"square_root",permalink:"/mini_proyect/docs/calculators/calculator/Calculator/square_root"}},c={},s=[{value:"<code>sine(angle_degrees: float) -&gt; float</code>",id:"sineangle_degrees-float---float",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sineangle_degrees-float---float"},(0,a.kt)("inlineCode",{parentName:"h2"},"sine(angle_degrees: float) -> float")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method calculates the sine of an angle in degrees. This method belongs to the class ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculator"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"angle_degrees")," (",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"): The angle in degrees for which the sine will be calculated.")),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"float"),": The sine value of the given angle.")),(0,a.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,a.kt)("p",null,"This method does not throw any exceptions."),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to calculate the sine of an angle\ncalculator = Calculator()\nresult_case1 = calculator.sine(45)\nprint(result_case1) # Output: 0.7071067811865475\n\n# Another use case (if applicable)\nresult_case2 = calculator.sine(90)\nprint(result_case2) # Output: 1.0\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The method first converts the angle from degrees to radians using the ",(0,a.kt)("inlineCode",{parentName:"p"},"math.radians()")," function. Then, it calculates the sine of the angle using the ",(0,a.kt)("inlineCode",{parentName:"p"},"math.sin()")," function. The resulting sine value is returned."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"math"),": This module is used to perform mathematical operations.")))}d.isMDXComponent=!0}}]);