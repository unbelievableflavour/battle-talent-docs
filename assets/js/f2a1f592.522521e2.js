(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8999],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),l=["components"],i={},a="Scheduler - Timer",s={unversionedId:"details/scheduler",id:"details/scheduler",isDocsHomePage:!1,title:"Scheduler - Timer",description:"Scheduler is a script used to define when your code being executed.",source:"@site/docs/details/scheduler.md",sourceDirName:"details",slug:"/details/scheduler",permalink:"/community-docs/docs/details/scheduler",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/details/scheduler.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Role, Waves and Weapon code names",permalink:"/community-docs/docs/details/role-and-weapon"},next:{title:"InteractTrigger - Skill System",permalink:"/community-docs/docs/details/skill-system"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"scheduler---timer"},"Scheduler - Timer"),(0,c.kt)("p",null,"Scheduler is a script used to define when your code being executed."),(0,c.kt)("p",null,"For example: you can call a function every 0.1 second for 1 second and delay 0.2 second"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'local interval = 0.1\nlocal timeBeforeStopping = 1\nlocal delay = 0.2\n\nself.scheId = CL.Scheduler.Create(self,\nfunction(sche, t, s)\n    print("im updating!"); \nend\n, interval, timeBeforeStopping, delay)\n:SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)\n:IgnoreTimeScale(true)\n:SetOnStop(function(sche)\n    print("Im stopping now")\nend).actionId\n\n-- if you want to stop this scheduler\n-- CL.Scheduler.RemoveScheduler(self.scheId)\n')),(0,c.kt)("p",null,"Trick 1: call a function next frame"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'CL.Scheduler.Create(self,\nfunction(sche, t, s)\n    print("im executing next frame!"); \nend)\n')),(0,c.kt)("p",null,"Trick 2: lerp a value(you can even use this with Curve)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"CL.Scheduler.Create(self,\nfunction(sche, t, s)\n    local progress = t/s\n    local lerpedVec = UE.Vector3.Lerp(fromVector, toVector, progress)\n    print(lerpedVec)\nend, 0, 1)\n")),(0,c.kt)("p",null,"Trick 3: stop inside the function"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"CL.Scheduler.Create(self,\nfunction(sche, t, s)\n    local progress = t/s\n    if progress > 0.5 then\n        sche:Stop()\n    end\nend, 0, 1)\n")))}d.isMDXComponent=!0}}]);