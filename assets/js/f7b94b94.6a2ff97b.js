(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8355],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8049:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={title:"Upgrade & vulnerability colors are not showing"},l=void 0,c={unversionedId:"common-issues/upgrade-and-vulnerability-colors-not-showing",id:"common-issues/upgrade-and-vulnerability-colors-not-showing",isDocsHomePage:!1,title:"Upgrade & vulnerability colors are not showing",description:'Upgrade and vulnerability colors will be set by the "skill change colors" property of the "interact trigger" component. But there are some important things to watchout for.',source:"@site/docs/common-issues/upgrade-and-vulnerability-colors-not-showing.md",sourceDirName:"common-issues",slug:"/common-issues/upgrade-and-vulnerability-colors-not-showing",permalink:"/community-docs/docs/common-issues/upgrade-and-vulnerability-colors-not-showing",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/common-issues/upgrade-and-vulnerability-colors-not-showing.md",version:"current",frontMatter:{title:"Upgrade & vulnerability colors are not showing"},sidebar:"docs",previous:{title:"Invalid path in AssetBundleProvider",permalink:"/community-docs/docs/common-issues/invalid-path-in-assetbundleprovider"},next:{title:"Weapon flies through hand on remote grab",permalink:"/community-docs/docs/common-issues/weapon-flies-through-hand-on-remote-grab"}},u=[{value:"Steps to reproduce",id:"steps-to-reproduce",children:[]},{value:"Fix",id:"fix",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Upgrade and vulnerability colors will be set by the "skill change colors" property of the "interact trigger" component. But there are some important things to watchout for.'),(0,i.kt)("h2",{id:"steps-to-reproduce"},"Steps to reproduce"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to map with enemies."),(0,i.kt)("li",{parentName:"ol"},"Spawn your weapon."),(0,i.kt)("li",{parentName:"ol"},"Hit the enemy until you weapon is almost broken."),(0,i.kt)("li",{parentName:"ol"},"See that your weapon does not change color.")),(0,i.kt)("h2",{id:"fix"},"Fix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The added meshes should have a material where emmision is turned on."),(0,i.kt)("li",{parentName:"ul"},"The added meshes should have a material where emmision does not have an emmision map texture."),(0,i.kt)("li",{parentName:"ul"},"The added meshes should have a material where emmision map texture color is set to 1,1,1,0.")))}m.isMDXComponent=!0}}]);