(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2827],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"Skill - Charge"},c=void 0,p={unversionedId:"LuaScript/Reference by category/Weapon/Skill/snippet-skill-charge",id:"LuaScript/Reference by category/Weapon/Skill/snippet-skill-charge",isDocsHomePage:!1,title:"Skill - Charge",description:"A skill that will activate after holding down the trigger button for a couple of seconds.",source:"@site/docs/LuaScript/4.Reference by category/7.Weapon/Skill/snippet-skill-charge.md",sourceDirName:"LuaScript/4.Reference by category/7.Weapon/Skill",slug:"/LuaScript/Reference by category/Weapon/Skill/snippet-skill-charge",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-charge",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/7.Weapon/Skill/snippet-skill-charge.md",version:"current",frontMatter:{title:"Skill - Charge"},sidebar:"docs",previous:{title:"OnGrab",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Interact/snippet-on-grab"},next:{title:"Skill - Holdable",permalink:"/community-docs/docs/LuaScript/Reference by category/Weapon/Skill/snippet-skill-holdable"}},s=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Where do I add this script?",id:"where-do-i-add-this-script",children:[]},{value:"How do I adjust the charge time?",id:"how-do-i-adjust-the-charge-time",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A skill that will activate after holding down the trigger button for a couple of seconds."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:UpdateSkill()\n    local shootInterval = self.shootInterval or 0.1\n    local st = self.shootTime or 0\n    local ct = UE.Time.time\n    if ct - st < shootInterval then\n        return\n    end\n\n    self:PullTrigger()\nend\n\nfunction table:PullTrigger()\n    print("Instant skill triggered!")\nend\n\nfunction table:OnChargeRelease()\n    print("Charge skill triggered!")\nend\n\nreturn Class(nil,nil,table)\n')),(0,l.kt)("h2",{id:"user-variables"},"User Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"variable"),(0,l.kt)("th",{parentName:"tr",align:null},"optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.shootInterval")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.shootTime")),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"where-do-i-add-this-script"},"Where do I add this script?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UpdateSkill")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"OnChargeRelease")," are functions that can be called when adding a luascript to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."),(0,l.kt)("h3",{id:"how-do-i-adjust-the-charge-time"},"How do I adjust the charge time?"),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"Skill charge End Time")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," component."))}d.isMDXComponent=!0}}]);