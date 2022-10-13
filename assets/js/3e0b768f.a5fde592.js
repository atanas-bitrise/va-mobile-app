"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[195],{30279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return g},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=t(87462),i=t(63366),s=(t(67294),t(3905)),o=["components"],r={},g="Staging Instances",c={unversionedId:"Engineering/BackEnd/Testing/StagingInstances",id:"Engineering/BackEnd/Testing/StagingInstances",title:"Staging Instances",description:"API Calls",source:"@site/docs/Engineering/BackEnd/Testing/StagingInstances.md",sourceDirName:"Engineering/BackEnd/Testing",slug:"/Engineering/BackEnd/Testing/StagingInstances",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingInstances",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing the Mobile App on Staging",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingApps"},next:{title:"Carousel",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/CarouselComponents/Carousel"}},l=[{value:"API Calls",id:"api-calls",children:[],level:2},{value:"Console Access",id:"console-access",children:[],level:2}],p={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"staging-instances"},"Staging Instances"),(0,s.kt)("h2",{id:"api-calls"},"API Calls"),(0,s.kt)("p",null,"API calls are made in a similar way to the review instances above. Note that your API client may not connect to staging if going through the SOCKS proxy. The API URL for staging is ",(0,s.kt)("a",{parentName:"p",href:"http://staging-api.va.gov/mobile"},"http://staging-api.va.gov/mobile"),". Staging uses the same ",(0,s.kt)("a",{parentName:"p",href:"/va-mobile-app/docs/Engineering/BackEnd/Testing/ApiTokens#fetching-api-tokens"},"API tokens")," as review instances."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url https://staging-api.va.gov/mobile/v1/user \\\n  --header 'Authorization: Bearer 6qdITmRgDqEmsdGyzNj7' \\\n  --header 'X-Key-Inflection: camel'\n")),(0,s.kt)("h2",{id:"console-access"},"Console Access"),(0,s.kt)("p",null,"To connect to a staging instance, open a terminal locally and enter 'mfa' followed by a code from a 2FA tool such as ",(0,s.kt)("a",{parentName:"p",href:"https://authy.com/"},"Authy"),". Change into the devops repo dir, and run the SSM script with 'staging' as an argument. The script will return a numbered list of available instances."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mfa {2fa code}\nAWS Session credentials saved. Will expire in 12 hours\ncd {path to devops checkout dir}\nsh utilities/ssm.sh vets-api-server staging\nFinding apps for vets-api-server staging\n-e Found the following instances:\nInstance ID        Private Ip    Name\ni-0cb43936846956681    10.247.34.198    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-002a2d845a9bbfb47    10.247.34.238    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-09bf54f2024d20400    10.247.34.61    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0900c0675f349b4b5    10.247.34.15    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0304e9c0fc5d4c4e3    10.247.35.117    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0a9d52a236730155f    10.247.35.40    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\n\nWhat instance do you want to connect to? (input only the number eg: 1, 2, 4)\nType 'q' to exit\n1) -n              5) -n               9) -n\n2) i-0cb43936846956681      6) i-09bf54f2024d20400  10) i-0304e9c0fc5d4c4e3\n3) -n              7) -n              11) -n\n4) i-002a2d845a9bbfb47      8) i-0900c0675f349b4b5  12) i-0a9d52a236730155f\n#?\n")),(0,s.kt)("p",null,"Select an instance by typing its number, e.g. 2. Then change to a super user and run the Docker command to launch the Rails console."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'#? 2\nStarting session to:  i-0cb43936846956681\n\nStarting session with SessionId: First.Last-09fdb960f34e99c93\nsh-4.2$ sudo su\n[root@ip-10-247-34-198 /]# docker exec -it vets-api bundle exec rails c\n{"host":"0fca69c2c0fa","application":"vets-api-server","environment":"production","timestamp":"2021-12-02T16:32:05.979827Z","level":"info","level_index":2,"pid":632,"thread":"65000","name":"Rails","message":"Raven 2.13.0 ready to catch errors"}\n2021-12-02 16:32:08.420676 W [632:65000] SemanticLogger::Appenders -- Ignoring attempt to add a second console appender: SemanticLogger::Appender::File since it would result in duplicate console output.\nLoading production environment (Rails 6.1.4.1)\nirb(main):001:0>\n')),(0,s.kt)("p",null,"You can then create a user session, as in a review instance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"irb(main):001:0> user = IAMSSOeOAuth::SessionManager.new('EESBp0xiLD6p1g86q4g1').find_or_create_user\n")))}d.isMDXComponent=!0}}]);