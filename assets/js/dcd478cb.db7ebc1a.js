(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4483],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={title:"Scheduler"},s=void 0,p={unversionedId:"snippets/snippet-scheduler",id:"snippets/snippet-scheduler",isDocsHomePage:!1,title:"Scheduler",description:"xLua doesn't have an update function by itself, but we can fake it. The following script can be added to LuaBehaviour or InteractTriggerX to call a function on an interval.",source:"@site/docs/snippets/snippet-scheduler.md",sourceDirName:"snippets",slug:"/snippets/snippet-scheduler",permalink:"/community-docs/docs/snippets/snippet-scheduler",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-scheduler.md",version:"current",frontMatter:{title:"Scheduler"},sidebar:"docs",previous:{title:"RayCast",permalink:"/community-docs/docs/snippets/snippet-ray-casting"},next:{title:"Skill - Charge",permalink:"/community-docs/docs/snippets/snippet-skill-charge"}},c=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]},{value:"FAQ",id:"faq",children:[{value:"Can I stop the scheduler after a certain time?",id:"can-i-stop-the-scheduler-after-a-certain-time",children:[]},{value:"Can I stop the scheduler from slowing down during slow motion?",id:"can-i-stop-the-scheduler-from-slowing-down-during-slow-motion",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"xLua doesn't have an update function by itself, but we can fake it. The following script can be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"LuaBehaviour")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"InteractTriggerX")," to call a function on an interval."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First initialize some variables for the scheduler:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"self.schedulerId = nil\n\nself.schedulerInterval = 0.3   --Runs every 0.3 seconds.\nself.timeBeforeStarting = 0.2  --Starts after 0.2 seconds\nself.timeBeforeStopping = -1   --Never stops and will run endlessly.\nself.ignoreSlowMotion = false  --Will not slow down when slow motion is activated.\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Then create functions to schedule:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'self.callOnSchedulerInterval = function(sche, t, s)\n    print("Im updating!"); \nend\n\nself.callOnSchedulerStop = function(sche)\n    print("Im stopping now")\nend\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Create the scheduler itself somewhere:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"self.schedulerId = CL.Scheduler.Create({},\n    self.callOnSchedulerInterval,\n    self.schedulerInterval,\n    self.timeBeforeStopping,\n    self.timeBeforeStarting\n):SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)\n:IgnoreTimeScale(self.ignoreSlowMotion)\n:SetOnStop(self.callOnSchedulerStop).actionId\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Important! Don't forget to remove the scheduler or it will continue to run and will drain performance.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"CL.Scheduler.RemoveSchedule(self.schedulerId)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"It is very important")," though that you also call the ",(0,l.kt)("inlineCode",{parentName:"p"},"RemoveSchedule")," function in the ",(0,l.kt)("inlineCode",{parentName:"p"},"OnDestroy")," function so that it stops running when the weapon is destroyed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function table:OnDestroy()\n    if self.schedulerId ~= nil then\n        CL.Scheduler.RemoveSchedule(self.schedulerId)\n    end\n")),(0,l.kt)("h2",{id:"user-variables"},"User Variables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"variable"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"doesnt matter"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.schedulerId"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.schedulerInterval"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.timeBeforeStopping"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.timeBeforeStarting"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.ignoreSlowMotion"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"func"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.callOnSchedulerInterval"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"func"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"self.callOnSchedulerStop"))))),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("h3",{id:"can-i-stop-the-scheduler-after-a-certain-time"},"Can I stop the scheduler after a certain time?"),(0,l.kt)("p",null,"Change the ",(0,l.kt)("inlineCode",{parentName:"p"},"self.timeBeforeStopping")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," to stop it after 10 seconds."),(0,l.kt)("h3",{id:"can-i-stop-the-scheduler-from-slowing-down-during-slow-motion"},"Can I stop the scheduler from slowing down during slow motion?"),(0,l.kt)("p",null,"Change the ",(0,l.kt)("inlineCode",{parentName:"p"},"self.ignoreSlowMotion")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."))}d.isMDXComponent=!0}}]);