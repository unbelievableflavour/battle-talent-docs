(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6001],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3295:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={},c="Gem of Elemental Gun",u={unversionedId:"tutorials-advanced/gem-of-elementalgun",id:"tutorials-advanced/gem-of-elementalgun",isDocsHomePage:!1,title:"Gem of Elemental Gun",description:'Note: The prefixes used in the tutorial are "WMD\\", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD\\" in the tutorial.',source:"@site/docs/tutorials-advanced/12.gem-of-elementalgun.md",sourceDirName:"tutorials-advanced",slug:"/tutorials-advanced/gem-of-elementalgun",permalink:"/community-docs/docs/tutorials-advanced/gem-of-elementalgun",editUrl:"https://github.com/BattleTalent/community-docs/docs/tutorials-advanced/12.gem-of-elementalgun.md",version:"current",sidebarPosition:12,frontMatter:{},sidebar:"docs",previous:{title:"Avatar Clothing",permalink:"/community-docs/docs/tutorials-advanced/avatar-clothing"},next:{title:"Dungeon merchandise",permalink:"/community-docs/docs/tutorials-advanced/dungeon-merchandise"}},s=[],d={toc:s};function p(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gem-of-elemental-gun"},"Gem of Elemental Gun"),(0,o.kt)("p",null,'Note: The prefixes used in the tutorial are "WMD',"_",'", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD',"_",'" in the tutorial.'),(0,o.kt)("p",null,"Follow the steps below to allow Spell Gems to be placed into Elemental Gun."),(0,o.kt)("p",null,"Here we use Spell_FireBall as an example."),(0,o.kt)("h4",{id:"1setting-up-the-elementbullet"},"1.Setting up the ElementBullet"),(0,o.kt)("p",null,"\u200b\tFirst, we need to make a bullet, save it to ",(0,o.kt)("inlineCode",{parentName:"p"},"Spell_FireBall/FlyObj"),", you can refer to  ",(0,o.kt)("a",{parentName:"p",href:"/community-docs/docs/tutorials-advanced/create-a-gun-mod"},"Create a gun mod")," for how to make a bullet. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ImpactSound",src:n(6363).Z})),(0,o.kt)("p",null,"\u200b\tthen select the spell you want to set up, add a new column in the String List of ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"elementBullet"),", Value Fill in the name of the bullet,here it is WMD_ElementBullet_FireBall."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ImpactSound",src:n(6726).Z})),(0,o.kt)("p",null,"\u200b\tNow Elemental Gun will be able to fire the bullet we made."),(0,o.kt)("h4",{id:"2setting-state-effect-optional"},"2.Setting state effect (Optional)"),(0,o.kt)("p",null,"\u200b\tIf we want to create an Elemental Gun state effect when it is placed on our gem, again we need to make an effect, save it to ",(0,o.kt)("inlineCode",{parentName:"p"},"Spell_FireBall/Effect"),", then we need to add another line to the String List with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"elementStateEffect")," and the Value with the name of the effect we made."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ImpactSound",src:n(9136).Z})))}p.isMDXComponent=!0},6726:function(e,t,n){"use strict";t.Z=n.p+"assets/images/bullet-2f75602c34dbc170a54ed3991d5c81c1.png"},6363:function(e,t,n){"use strict";t.Z=n.p+"assets/images/savebullet-edb6cc8b967fa24cbbae08d0e4a8a64a.png"},9136:function(e,t,n){"use strict";t.Z=n.p+"assets/images/stateeffect-2c51689b2c5de7ef4882ea778d827774.png"}}]);