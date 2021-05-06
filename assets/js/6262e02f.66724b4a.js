(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[791],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8353:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={sidebar_position:1},c={unversionedId:"api/intro",id:"api/intro",isDocsHomePage:!1,title:"Overview",description:"The Dataview JavaScript API allows for executing arbitrary JavaScript with access to the dataview indices and query",source:"@site/docs/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/obsidian-dataview/docs/api/intro",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Examples",permalink:"/obsidian-dataview/docs/query/examples"},next:{title:"Data Arrays",permalink:"/obsidian-dataview/docs/api/data-array"}},p=[{value:"JavaScript Codeblocks",id:"javascript-codeblocks",children:[]}],s={toc:p};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Dataview JavaScript API allows for executing arbitrary JavaScript with access to the dataview indices and query\nengine, which is good for complex views or interop with other plugins. The API comes in two flavors: plugin facing, and\nuser facing (or 'inline API usage'). The plugin facing flavor is not currently available, so this document will focus on\nthe user facing queries, which is arbitrary JS that can be executed in markdown pages."),(0,i.kt)("h2",{id:"javascript-codeblocks"},"JavaScript Codeblocks"),(0,i.kt)("p",null,"You can create a Dataview JS block via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```dataviewjs\n<code>\n```\n")),(0,i.kt)("p",null,"Code executed in such codeblocks have access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dv")," variable, which provides the entirety of the codeblock-relevant\ndataview API (like ",(0,i.kt)("inlineCode",{parentName:"p"},"dv.table()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dv.pages()"),", and so on). For more information, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/code-reference"},"codeblock API reference"),"."))}l.isMDXComponent=!0}}]);