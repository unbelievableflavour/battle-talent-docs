(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5409],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||l;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4060:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),l=(n(7294),n(3905)),a=["components"],o={title:"Skill - Holdable"},c=void 0,p={unversionedId:"LuaScript/Reference by category/Weapon/Skill/snippet-skill-holdable",id:"LuaScript/Reference by category/Weapon/Skill/snippet-skill-holdable",isDocsHomePage:!1,title:"Skill - Holdable",description:"A skill that will stay activated while holding down the trigger button.",source:"@site/docs/LuaScript/4.Reference by category/7.Weapon/Skill/snippet-skill-holdable.md",sourceDirName:"LuaScript/4.Reference by category/7.Weapon/Skill",slug:"/LuaScript/Reference by category/Weapon/Skill/snippet-skill-holdable",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-holdable",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/7.Weapon/Skill/snippet-skill-holdable.md",version:"current",frontMatter:{title:"Skill - Holdable"},sidebar:"docs",previous:{title:"Skill - Charge",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-charge"},next:{title:"Skill - Instant",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-instant"}},s=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Where do I add this script?",id:"where-do-i-add-this-script",children:[]},{value:"Why is the function not called multiple times when I hold down the trigger?",id:"why-is-the-function-not-called-multiple-times-when-i-hold-down-the-trigger",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A skill that will stay activated while holding down the trigger button."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Remember:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Instant skill")," should be checked in the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component for a skill to be holdable."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:OpenSkill(attach)\n    print("Start skill triggered!")\nend\n\nfunction table:CloseSkill()\n    print("End skill triggered!")\nend\n\nreturn Class(nil,nil,table)\n')),(0,l.kt)("h2",{id:"user-variables"},"User Variables"),(0,l.kt)("p",null,"No user variables"),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"where-do-i-add-this-script"},"Where do I add this script?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OpenSkill")," is a function that can be called when adding a luascript to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component.\n",(0,l.kt)("inlineCode",{parentName:"p"},"CloseSkill")," is a function that can be called when adding a luascript to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."),(0,l.kt)("h3",{id:"why-is-the-function-not-called-multiple-times-when-i-hold-down-the-trigger"},"Why is the function not called multiple times when I hold down the trigger?"),(0,l.kt)("p",null,"Make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"Instant skill")," is ",(0,l.kt)("strong",{parentName:"p"},"CHECKED")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."))}d.isMDXComponent=!0}}]);