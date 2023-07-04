(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8281],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=a(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1619:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return p},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),c=["components"],s={title:"BlinkEyesScript"},l=void 0,a={unversionedId:"complete-scripts/script-blink-eyes",id:"complete-scripts/script-blink-eyes",isDocsHomePage:!1,title:"BlinkEyesScript",description:"Make a objects disable and enable at random times.",source:"@site/docs/complete-scripts/script-blink-eyes.md",sourceDirName:"complete-scripts",slug:"/complete-scripts/script-blink-eyes",permalink:"/community-docs/docs/complete-scripts/script-blink-eyes",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/complete-scripts/script-blink-eyes.md",version:"current",frontMatter:{title:"BlinkEyesScript"},sidebar:"docs",previous:{title:"AnimateOnTriggerScript",permalink:"/community-docs/docs/complete-scripts/script-animate-on-trigger"},next:{title:"BowScript",permalink:"/community-docs/docs/complete-scripts/script-bow-script"}},p=[{value:"Code",id:"code",children:[]},{value:"Component",id:"component",children:[]}],u={toc:p};function f(e){var t=e.components,s=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Make a objects disable and enable at random times."),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:Awake()\n    self.eyesAreClosed = false;\n    self.scheId = null;\n\n    self.speed = 1;\n    self.schedulerInterval = 0.2;\n    self.timeBeforeStopping = -1;\n    self.timeBeforeStarting = 0;\n\n    self.timer = 3;\n    self.blinkTime = 0.2;\nend\n\nfunction table:Start()\n    self.scheId = CL.Scheduler.Create({},\n    function(sche, t, s)\n        if (self.eyesAreClosed) then\n            self.eyesAreClosed = false\n            self.openEyes.gameObject:SetActive(true)\n            self.closedEyes.gameObject:SetActive(false)\n            return\n        end\n\n        self.timer = self.timer-0.2\n        if (self.timer > 0) then\n            return  \n        end\n\n        self.eyesAreClosed = true\n        self.openEyes.gameObject:SetActive(false)        \n        self.closedEyes.gameObject:SetActive(true)\n        self.timer = math.random(2, 4)\n    end\n    , self.schedulerInterval, self.timeBeforeStopping, self.timeBeforeStarting)\n    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)\n    :IgnoreTimeScale(true)\n    :SetOnStop(function(sche)\n        print("Prop stops blinking")\n    end).actionId\nend\n\nfunction table:OnDestroy()\n    CL.Scheduler.RemoveSchedule(self.scheId)\nend\n\nreturn Class(nil,nil,table)\n')),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Component",src:n(9409).Z})))}f.isMDXComponent=!0},9409:function(e,t,n){"use strict";t.Z=n.p+"assets/images/script-blink-eyes1-abb92c5b20eeeee50247ff2c6624036f.png"}}]);