(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5760],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4206:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={},d="Mod Toolkit Overview",p={unversionedId:"getting-started/modtoolkit-overview",id:"getting-started/modtoolkit-overview",isDocsHomePage:!1,title:"Mod Toolkit Overview",description:"Build this project in a few clicks",source:"@site/docs/getting-started/1.modtoolkit-overview.md",sourceDirName:"getting-started",slug:"/getting-started/modtoolkit-overview",permalink:"/community-docs/docs/getting-started/modtoolkit-overview",editUrl:"https://gitlab.com/brothersonline/xlua-battletalent-docs/-/edit/master/website/docs/getting-started/1.modtoolkit-overview.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",next:{title:"Quick Start",permalink:"/community-docs/docs/"}},u=[{value:"Build this project in a few clicks",id:"build-this-project-in-a-few-clicks",children:[]},{value:"Open the sample scene",id:"open-the-sample-scene",children:[]},{value:"Project Folder Structure",id:"project-folder-structure",children:[]},{value:"Mod Importer",id:"mod-importer",children:[]},{value:"PC VR Simulator Shortcut",id:"pc-vr-simulator-shortcut",children:[]},{value:"Log Path",id:"log-path",children:[]}],m={toc:u};function s(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mod-toolkit-overview"},"Mod Toolkit Overview"),(0,l.kt)("h3",{id:"build-this-project-in-a-few-clicks"},"Build this project in a few clicks"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"BuildTools -> BuildAllBundles")," in the toolbar of Unity."),(0,l.kt)("li",{parentName:"ol"},"When the mod has been built it can be found in the ModProj project location at ",(0,l.kt)("inlineCode",{parentName:"li"},"ModProj/Assets/Mods")),(0,l.kt)("li",{parentName:"ol"},"Copy the mod files(mod files are located ) to the corresponding path:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To run on Windows(or click BuildTools -> InstallModOnWindows): ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users[username]\\AppData\\LocalLow\\CyDream\\BattleTalent\\Mods")),(0,l.kt)("li",{parentName:"ul"},"To run on Quest(or click BuildTools -> InstallModOnAndroid): ",(0,l.kt)("inlineCode",{parentName:"li"},"/sdcard/Android/data/com.CyDream.BattleTalent/files/Mods/")))),(0,l.kt)("li",{parentName:"ol"},"Done!")),(0,l.kt)("h3",{id:"open-the-sample-scene"},"Open the sample scene"),(0,l.kt)("p",null,"Once you opened the toolkit with Unity and SampleScene(Assets/Scenes/SampleScene), you will see something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220713105752324",src:a(4566).Z})),(0,l.kt)("h3",{id:"project-folder-structure"},"Project Folder Structure"),(0,l.kt)("p",null,"Let me explain the folder stucture:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1-AddressableAssetsData"),(0,l.kt)("td",{parentName:"tr",align:null},"This is generated by unity, just leave them alone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2-Build"),(0,l.kt)("td",{parentName:"tr",align:null},"It's the object you want to be associate with addressable path, so that you can load them via script or built-in system. such as weapon(prefab), effect, flyobject, audio, icon, config...etc. You should place them in the coorsponding predefined folder, so that we'll handle the addressable path for you automatically. We'll explain addressable path later.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3-Resources"),(0,l.kt)("td",{parentName:"tr",align:null},"We place the resources don't need addressable path here. such as fbx, texture, shader. Because they will be loaded within the prefab, so we don't need to define a addressable path for them. Unity's addressable system will handle this for us.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4-Toolkit"),(0,l.kt)("td",{parentName:"tr",align:null},"It's the toolbox provided by developer, we'll dive in this place later.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5-Inner folder of a mod source files"),(0,l.kt)("td",{parentName:"tr",align:null},"As you can see, we place the object under the coorsponding predefined folder. So that they will be associate with the coorsponding addressable path. Then the script or built-in system can load them correctly.")))),(0,l.kt)("h3",{id:"mod-importer"},"Mod Importer"),(0,l.kt)("p",null,"Mod importer can load and save the mod files you placed in the PCVR mod folder(Tools/OpenPCModFolder). It lets you to visit the inside resources of a mod even you don't have the source file. It's a good way to learn how to mod."),(0,l.kt)("p",null,"To use this tool, is to run the SampleScene. Then you'll see the mods list from PCVR mod folder."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220713200308459",src:a(8245).Z})),(0,l.kt)("p",null,"PS: currently, Mod Importer can not save the mesh(fbx) from mod, because we can't not access the mesh from memory. If anyone knows how to make a mesh readable from addressable at runtime, please let me know."),(0,l.kt)("h3",{id:"pc-vr-simulator-shortcut"},"PC VR Simulator Shortcut"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,l.kt)("th",{parentName:"tr",align:null},"Function at Body Mode"),(0,l.kt)("th",{parentName:"tr",align:null},"Function at Hand Mode"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WASD"),(0,l.kt)("td",{parentName:"tr",align:null},"walk"),(0,l.kt)("td",{parentName:"tr",align:null},"walk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Shift"),(0,l.kt)("td",{parentName:"tr",align:null},"run"),(0,l.kt)("td",{parentName:"tr",align:null},"hand rotation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alt"),(0,l.kt)("td",{parentName:"tr",align:null},"switch to Hand Mode"),(0,l.kt)("td",{parentName:"tr",align:null},"switch to Body Mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tab"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"switch between your hand")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mouse Movement"),(0,l.kt)("td",{parentName:"tr",align:null},"body rotation"),(0,l.kt)("td",{parentName:"tr",align:null},"hand movement")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ctrl"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"hand movement on Z axis")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Shortcut"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F12"),(0,l.kt)("td",{parentName:"tr",align:null},"open or close MainMenu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F11"),(0,l.kt)("td",{parentName:"tr",align:null},"open or close CheatMenu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F10"),(0,l.kt)("td",{parentName:"tr",align:null},"reload mods(not working for now)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F9"),(0,l.kt)("td",{parentName:"tr",align:null},"remove mods(not working for now)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F8"),(0,l.kt)("td",{parentName:"tr",align:null},"jump to test scene")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F4"),(0,l.kt)("td",{parentName:"tr",align:null},"hide mouse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PageDown"),(0,l.kt)("td",{parentName:"tr",align:null},"select next target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"U"),(0,l.kt)("td",{parentName:"tr",align:null},"kill target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"stun target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PadNum"),(0,l.kt)("td",{parentName:"tr",align:null},"target attacks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Home"),(0,l.kt)("td",{parentName:"tr",align:null},"enable target's AI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End"),(0,l.kt)("td",{parentName:"tr",align:null},"disable target's AI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"K"),(0,l.kt)("td",{parentName:"tr",align:null},"kill all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Space"),(0,l.kt)("td",{parentName:"tr",align:null},"jump")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"jump(no cooldown)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V"),(0,l.kt)("td",{parentName:"tr",align:null},"dash(no cooldown)")))),(0,l.kt)("h3",{id:"log-path"},"Log Path"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Log"),(0,l.kt)("th",{parentName:"tr",align:null},"Log Path"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Windows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.unity3d.com/Manual/LogFiles.html"},"https://docs.unity3d.com/Manual/LogFiles.html"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Quest"),(0,l.kt)("td",{parentName:"tr",align:null},"adb command: .\\adb.exe logcat -s Unity -d > .\\quest_log.txt",(0,l.kt)("br",null),(0,l.kt)("br",null),"you can also read it on ",(0,l.kt)("strong",{parentName:"td"},"in-game console")," or using ",(0,l.kt)("strong",{parentName:"td"},"adb log command")," or using ",(0,l.kt)("strong",{parentName:"td"},"sidequest's adb window"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},4566:function(t,e,a){"use strict";e.Z=a.p+"assets/images/image-20220713105752324-6779a9aee8f0f0cdaa6a4b93fcc2d67e.png"},8245:function(t,e,a){"use strict";e.Z=a.p+"assets/images/image-20220713200308459-731b7dd3ea5533528b68c76ba15078cd.png"}}]);