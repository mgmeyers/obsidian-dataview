(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3089:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={sidebar_position:1},o={unversionedId:"query/queries",id:"query/queries",isDocsHomePage:!1,title:"Queries",description:"The dataview query language is a simple, structured, custom query language for quickly creating views on your data. It",source:"@site/docs/query/queries.md",sourceDirName:"query",slug:"/query/queries",permalink:"/obsidian-dataview/docs/query/queries",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Creating Queries",permalink:"/obsidian-dataview/docs/creating-queries"},next:{title:"Expressions",permalink:"/obsidian-dataview/docs/query/expressions"}},s=[{value:"General Format",id:"general-format",children:[]},{value:"Query Types",id:"query-types",children:[{value:"List Queries",id:"list-queries",children:[]},{value:"Table Queries",id:"table-queries",children:[]},{value:"Task Queries",id:"task-queries",children:[]}]},{value:"Data Commands",id:"data-commands",children:[{value:"FROM",id:"from",children:[]},{value:"WHERE",id:"where",children:[]},{value:"SORT",id:"sort",children:[]},{value:"GROUP BY",id:"group-by",children:[]},{value:"FLATTEN",id:"flatten",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The dataview query language is a simple, structured, custom query language for quickly creating views on your data. It\nsupports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fetching pages associated with tags, folders, links, and so on."),(0,i.kt)("li",{parentName:"ul"},"Filtering pages / data by simple operations on fields, like comparison, existence checks, and so on."),(0,i.kt)("li",{parentName:"ul"},"Sorting results based on fields.")),(0,i.kt)("p",null,"The query language supports the following view types, described below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"TABLE"),": The traditional view type; one row per data point, with several columns of field data."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"LIST"),": A list of pages which match the query. You can output a single associated value for each page."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"TASK"),": A list of tasks whose pages match the given query.")),(0,i.kt)("h2",{id:"general-format"},"General Format"),(0,i.kt)("p",null,"The general format for queries is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```dataview\nTABLE|LIST|TASK <field> [AS \"Column Name\"], <field>, ..., <field> FROM <source> (like #tag or \"folder\")\nWHERE <expression> (like 'field = value')\nSORT <expression> [ASC/DESC] (like 'field ASC')\n... other data commands\n```\n")),(0,i.kt)("p",null,"Only the 'select' statement (describing what view and what fields) is required. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," statement is omitted, the\nquery runs automatically over all markdown pages in your vault. If other statements (like ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SORT"),") are\npresent, they are run in the order they are written. Duplicate statements are allowed (multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," statement, for eaxmple)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the different view types, only the first line (the 'select' section, where you specify the view type and fields to\ndisplay) differs. You can apply ",(0,i.kt)("em",{parentName:"li"},"data commands")," like ",(0,i.kt)("em",{parentName:"li"},"WHERE")," and ",(0,i.kt)("em",{parentName:"li"},"SORT")," to any query, and you can select from any\n",(0,i.kt)("a",{parentName:"li",href:"/docs/query/sources"},"source")," using ",(0,i.kt)("em",{parentName:"li"},"FROM"),".")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"expressions"},"expressions")," for context on what expressions are, and ",(0,i.kt)("a",{parentName:"p",href:"sources"},"sources")," for context on what sources are."),(0,i.kt)("h2",{id:"query-types"},"Query Types"),(0,i.kt)("h3",{id:"list-queries"},"List Queries"),(0,i.kt)("p",null,"Lists are the simplest view, and simply render a list of pages (or custom fields) which match the query.\nTo obtain a list of pages matching the query, simply use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIST FROM <source>\n")),(0,i.kt)("p",null,"For example, running ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST FROM #games/moba or #games/crpg")," might show:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"300",height:"150",src:"/static/images/game-list.png"})),(0,i.kt)("p",null,"You can render a single computed value in addition to each matching file, by adding an expression after ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIST <expression> FROM <source>\n")),(0,i.kt)("p",null,"For example, running ",(0,i.kt)("inlineCode",{parentName:"p"},'LIST "File Path: " + file.path FROM "4. Archive"')," might show:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"529",height:"98",src:"/static/images/file-path-list.png"})),(0,i.kt)("h3",{id:"table-queries"},"Table Queries"),(0,i.kt)("p",null,"Tables support tabular views of page data. You construct a table by giving a comma separated list of the YAML frontmatter fields you want to render, as so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TABLE file.day, file.mtime FROM <source>\n")),(0,i.kt)("p",null,"You can choose a heading name to render computed fields by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"AS")," syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TABLE (file.mtime + dur(1 day)) AS next_mtime, ... FROM <source>\n")),(0,i.kt)("p",null,"An example table query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'TABLE time-played AS "Time Played", length as "Length", rating as "Rating" FROM #game\nSORT rating DESC\n')),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/static/images/game.png"})),(0,i.kt)("h3",{id:"task-queries"},"Task Queries"),(0,i.kt)("p",null,"Task views render all tasks whose pages match the given predicate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TASK from <source>\n")),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'TASK FROM "dataview"')," might show:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/static/images/project-task.png"})),(0,i.kt)("h2",{id:"data-commands"},"Data Commands"),(0,i.kt)("p",null,"The different commands that dataview queries can be made up of. Commands are\nexecuted in order, and you can have duplicate commands (so multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),"\nblocks or multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," blocks, for example)."),(0,i.kt)("h3",{id:"from"},"FROM"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," statement determines what pages will initially be collected and passed onto the other commands for further\nfiltering. You can select from any ",(0,i.kt)("a",{parentName:"p",href:"/docs/query/sources"},"source"),", which currently means by folder, by tag, or by incoming/outgoing links."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tags"),": To select from a tag (and all its subtags), use ",(0,i.kt)("inlineCode",{parentName:"li"},"FROM #tag"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Folders"),": To select from a folder (and all its subfolders), use ",(0,i.kt)("inlineCode",{parentName:"li"},'FROM "folder"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Links"),": You can either select links TO a file, or all links FROM a file. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To obtain all pages which link TO ",(0,i.kt)("inlineCode",{parentName:"li"},"[[note]]"),", use ",(0,i.kt)("inlineCode",{parentName:"li"},"FROM [[note]]"),". "),(0,i.kt)("li",{parentName:"ul"},"To obtain all pages which link FROM ",(0,i.kt)("inlineCode",{parentName:"li"},"[[note]]")," (i.e., all the links in that file), use ",(0,i.kt)("inlineCode",{parentName:"li"},"FROM outgoing([[note]])"),".")))),(0,i.kt)("p",null,"You can compose these filters in order to get more advanced sources using ",(0,i.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},'#tag and "folder"')," will return all pages in ",(0,i.kt)("inlineCode",{parentName:"li"},"folder")," and with ",(0,i.kt)("inlineCode",{parentName:"li"},"#tag"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[Food]] or [[Exercise]]")," will give any pages which link to ",(0,i.kt)("inlineCode",{parentName:"li"},"[[Food]]")," OR ",(0,i.kt)("inlineCode",{parentName:"li"},"[[Exercise]]"),".")),(0,i.kt)("h3",{id:"where"},"WHERE"),(0,i.kt)("p",null,"Filter pages on fields. Only pages where the clause evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will be yielded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WHERE <clause>\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain all files which were modified in the last 24 hours:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIST WHERE file.mtime >= date(today) - dur(1 day)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Find all projects which are not marked complete and are more than a month old:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIST FROM #projects\nWHERE !completed AND file.ctime <= date(today) - dur(1 month)\n")),(0,i.kt)("h3",{id:"sort"},"SORT"),(0,i.kt)("p",null,"Sorts all results by one or more fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SORT date [ASCENDING/DESCENDING/ASC/DESC]\n")),(0,i.kt)("p",null,"You can also give multiple fields to sort by. Sorting will be done based on the first field. Then, if a tie occurs, the second field will be used to sort the tied fields. If there is still a tie, the third sort will resolve it, and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SORT field1 [ASCENDING/DESCENDING/ASC/DESC], ..., fieldN [ASC/DESC]\n")),(0,i.kt)("h3",{id:"group-by"},"GROUP BY"),(0,i.kt)("p",null,"Group all results on a field. Yields one row per unique field value, which has 2 properties: one corresponding to the field being grouped on, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"rows")," array field which contains all of the pages that matched."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GROUP BY field\nGROUP BY (computed_field) AS name\n")),(0,i.kt)("p",null,"In order to make working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"rows"),' array easier, Dataview supports field "swizzling". If you want the field ',(0,i.kt)("inlineCode",{parentName:"p"},"test")," from every object in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rows")," array, then ",(0,i.kt)("inlineCode",{parentName:"p"},"rows.test")," will automatically fetch the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," field from every object in ",(0,i.kt)("inlineCode",{parentName:"p"},"rows"),", yielding a new array.\nYou can then apply aggregation operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"sum()")," over the resulting array."),(0,i.kt)("h3",{id:"flatten"},"FLATTEN"),(0,i.kt)("p",null,"Flatten an array in every row, yielding one result row per entry in the array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FLATTEN field\nFLATTEN (computed_field) AS name\n")),(0,i.kt)("p",null,"For example, flatten the ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," field in each literature note to give one row per author:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"table authors from #LiteratureNote\nflatten authors\n")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"574",height:"393",src:"/static/images/flatten-authors.png"})))}u.isMDXComponent=!0}}]);