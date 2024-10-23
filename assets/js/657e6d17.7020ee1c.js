"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5266],{25725:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));t(41873);const r={title:"Accessibility Information"},o="Accessibility Information",l={unversionedId:"Engineering/FrontEnd/AccessibilityInformation",id:"Engineering/FrontEnd/AccessibilityInformation",title:"Accessibility Information",description:"This page describes the nuances of accessibility(a11y) for front end development.",source:"@site/docs/Engineering/FrontEnd/AccessibilityInformation.md",sourceDirName:"Engineering/FrontEnd",slug:"/Engineering/FrontEnd/AccessibilityInformation",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/AccessibilityInformation",draft:!1,tags:[],version:"current",frontMatter:{title:"Accessibility Information"},sidebar:"tutorialSidebar",previous:{title:"Front End",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/"},next:{title:"useAccessibilityFocus",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useAccessibilityFocus"}},s={},c=[{value:"IOS",id:"ios",level:2},{value:"VoiceOver(Screen Reader)",id:"voiceoverscreen-reader",level:3},{value:"Voice Control(Voice Navigation)",id:"voice-controlvoice-navigation",level:3},{value:"Wireless Keyboard",id:"wireless-keyboard",level:3},{value:"Accessibility Inspector(Simulator Only)",id:"accessibility-inspectorsimulator-only",level:3},{value:"Android",id:"android",level:2},{value:"TalkBack(Screen Reader)",id:"talkbackscreen-reader",level:3},{value:"Voice Access(Voice Navigation)",id:"voice-accessvoice-navigation",level:3},{value:"Wireless Keyboard",id:"wireless-keyboard-1",level:3},{value:"Screen Reader Pronunciations",id:"screen-reader-pronunciations",level:2},{value:"Touch Targets",id:"touch-targets",level:2},{value:"React Native Support",id:"react-native-support",level:2},{value:"Accessibility with Integration Tests",id:"accessibility-with-integration-tests",level:3},{value:"Notable Quirks",id:"notable-quirks",level:2},{value:"React Navigation and Wireless Keyboard",id:"react-navigation-and-wireless-keyboard",level:3},{value:"Copy and Paste and how it affects Accessibility",id:"copy-and-paste-and-how-it-affects-accessibility",level:3}],p={toc:c},y="wrapper";function d(e){let{components:i,...r}=e;return(0,n.yg)(y,(0,a.A)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"accessibility-information"},"Accessibility Information"),(0,n.yg)("p",null,"This page describes the nuances of accessibility(a11y) for front end development."),(0,n.yg)("h2",{id:"ios"},"IOS"),(0,n.yg)("p",null,"IOS has a handful of ways to test a11y. Here are tools we can use to verify a11y on a real IOS device."),(0,n.yg)("h3",{id:"voiceoverscreen-reader"},"VoiceOver(Screen Reader)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enable VoiceOver via ",(0,n.yg)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Accessibility")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"VoiceOver")," -> toggle on"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"AccessibilityHints")," are not turned on by default. To turn on ",(0,n.yg)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Accessibility")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Verbosity")," -> toggle on ",(0,n.yg)("inlineCode",{parentName:"li"},"Speak Hints")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios"},"Gestures for traversing"))),(0,n.yg)("h3",{id:"voice-controlvoice-navigation"},"Voice Control(Voice Navigation)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enable Voice Control via ",(0,n.yg)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Accessibility")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Voice Control")," -> toggle on"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://support.apple.com/guide/iphone/voice-control-iph2c21a3c88/ios"},"Voice Commands"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Show names")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Tap <name>")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Show numbers")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Tap <number>"))))),(0,n.yg)("h3",{id:"wireless-keyboard"},"Wireless Keyboard"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use right and left arrows to traverse (tab is not supported)"),(0,n.yg)("li",{parentName:"ul"},"Hit up and down at the same time to activate an item")),(0,n.yg)("h3",{id:"accessibility-inspectorsimulator-only"},"Accessibility Inspector(Simulator Only)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Open ",(0,n.yg)("inlineCode",{parentName:"p"},"Xcode")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Play")," to start simulator -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Xcode Menu Item")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Open Developer Tool")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Accessibility Inspector")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Accessibility Inspector",src:t(64721).A,width:"1944",height:"2308"})))),(0,n.yg)("h2",{id:"android"},"Android"),(0,n.yg)("p",null,"Like IOS, Android provides tools to help verify a11y. A real device is needed to test a11y on Android. "),(0,n.yg)("h3",{id:"talkbackscreen-reader"},"TalkBack(Screen Reader)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enable Talkback via ",(0,n.yg)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Accessibility")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"TalkBack")," -> toggle on",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Swipe right or left to move between items"),(0,n.yg)("li",{parentName:"ul"},"Double-tap to activate an item"),(0,n.yg)("li",{parentName:"ul"},"Drag 2 fingers to scroll")))),(0,n.yg)("h3",{id:"voice-accessvoice-navigation"},"Voice Access(Voice Navigation)"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Download/Install Voice Access from the ",(0,n.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.voiceaccess&hl=en_US&gl=US"},"Google Play Store"),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"Settings")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Accessibility")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Voice Access")," -> toggle on"),(0,n.yg)("li",{parentName:"ol"},"Start Voice Access by swiping down from the top of your phone and ",(0,n.yg)("inlineCode",{parentName:"li"},"tap to start")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://support.google.com/accessibility/android/answer/6151854?hl=en#zippy=%2Cbasics-navigation"},"Voice Commands"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Show numbers")," -> ",(0,n.yg)("inlineCode",{parentName:"li"},"Tap <number>"))))),(0,n.yg)("h3",{id:"wireless-keyboard-1"},"Wireless Keyboard"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Use tab key to traverse"),(0,n.yg)("li",{parentName:"ul"},"Hit enter to activate an item"),(0,n.yg)("li",{parentName:"ul"},"See ",(0,n.yg)("a",{parentName:"li",href:"#react-navigation-and-wireless-keyboard"},"React Navigation and Wireless Keyboard"))),(0,n.yg)("h2",{id:"screen-reader-pronunciations"},"Screen Reader Pronunciations"),(0,n.yg)("p",null,'Some screen readers(ex. Samsung phones) will not always pronounce words like "VA" correctly - will sometimes read it as "VAAH" instead of "VA".'),(0,n.yg)("p",null,"To get round this, add in the unicode ",(0,n.yg)("inlineCode",{parentName:"p"},"\\ufeff")," in between letters(ex. ",(0,n.yg)("inlineCode",{parentName:"p"},"VA")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"V\\ufeffA"),") for your translations. Text is unchanged from the users pov and the screen reader will pronounce the word correctly."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Vaah",src:t(17181).A,width:"648",height:"818"})),(0,n.yg)("h2",{id:"touch-targets"},"Touch Targets"),(0,n.yg)("p",null,"Most common components will have it setup so that the text or wrapper will use ",(0,n.yg)("inlineCode",{parentName:"p"},"theme.dimensions.touchableMinHeight")," so pressable elements have a minimum of ",(0,n.yg)("inlineCode",{parentName:"p"},"44")," height. We can add additional height without changing the font/styles by adding additional padding where it is needed. "),(0,n.yg)("p",null,"Work with QA or design if the default minimum height for touchable targets should be bigger. You can visually view the touch target size by going to ",(0,n.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/debugging"},"debug menu")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Show Inspector")," -> Toggle on ",(0,n.yg)("inlineCode",{parentName:"p"},"Touchable")," -> select the element"),(0,n.yg)("p",null,"  ",(0,n.yg)("img",{alt:"Touch Target Example",src:t(80356).A,width:"1878",height:"2030"})),(0,n.yg)("h2",{id:"react-native-support"},"React Native Support"),(0,n.yg)("p",null,"React Native has a variety of properties that can be set to support ",(0,n.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/accessibility"},"a11y"),". Most common components will already support the a11y properties listed in the link."),(0,n.yg)("h3",{id:"accessibility-with-integration-tests"},"Accessibility with Integration Tests"),(0,n.yg)("p",null,"We originally used the following functions to set a11y properties to better support integration test since without them we were unable to query for certain elements on the screen."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"testIdProps"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"for accessibilityLabels(when the literal text needs to sound different for TalkBack or VoiceOver)."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"a11yHintProp"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'for accessibilityHints(additional text read by TalkBack or VoiceOver ex. Button that opens a link outside the app -> "This page will open in your device\'s browser").'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"a11yValueProp"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},'for accessibilityValue(additional text read by TalkBack or VoiceOver ex. The first item in a list of items -> "Item 1, 1 of 10").')))),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note ",(0,n.yg)("inlineCode",{parentName:"em"},"AccessibilityState")," can be used as normal without a special function"),"."),(0,n.yg)("h2",{id:"notable-quirks"},"Notable Quirks"),(0,n.yg)("h3",{id:"react-navigation-and-wireless-keyboard"},"React Navigation and Wireless Keyboard"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note"),": There have been noticeable ",(0,n.yg)("a",{parentName:"p",href:"https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2214"},"issues using wireless keyboard with react navigation"),"."),(0,n.yg)("h3",{id:"copy-and-paste-and-how-it-affects-accessibility"},"Copy and Paste and how it affects Accessibility"),(0,n.yg)("p",null,"We can make text-only elements(ex. TextView) have the ability to copy and paste by adding ",(0,n.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#selectable"},"selectable")," to its property."),(0,n.yg)("p",null,"We limit the areas(ex. Secure Messaging) where we want to do this because any ",(0,n.yg)("inlineCode",{parentName:"p"},"selectable")," element gets read as pressable from voice navigation apps like Voice Access and Voice Control. ",(0,n.yg)("a",{parentName:"p",href:"https://app.zenhub.com/workspaces/va-mobile-frontendqa-60f1a34998bc75000f2a489f/issues/department-of-veterans-affairs/va-mobile-app/2233"},"View related ticket"),"."))}d.isMDXComponent=!0},15680:(e,i,t)=>{t.d(i,{xA:()=>p,yg:()=>u});var a=t(96540);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var i=a.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},p=function(e){var i=c(e.components);return a.createElement(s.Provider,{value:i},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},g=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(t),g=n,u=y["".concat(s,".").concat(g)]||y[g]||d[g]||r;return t?a.createElement(u,o(o({ref:i},p),{},{components:t})):a.createElement(u,o({ref:i},p))}));function u(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},64721:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/a11y-inspector-31a86197d8e6778014427747310d75a9.png"},80356:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/touch-target-659472950f37c403d58f09d07eaaaa41.png"},17181:(e,i,t)=>{t.d(i,{A:()=>a});const a=t.p+"assets/images/vaah-f1de1d5836cae944b06d11b2aab6c877.png"},41873:(e,i,t)=>{t(96540)}}]);