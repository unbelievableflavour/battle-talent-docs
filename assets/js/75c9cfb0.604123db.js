(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2801],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),y=l,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),l=n(9756),i=(n(7294),n(3905)),a=["components"],o={},s="Physics in Unity",c={unversionedId:"details/unity-physics",id:"details/unity-physics",isDocsHomePage:!1,title:"Physics in Unity",description:"Collision message deliver rule",source:"@site/docs/details/unity-physics.md",sourceDirName:"details",slug:"/details/unity-physics",permalink:"/community-docs/docs/details/unity-physics",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/details/unity-physics.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Unity Addressable and Predefined Path",permalink:"/community-docs/docs/details/unity-addressable"},next:{title:"Add HP to player",permalink:"/community-docs/docs/snippets/snippet-add-hp"}},u=[{value:"Collision message deliver rule",id:"collision-message-deliver-rule",children:[]},{value:"Collision layer rule",id:"collision-layer-rule",children:[]},{value:"Convexing colliders",id:"convexing-colliders",children:[]}],d={toc:u};function p(e){var t=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"physics-in-unity"},"Physics in Unity"),(0,i.kt)("h3",{id:"collision-message-deliver-rule"},"Collision message deliver rule"),(0,i.kt)("p",null,"In Unity, collision message(such as OnCollisionEnter) will always deliver to the closest parents(including itself) with Rigidbody component. Which means if you have a child object with Collider under a parent with Rigidbody, then the child's collision message will deliver to the parent."),(0,i.kt)("h3",{id:"collision-layer-rule"},"Collision layer rule"),(0,i.kt)("p",null,"In Unity, object in different layer may or may not be able to colliding each other. The collision relationship between them are mainly controlled by the ",(0,i.kt)("strong",{parentName:"p"},"Physics Layer Table"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220713193614902",src:n(2041).Z})),(0,i.kt)("p",null,"But you don't need to remember this at all. In Battle Talent, we predefined some layers associate with specific objects, just follow these rules and you will be fine."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"layer name"),(0,i.kt)("th",{parentName:"tr",align:null},"physics object associated"),(0,i.kt)("th",{parentName:"tr",align:null},"Layer"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BodyMask"),(0,i.kt)("td",{parentName:"tr",align:null},"Npc&Player's Bodypart"),(0,i.kt)("td",{parentName:"tr",align:null},"Ragdoll")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EnvLayerMask"),(0,i.kt)("td",{parentName:"tr",align:null},"Environment"),(0,i.kt)("td",{parentName:"tr",align:null},"CharacterObstacle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"InteractLayerMask"),(0,i.kt)("td",{parentName:"tr",align:null},"Weapon, Item, Part of BodyPart"),(0,i.kt)("td",{parentName:"tr",align:null},"Interact")))),(0,i.kt)("p",null,"To access these mask in code, please check this: ",(0,i.kt)("a",{parentName:"p",href:"http://jjyy.guru/BTModToolkit/class_cross_link_1_1_layer_define.html"},"http://jjyy.guru/BTModToolkit/class_cross_link_1_1_layer_define.html")),(0,i.kt)("h3",{id:"convexing-colliders"},"Convexing colliders"),(0,i.kt)("p",null,"If you want convex collider, please divide it into multiple small concave colliders."),(0,i.kt)("p",null,"There is different ways to cut up your models:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Battle Talent, we're using Collider Creator in the unity asset store."),(0,i.kt)("li",{parentName:"ul"},"It's also possible to manually cut the mesh in small pieces using Blender.")))}p.isMDXComponent=!0},2041:function(e,t,n){"use strict";t.Z=n.p+"assets/images/image-20220713193614902-946f5a196c77cd07610cf4f89beb6740.png"}}]);