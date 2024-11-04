(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3386],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=i,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2167:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={title:"UE - Time"},u=void 0,l={unversionedId:"LuaScript/Reference by category/Time/snippet-ue-time",id:"LuaScript/Reference by category/Time/snippet-ue-time",isDocsHomePage:!1,title:"UE - Time",description:"Returns the time at the beginning of this frame.",source:"@site/docs/LuaScript/4.Reference by category/2.Time/snippet-ue-time.md",sourceDirName:"LuaScript/4.Reference by category/2.Time",slug:"/LuaScript/Reference by category/Time/snippet-ue-time",permalink:"/community-docs/docs/LuaScript/Reference by category/Time/snippet-ue-time",editUrl:"https://github.com/BattleTalent/community-docs/docs/LuaScript/4.Reference by category/2.Time/snippet-ue-time.md",version:"current",frontMatter:{title:"UE - Time"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/community-docs/docs/LuaScript/Reference by category/Time/snippet-scheduler"},next:{title:"Update",permalink:"/community-docs/docs/LuaScript/Reference by category/Time/snippet-update"}},p=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"How can I get the time between 2 points in time?",id:"how-can-i-get-the-time-between-2-points-in-time",children:[]}]}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the time at the beginning of this frame."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local currentTime = UE.Time.time\n")),(0,o.kt)("h2",{id:"user-variables"},"User Variables"),(0,o.kt)("p",null,"No user variables."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"how-can-i-get-the-time-between-2-points-in-time"},"How can I get the time between 2 points in time?"),(0,o.kt)("p",null,"Get the time between ",(0,o.kt)("inlineCode",{parentName:"p"},"otherTime")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"currentTime")," simply by doing the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local otherTime = UE.Time.time -- somewhere else in the script ofcourse, else it would return the same time as currentTime.\nlocal currentTime = UE.Time.time\n\nlocal timeBetween = currentTime - otherTime\n")))}s.isMDXComponent=!0}}]);