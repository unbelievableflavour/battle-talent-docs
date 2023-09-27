(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2990],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),u=l,g=f["".concat(a,".").concat(u)]||f[u]||d[u]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8831:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(2122),l=t(9756),o=(t(7294),t(3905)),i=["components"],s={title:"TeleportOnTriggerReleaseScript"},a=void 0,c={unversionedId:"complete-scripts/script-teleport-on-trigger-release",id:"complete-scripts/script-teleport-on-trigger-release",isDocsHomePage:!1,title:"TeleportOnTriggerReleaseScript",description:"1. Hold down the trigger. Throw weapon.",source:"@site/docs/complete-scripts/script-teleport-on-trigger-release.md",sourceDirName:"complete-scripts",slug:"/complete-scripts/script-teleport-on-trigger-release",permalink:"/community-docs/docs/complete-scripts/script-teleport-on-trigger-release",editUrl:"https://github.com/BattleTalent/community-docs/docs/complete-scripts/script-teleport-on-trigger-release.md",version:"current",frontMatter:{title:"TeleportOnTriggerReleaseScript"},sidebar:"docs",previous:{title:"TeleportOnExplodeScript",permalink:"/community-docs/docs/complete-scripts/script-teleport-on-collision"},next:{title:"Base Projects",permalink:"/community-docs/docs/projects/projects-base-projects"}},p=[{value:"Code",id:"code",children:[]},{value:"Component",id:"component",children:[]}],d={toc:p};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Hold down the trigger. Throw weapon."),(0,o.kt)("li",{parentName:"ol"},"Throw weapon."),(0,o.kt)("li",{parentName:"ol"},"Teleports player to location of thrown blade when on releasing the trigger.")),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {}\n\nfunction table:Awake()\n    self.isCurrentlyHolding = false\n    self.scheId = null\n    self.player = CL.InteractCharacter.PlayerInstance\n    local leftHand = self.player.hands[1]\n    local rightHand = self.player.hands[0]\n    self.leftTrigger = leftHand.inputs[CL.VRTKInputButton.ButtonType.Trigger]\n    self.rightTrigger = rightHand.inputs[CL.VRTKInputButton.ButtonType.Trigger]\nend\n\nfunction table:UpdateSkill()\n    local shootInterval = self.shootInterval or 0.1\n    local st = self.shootTime or 0\n    local ct = UE.Time.time\n    if ct - st < shootInterval then\n        return\n    end\n\n    self:PullTrigger()\nend\n\nfunction table:listenForButtonInput()\n    if self.buttonHasBeenPressed then\n        if self.hand == "left" and self.leftTrigger.IsPressed == false then\n            self.buttonHasBeenPressed = false\n            print("stopped listening")\n            self:Teleport()\n            CL.Scheduler.RemoveSchedule(self.scheId)\n            return\n        end\n        if self.hand == "right" and self.rightTrigger.IsPressed == false then       \n            self.buttonHasBeenPressed = false\n            print("stopped listening")\n            self:Teleport()\n            CL.Scheduler.RemoveSchedule(self.scheId)\n            return\n        end\n    end\n\n    if self.isCurrentlyHolding then\n        if self.hand == "left" and self.leftTrigger.IsPressed then\n            self.buttonHasBeenPressed = true\n            return\n        end\n        if self.hand == "right" and self.rightTrigger.IsPressed then        \n            self.buttonHasBeenPressed = true\n            return\n        end\n    end\nend\n\nfunction table:Teleport()\n    if self.isCurrentlyHolding then\n        return\n    end\n\n    if self.effectName then\n        CL.EffectMgr.Instance:PlayEffect(self.effectName, self.trans.position, UE.Quaternion.identity)\n    end\n\n    if self.soundName then\n        local volume = 0.5\n        local randomPitch = (math.random() + math.random(70, 130)) / 100\n        CL.AudioMgr.Instance:PlaySoundClip(self.soundName, self.trans.position, false, volume, randomPitch)\n    end\n\n    self.player:Transport(self.trans.position)\nend\n\nfunction table:OnGrab(a, g)\n    if (g) then\n        self.isCurrentlyHolding = true\n        if(a.attachedHand:GetHandIndex() == 0) then \n            self.hand = "right"\n        else\n            self.hand = "left"\n        end\n    else\n        self.isCurrentlyHolding = false\n    end\nend\n\nfunction table:PullTrigger()\n    print("Instant skill triggered!")\n\n    local schedulerInterval = 0.02\n    local timeBeforeStopping = -1\n    local timeBeforeStarting = 0\n\n    self.scheId = CL.Scheduler.Create({},\n    function(sche, t, s)\n        self:listenForButtonInput()\n    end\n    , schedulerInterval, timeBeforeStopping, timeBeforeStarting)\n    :SetUpdateChannel(CL.Scheduler.UpdateChannel.FixedUpdate)\n    :IgnoreTimeScale(true)\n    :SetOnStop(function(sche)\n        print("Stopping input listener")\n    end).actionId\nend\n\nfunction table:OnDestroy()\n    CL.Scheduler.RemoveSchedule(self.scheId)\nend\n\nreturn Class(nil,nil,table)\n')),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,"Use this script with ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractTriggerX"),". No variables needed."))}f.isMDXComponent=!0}}]);