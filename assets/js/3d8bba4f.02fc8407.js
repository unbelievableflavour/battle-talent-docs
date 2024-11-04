(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9722],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=i,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(h,a(a({ref:t},s),{},{components:r})):n.createElement(h,a({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7596:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],c={title:"OnTriggerEnter"},l=void 0,p={unversionedId:"LuaScript/Reference by category/Physic/snippet-on-trigger-enter",id:"LuaScript/Reference by category/Physic/snippet-on-trigger-enter",isDocsHomePage:!1,title:"OnTriggerEnter",description:"Do things when an object with a rigidBody and collider enters another collider.",source:"@site/docs/LuaScript/4.Reference by category/4.Physic/snippet-on-trigger-enter.md",sourceDirName:"LuaScript/4.Reference by category/4.Physic",slug:"/LuaScript/Reference by category/Physic/snippet-on-trigger-enter",permalink:"/community-docs/docs/LuaScript/Reference by category/Physic/snippet-on-trigger-enter",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/4.Physic/snippet-on-trigger-enter.md",version:"current",frontMatter:{title:"OnTriggerEnter"},sidebar:"docs",previous:{title:"OnColliderEnter",permalink:"/community-docs/docs/LuaScript/Reference by category/Physic/snippet-on-collider-enter"},next:{title:"RayCast",permalink:"/community-docs/docs/LuaScript/Reference by category/Physic/snippet-ray-casting"}},s=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Where do I add this script?",id:"where-do-i-add-this-script",children:[]},{value:"Any way to see which object collider I entered into?",id:"any-way-to-see-which-object-collider-i-entered-into",children:[]},{value:"Any way to get the gameObject of the collider I entered into?",id:"any-way-to-get-the-gameobject-of-the-collider-i-entered-into",children:[]}]}],d={toc:s};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Do things when an object with a rigidBody and collider ",(0,o.kt)("strong",{parentName:"p"},"enters")," another collider."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:OnTriggerEnter(collider)\n    print("I entered a collider!")\nend\n\nreturn Class(nil,nil,table)\n')),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"where-do-i-add-this-script"},"Where do I add this script?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OnTriggerEnter")," is a function that can be called from all luascripts as long as the object has a ",(0,o.kt)("inlineCode",{parentName:"p"},"rigidBody")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"collider")," that is ",(0,o.kt)("strong",{parentName:"p"},"set")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"OnTrigger"),"."),(0,o.kt)("h3",{id:"any-way-to-see-which-object-collider-i-entered-into"},"Any way to see which object collider I entered into?"),(0,o.kt)("p",null,"Yes, just call ",(0,o.kt)("inlineCode",{parentName:"p"},"print(collider.name)")," to get the name of the object you collided with."),(0,o.kt)("h3",{id:"any-way-to-get-the-gameobject-of-the-collider-i-entered-into"},"Any way to get the gameObject of the collider I entered into?"),(0,o.kt)("p",null,"Yes, just call ",(0,o.kt)("inlineCode",{parentName:"p"},"print(collider.gameObject.name)")," to get the name of the object you collided with."))}u.isMDXComponent=!0}}]);