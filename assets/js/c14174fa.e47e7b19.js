(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7207],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7681:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={},c="Damage Pipeline",s={unversionedId:"details/damage-pipeline",id:"details/damage-pipeline",isDocsHomePage:!1,title:"Damage Pipeline",description:"Data Driven Damage Pipeline",source:"@site/docs/details/damage-pipeline.md",sourceDirName:"details",slug:"/details/damage-pipeline",permalink:"/community-docs/docs/details/damage-pipeline",editUrl:"https://github.com/BattleTalent/community-docs/docs/details/damage-pipeline.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Tips",permalink:"/community-docs/docs/LuaScript/Tips"},next:{title:"deadzone-respawntrigger",permalink:"/community-docs/docs/details/deadzone-respawntrigger"}},p=[{value:"Data Driven Damage Pipeline",id:"data-driven-damage-pipeline",children:[]},{value:"Damage Pipeline",id:"damage-pipeline-1",children:[]},{value:"How we register the phase event",id:"how-we-register-the-phase-event",children:[]}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"damage-pipeline"},"Damage Pipeline"),(0,r.kt)("h3",{id:"data-driven-damage-pipeline"},"Data Driven Damage Pipeline"),(0,r.kt)("p",null,"The basic idea is that we divide the damage process into data, you can modify them to change the result. "),(0,r.kt)("p",null,'For example if you want to make a weapon that can knockdown each enemy when hitted their head. All you need to do is to listen to the event from the hitinfo of your weapon, then check if we hit enemy\'s head(DamageBasicData.beHittedMu.muscleName == "Head"), then modify the DamageEffectData.knockout to true.'),(0,r.kt)("h3",{id:"damage-pipeline-1"},"Damage Pipeline"),(0,r.kt)("p",null,"here's the damage pipeline, and we'll inject our code to modify the data though to pipeline to get the result we want"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8616).Z})),(0,r.kt)("h3",{id:"how-we-register-the-phase-event"},"How we register the phase event"),(0,r.kt)("p",null,"for local event, such as for specific hit, you can get the RagdollHitInfo structure, then register the functions below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OnInteractRoleHitPhase1Event // used for hit detetion, built-in function will fill those data here\n\nOnInteractRoleHitPhase2Event // you can modify the damage effect here\n\nOnInteractRoleHitPhase3Event // we can do extra stuff, such as recover hp from attack\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_damage_basic_data.html"},"DamageBasicData")),(0,r.kt)("p",null,"Basic collision data, such as collider, point, normal, rigidbody, impact... You can read the data from here to know what's going on in this hit."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_damage_hit_data.html"},"DamageHitData")),(0,r.kt)("p",null,"Determines the damage calculation, such as you can set the damage larger or smaller."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://battletalent.github.io/BTModToolkit/class_cross_link_1_1_damage_effect_data.html"},"DamageEffectData")),(0,r.kt)("p",null,"Behaviour by this damage, such as knockdown, dizzy, floating... You can set this data to apply different hit effect."))}d.isMDXComponent=!0},8616:function(e,t,n){"use strict";t.Z=n.p+"assets/images/DamagePipeline-806c8329e70693111ac9fb90d091d914.png"}}]);