(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6535],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),a=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=a(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=a(t),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return t?o.createElement(m,c(c({ref:n},d),{},{components:t})):o.createElement(m,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var a=2;a<i;a++)c[a]=t[a];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1305:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return d},default:function(){return p}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),c=["components"],l={title:"CustomCollisionEffectScript"},s=void 0,a={unversionedId:"complete-scripts/script-custom-collision-effect-script",id:"complete-scripts/script-custom-collision-effect-script",isDocsHomePage:!1,title:"CustomCollisionEffectScript",description:"CollisionEffect, but with custom sounds & effects!",source:"@site/docs/complete-scripts/script-custom-collision-effect-script.md",sourceDirName:"complete-scripts",slug:"/complete-scripts/script-custom-collision-effect-script",permalink:"/community-docs/docs/complete-scripts/script-custom-collision-effect-script",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/complete-scripts/script-custom-collision-effect-script.md",version:"current",frontMatter:{title:"CustomCollisionEffectScript"},sidebar:"docs",previous:{title:"BowScript",permalink:"/community-docs/docs/complete-scripts/script-bow-script"},next:{title:"DashOnTriggerScript",permalink:"/community-docs/docs/complete-scripts/script-dash-on-trigger"}},d=[{value:"Code",id:"code",children:[]},{value:"Component",id:"component",children:[]},{value:"FAQ",id:"faq",children:[{value:"What&#39;s the <code>col0</code> variable?",id:"whats-the-col0-variable",children:[]}]}],u={toc:d};function p(e){var n=e.components,l=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CollisionEffect, but with custom sounds & effects!"),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {\n    sqrSpeed = 2,\n}\n\nfunction table:OnColliderEnter(collision)\n    -- return when collision was with self\n\n    local hand = self.interactTrigger.interact:GetPrimaryHand()\n    if hand and collision.gameObject.transform.root == hand.character.trans.root then\n        return\n    end\n\n    local pu = CL.PhysicsUnit.GetPhysicsUnitTopDown(collision.collider)\n    if pu ~= nil and pu.unitType == CL.Tagger.Tag.PlayerRole then\n        return\n    end\n\n    -- return when collision was slow\n\n    if collision.relativeVelocity.sqrMagnitude < self.sqrSpeed then\n        return\n    end\n    \n    -- return when collider wasnt in list\n\n    local ct = collision:GetContact(0)\n    local colliderIsInList = false\n    local collider_index = 0\n    while self["col" .. collider_index] do\n        if self["col" .. collider_index] == ct.thisCollider then\n            colliderIsInList = true\n            break\n        end\n        collider_index = collider_index + 1\n    end\n    if not colliderIsInList then\n        return\n    end\n\n    -- collide!\n\n    local pos = collision.collider:ClosestPoint(ct.point)\n    pos.y = pos.y + 0.05\n\n    if self.effectName then\n        CL.EffectMgr.Instance:PlayEffect(self.effectName, pos, UE.Quaternion.identity)\n    end\n\n    local soundNames = {}   \n    local sound_index = 0\n    while self["soundName" .. sound_index] do\n        soundNames[sound_index] = self["soundName" .. sound_index]\n        sound_index = sound_index + 1\n    end\n\n    if soundNames[0] then\n        local volume = 0.5\n        local randomPitch = (math.random() + math.random(70, 130)) / 100\n        CL.AudioMgr.Instance:PlaySoundClip(soundNames, pos, false, volume, randomPitch)\n    end\nend\n\nreturn Class(nil,nil,table)\n')),(0,i.kt)("h2",{id:"component"},"Component"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Component",src:t(50).Z})),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"whats-the-col0-variable"},"What's the ",(0,i.kt)("inlineCode",{parentName:"h3"},"col0")," variable?"),(0,i.kt)("p",null,"You can add variables to this component to add the collision detection. For example; the above component will only be used on the ",(0,i.kt)("inlineCode",{parentName:"p"},"col0")," collider, but you could also add a ",(0,i.kt)("inlineCode",{parentName:"p"},"col1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"col2"),", and so on."))}p.isMDXComponent=!0},50:function(e,n,t){"use strict";n.Z=t.p+"assets/images/script-custom-collision-effect-04bcb65bfa5bc91f2d02835bfe041c44.png"}}]);