(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1613],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9018:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"Tips"},s=void 0,u={unversionedId:"getting-started/tutorial-tips",id:"getting-started/tutorial-tips",isDocsHomePage:!1,title:"Tips",description:"Some extra tips for creating BT mods.",source:"@site/docs/getting-started/3-tutorial-tips.md",sourceDirName:"getting-started",slug:"/getting-started/tutorial-tips",permalink:"/community-docs/docs/getting-started/tutorial-tips",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/getting-started/3-tutorial-tips.md",version:"current",sidebarPosition:3,frontMatter:{title:"Tips"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/community-docs/docs/"},next:{title:"Before Releasing",permalink:"/community-docs/docs/getting-started/tutorial-before-releasing"}},d=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Addressable shortcuts",id:"addressable-shortcuts",children:[]},{value:"Static functions",id:"static-functions",children:[]},{value:"Recommended IDE",id:"recommended-ide",children:[]},{value:"Different AttachLine holdPoses",id:"different-attachline-holdposes",children:[]},{value:"When is slicing triggered",id:"when-is-slicing-triggered",children:[]},{value:"Debug Log path for PC users.",id:"debug-log-path-for-pc-users",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some extra tips for creating BT mods."),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"namespace of CSharp code is ",(0,i.kt)("inlineCode",{parentName:"li"},"CS")," in lua"),(0,i.kt)("li",{parentName:"ul"},"namespace CrossLink is ",(0,i.kt)("inlineCode",{parentName:"li"},"CL")," in lua, CL == CS.CrossLink"),(0,i.kt)("li",{parentName:"ul"},"namespace UnityEngine is ",(0,i.kt)("inlineCode",{parentName:"li"},"UE")," in lua, UE == CS.UnityEngine")),(0,i.kt)("h2",{id:"addressable-shortcuts"},"Addressable shortcuts"),(0,i.kt)("p",null,"Shortcuts to be used in the addressable list for adding files to the mod build."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Weapons use ",(0,i.kt)("inlineCode",{parentName:"li"},"Weapon/")),(0,i.kt)("li",{parentName:"ul"},"Icons use ",(0,i.kt)("inlineCode",{parentName:"li"},"ICon/")),(0,i.kt)("li",{parentName:"ul"},"Sounds use  ",(0,i.kt)("inlineCode",{parentName:"li"},"Audio/Sound/")),(0,i.kt)("li",{parentName:"ul"},"Scripts use ",(0,i.kt)("inlineCode",{parentName:"li"},"LuaScript/")),(0,i.kt)("li",{parentName:"ul"},"Effects use ",(0,i.kt)("inlineCode",{parentName:"li"},"Effect/")),(0,i.kt)("li",{parentName:"ul"},"FlyObj use ",(0,i.kt)("inlineCode",{parentName:"li"},"FlyObj/")),(0,i.kt)("li",{parentName:"ul"},"Roles use ",(0,i.kt)("inlineCode",{parentName:"li"},"Role/")),(0,i.kt)("li",{parentName:"ul"},"Skins use ",(0,i.kt)("inlineCode",{parentName:"li"},"Skin/"))),(0,i.kt)("p",null,"Any resource's addressable name in the path above, can be loaded by the system without path included. for example, if an effect's addressable name is Effect/explosion, it can be created by EffectMgr.Instance:PlayEffect(\"explosion\")"),(0,i.kt)("h2",{id:"static-functions"},"Static functions"),(0,i.kt)("p",null,"Calling a static function should use ",(0,i.kt)("inlineCode",{parentName:"p"},".")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},":")," in lua."),(0,i.kt)("h2",{id:"recommended-ide"},"Recommended IDE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recommended IDE to use by Fonzie is ",(0,i.kt)("a",{parentName:"li",href:"https://studio.zerobrane.com/"},"ZeroBrane Studio")," as lua editor")),(0,i.kt)("h2",{id:"different-attachline-holdposes"},"Different AttachLine holdPoses"),(0,i.kt)("p",null,'You can hold objects in different ways by changing the "Hand Pose" parameter on the "AttachLine" prefab. Since the current documentation does not mention all different holdPoses, here is a list of all options.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pose"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DefaultPose"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the default pose. It is also used when NOT holding anything.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HoldPose"),(0,i.kt)("td",{parentName:"tr",align:null},"This pose is for swords, axes, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GunPose"),(0,i.kt)("td",{parentName:"tr",align:null},"This pose is for holding guns.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GlovePose"),(0,i.kt)("td",{parentName:"tr",align:null},"This pose is for spells.")))),(0,i.kt)("h2",{id:"when-is-slicing-triggered"},"When is slicing triggered"),(0,i.kt)("p",null,"Fonzie was kind enough to give us some explanation on when slicing will be triggered."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"slicing will be triggered when using the side part to stab in an enemy who has low hp "),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"to make the stab works with side part ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"the StabDamage of weapon's hitter part should be larger than 100, for example 120 "),(0,i.kt)("li",{parentName:"ol"},"set the sideGeo to >= 0"),(0,i.kt)("li",{parentName:"ol"},"setup the stab area"))),(0,i.kt)("li",{parentName:"ul"},"how to determine an enemy's hp is low? here's the pseudocode.\n",(0,i.kt)("inlineCode",{parentName:"li"},"hpIsLow = ((hp - curDmg) / (hpMax)) < 0.2")))),(0,i.kt)("h2",{id:"debug-log-path-for-pc-users"},"Debug Log path for PC users."),(0,i.kt)("p",null,"Since the PC version doesn't have a log in-game there is another way to find out what's wrong with your mod. All notices and errors will be saved instantly to this file."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<YOUR_USER>\\AppData\\LocalLow\\CrossLink\\BattleTalent\\Player.log")))}c.isMDXComponent=!0}}]);