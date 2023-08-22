"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[663],{95812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=i(87462),t=(i(67294),i(3905));i(8209);const r={},o="Background Workers and Caching",c={unversionedId:"Engineering/BackEnd/Architecture/BackgroundWorkersAndCaching",id:"Engineering/BackEnd/Architecture/BackgroundWorkersAndCaching",title:"Background Workers and Caching",description:"Background Workers",source:"@site/docs/Engineering/BackEnd/Architecture/BackgroundWorkersAndCaching.md",sourceDirName:"Engineering/BackEnd/Architecture",slug:"/Engineering/BackEnd/Architecture/BackgroundWorkersAndCaching",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/BackgroundWorkersAndCaching",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Back End",permalink:"/va-mobile-app/docs/Engineering/BackEnd/"},next:{title:"Continuous Integration and Deployment",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/ContinuousIntegrationAndDeployment"}},s={},d=[{value:"Background Workers",id:"background-workers",level:2},{value:"Caching",id:"caching",level:2}],u={toc:d},l="wrapper";function g(e){let{components:n,...i}=e;return(0,t.kt)(l,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"background-workers-and-caching"},"Background Workers and Caching"),(0,t.kt)("h2",{id:"background-workers"},"Background Workers"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Vets-api uses Sidekiq for background processing and scheduling."),(0,t.kt)("li",{parentName:"ul"},"Mobile typically uses async jobs for caching, updating user accounts, and logging (to avoid taxing the system on a log that would otherwise be hit too often)"),(0,t.kt)("li",{parentName:"ul"},"Mobile has various jobs that can be found in ",(0,t.kt)("inlineCode",{parentName:"li"},"modules/mobile/app/workers")," directory."),(0,t.kt)("li",{parentName:"ul"},"New job schedules must be initialized in ",(0,t.kt)("inlineCode",{parentName:"li"},"lib/periodic_jobs.rb")," (event-driven async jobs do not need to be set here)"),(0,t.kt)("li",{parentName:"ul"},"When scheduling a new job, try to spread out jobs to run at different times of the day but keep in mind that many upstream services go down for maintenance in the evening and on weekends.")),(0,t.kt)("h2",{id:"caching"},"Caching"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Caching within Mobile is done on a feature by feature basis. Some services used within vets-api do the caching, and in some cases when performance is struggling, Mobile will implement our own caching."),(0,t.kt)("li",{parentName:"ul"},"If caching is implemented within Mobile, add a ",(0,t.kt)("inlineCode",{parentName:"li"},"useCache")," parameter to enable/disable caching. This is useful for debugging issues."),(0,t.kt)("li",{parentName:"ul"},"Cached data within Mobile typically has a Time to Live (TTL) of 30 minutes (session caches are much shorter)"),(0,t.kt)("li",{parentName:"ul"},"Cache TTL can be found in ",(0,t.kt)("inlineCode",{parentName:"li"},"config/redis.yml"))))}g.isMDXComponent=!0}}]);