"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[195],{44963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));t(8209);const i={},o="Staging Instances",r={unversionedId:"Engineering/BackEnd/Testing/StagingInstances",id:"Engineering/BackEnd/Testing/StagingInstances",title:"Staging Instances",description:"API Calls",source:"@site/docs/Engineering/BackEnd/Testing/StagingInstances.md",sourceDirName:"Engineering/BackEnd/Testing",slug:"/Engineering/BackEnd/Testing/StagingInstances",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingInstances",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing the Mobile App on Staging",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingApps"},next:{title:"Front End",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/"}},c={},l=[{value:"API Calls",id:"api-calls",level:2},{value:"Console Access",id:"console-access",level:2},{value:"User Sign In",id:"user-sign-in",level:3}],g={toc:l},p="wrapper";function u(e){let{components:n,...i}=e;return(0,s.kt)(p,(0,a.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"staging-instances"},"Staging Instances"),(0,s.kt)("h2",{id:"api-calls"},"API Calls"),(0,s.kt)("p",null,"API calls are made in a similar way to the review instances above. Note that your API client may not connect to staging if going through the SOCKS proxy. The API URL for staging is ",(0,s.kt)("a",{parentName:"p",href:"http://staging-api.va.gov/mobile"},"http://staging-api.va.gov/mobile"),". Staging uses the same ",(0,s.kt)("a",{parentName:"p",href:"/va-mobile-app/docs/Engineering/BackEnd/Testing/ApiTokens#fetching-api-tokens"},"API tokens")," as review instances."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url https://staging-api.va.gov/mobile/v1/user \\\n  --header 'Authorization: Bearer 6qdITmRgDqEmsdGyzNj7' \\\n  --header 'X-Key-Inflection: camel'\n")),(0,s.kt)("h2",{id:"console-access"},"Console Access"),(0,s.kt)("p",null,"To connect to a staging instance, first ensure you have ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Cplatform-tech-team-support%2Cops-access-request&projects=&template=vetsapi-argo-terminal-access.yaml&title=Vets-api+terminal+access+for+%5Bindividual%5D"},"requested access to EKS"),"."),(0,s.kt)("p",null,"After you have access, you can see the staging pods through the ",(0,s.kt)("a",{parentName:"p",href:"https://argocd.vfs.va.gov/applications/vets-api-staging?resource="},"web"),". After signing in with your account and visiting the link, you will see several things"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(24697).Z,width:"2840",height:"1824"})),(0,s.kt)("p",null,"At the top, you'll see the last time the pods were synced to HEAD. On the right, you'll see a long list of pods running the staging site. Click on one that has ",(0,s.kt)("inlineCode",{parentName:"p"},"vets-api-web")," in the name."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(14295).Z,width:"2841",height:"1815"})),(0,s.kt)("p",null,'You\'ll see "TERMINAL" as a tab. From here, you have access to the console. You can run any commands you would in a local terminal here. For instance, run ',(0,s.kt)("inlineCode",{parentName:"p"},"bundle exec rails c")," if you'd like to run a rails console."),(0,s.kt)("h3",{id:"user-sign-in"},"User Sign In"),(0,s.kt)("p",null,"You can then fetch an ",(0,s.kt)("a",{parentName:"p",href:"/va-mobile-app/docs/Engineering/BackEnd/Testing/ApiTokens#fetching-api-tokens"},"api token")," and use that token to create either an IAM user session (deprecated):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"irb(main):001:0> user = IAMSSOeOAuth::SessionManager.new('EESBp0xiLD6p1g86q4g1').find_or_create_user\n")),(0,s.kt)("p",null,"or an SIS user session:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"irb(main):001:0> token = SignIn::AccessTokenJwtDecoder.new(access_token_jwt: 'crazylongsistoken').perform(with_validation: true)\nirb(main):001:0> user = User.find(token.user_uuid)\n")),(0,s.kt)("p",null,"If the user comes back as nil, this means it's not in redis due to inactivity. If that happens, make any API request for the user and try again. The API request will load the user into redis as part of the authentication process."))}u.isMDXComponent=!0},24697:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/eks-staging-dfc0542591c2013258bd112a4b603c66.png"},14295:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/eks-terminal-82f78780794c7c164301f6274273364d.png"}}]);