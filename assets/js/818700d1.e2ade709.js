(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4130],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),c=(n(7294),n(3905)),o=["components"],i={title:"IncreasedDamageScript"},l=void 0,s={unversionedId:"complete-scripts/script-increased-damage",id:"complete-scripts/script-increased-damage",isDocsHomePage:!1,title:"IncreasedDamageScript",description:"Increased melee damage when holding down the trigger.",source:"@site/docs/complete-scripts/script-increased-damage.md",sourceDirName:"complete-scripts",slug:"/complete-scripts/script-increased-damage",permalink:"/community-docs/docs/complete-scripts/script-increased-damage",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/complete-scripts/script-increased-damage.md",version:"current",frontMatter:{title:"IncreasedDamageScript"},sidebar:"docs",previous:{title:"GunScript",permalink:"/community-docs/docs/complete-scripts/script-gun-script"},next:{title:"LaserSightScript",permalink:"/community-docs/docs/complete-scripts/script-laser-sight-script"}},p=[{value:"Code",id:"code",children:[]},{value:"Component",id:"component",children:[]}],u={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Increased melee damage when holding down the trigger."),(0,c.kt)("h2",{id:"code"},"Code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"local table = {\n    damage = 300,\n}\n\nfunction table:Awake()\n    self.fallbackDamage = self.ragdollHitInfo.hitInfo.damageMlp;\nend\n\nfunction table:OpenSkill(attach)\n    self.ragdollHitInfo.hitInfo.damageMlp = self.damage;\nend\n\nfunction table:CloseSkill()\n    self.ragdollHitInfo.hitInfo.damageMlp = self.fallbackDamage;\nend\n\nreturn Class(nil,nil,table)\n")),(0,c.kt)("h2",{id:"component"},"Component"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Component",src:n(1586).Z})))}d.isMDXComponent=!0},1586:function(e,t,n){"use strict";t.Z=n.p+"assets/images/script-increased-damage1-4a8b3d6104cae73eb1e4701ee673a8bf.png"}}]);