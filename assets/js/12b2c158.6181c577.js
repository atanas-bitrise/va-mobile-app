"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[578],{77421:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));n(95657);const r={},o="Feature Flagging",l={unversionedId:"Engineering/BackEnd/Architecture/FeatureFlagging",id:"Engineering/BackEnd/Architecture/FeatureFlagging",title:"Feature Flagging",description:"Flipper",source:"@site/docs/Engineering/BackEnd/Architecture/FeatureFlagging.md",sourceDirName:"Engineering/BackEnd/Architecture",slug:"/Engineering/BackEnd/Architecture/FeatureFlagging",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/FeatureFlagging",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/ErrorHandling"},next:{title:"IAM",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/Iam"}},s=[{value:"Flipper",id:"flipper",children:[],level:2},{value:"Access",id:"access",children:[{value:"Staging",id:"staging",children:[],level:3},{value:"Production",id:"production",children:[],level:3}],level:2},{value:"Toggling Feature Flags",id:"toggling-feature-flags",children:[],level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feature-flagging"},"Feature Flagging"),(0,a.kt)("h2",{id:"flipper"},"Flipper"),(0,a.kt)("p",null,"We use Flipper to manage feature flags. Instructions for use and best practices can be found ",(0,a.kt)("a",{parentName:"p",href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/Feature-toggles.1859780873.html"},"here")),(0,a.kt)("h2",{id:"access"},"Access"),(0,a.kt)("h3",{id:"staging"},"Staging"),(0,a.kt)("p",null,"In order to turn features on and off in staging and in review instances, you will first need to create an id.me account. You can do this by going to ",(0,a.kt)("a",{parentName:"p",href:"https://staging.va.gov"},"staging"),', clicking "sign in", choosing to sign in with id.me, then choosing to sign in using the google integration. Enter your Ad Hoc email address. It will then take you through an identity verification process. This is done on the id.me sandbox environment. DO NOT PROVIDE YOUR REAL SSN OR OTHER SENSITIVE DATA. IT WILL ACCEPT ANY PERSONAL IDENTIFYING INFORMATION.'),(0,a.kt)("p",null,"Once this is done, you will need to add your Ad Hoc email to the flipper section in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/settings.yml"),". You will have flipper access once this file has been deployed to staging."),(0,a.kt)("h3",{id:"production"},"Production"),(0,a.kt)("p",null,"In order to change feature flags in production, you will need a real id.me account. Because you're only allowed to have one id.me account, it is strongly recommended that you sign up using your personal email address. You can create an account at id.me. You can then add other email addresses to your id.me profile. If you've already created a sandbox id.me account with your AdHoc email address, you may experience difficulty linking your AdHoc address to your production account."),(0,a.kt)("p",null,"You will then need to add your production id.me email address to ",(0,a.kt)("inlineCode",{parentName:"p"},"config/settings.yml"),". You will have flipper access once this file has been deployed to production."),(0,a.kt)("h2",{id:"toggling-feature-flags"},"Toggling Feature Flags"),(0,a.kt)("p",null,"Flipper URLS (note the 'api' in the url)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"staging: ",(0,a.kt)("a",{parentName:"li",href:"https://staging-api.va.gov/flipper/features"},"https://staging-api.va.gov/flipper/features")),(0,a.kt)("li",{parentName:"ul"},"production: ",(0,a.kt)("a",{parentName:"li",href:"https://api.va.gov/flipper/features"},"https://api.va.gov/flipper/features"))),(0,a.kt)("p",null,"From there, you can select individual features and turn them on and off for all users, individual users, or even a percentage of random users."))}u.isMDXComponent=!0}}]);