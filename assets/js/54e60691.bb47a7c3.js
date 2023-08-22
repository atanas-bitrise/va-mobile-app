"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2211],{30767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));r(8209);const o={},a="Record Filtering",l={unversionedId:"Engineering/BackEnd/Architecture/RecordFiltering",id:"Engineering/BackEnd/Architecture/RecordFiltering",title:"Record Filtering",description:"Overview",source:"@site/docs/Engineering/BackEnd/Architecture/RecordFiltering.md",sourceDirName:"Engineering/BackEnd/Architecture",slug:"/Engineering/BackEnd/Architecture/RecordFiltering",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/RecordFiltering",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel Calls",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/ParallelCalls"},next:{title:"Services",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Error Handling",id:"error-handling",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"record-filtering"},"Record Filtering"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The vets-api has a mechanism built into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Common::Collection")," class that's intended to be used to filter lists of records. However, there are a number of problems with this, including the fact that many of the services we use to fetch indexes do not return data in collections and instead just use arrays. Additionally, the filtering mechanism requires changes to the filtered model to enable filtering and to define the type of filtering allowed. There are also some limits to the collection's filtering logic that have prevented this library from meeting our requirements. And since both ",(0,i.kt)("inlineCode",{parentName:"p"},"Common::Collection")," and many of the models we use exist outside of the mobile module, they're not easy for us to change."),(0,i.kt)("p",null,"To address these limitations, we've created our own filtering library that borrows the same param syntax from ",(0,i.kt)("inlineCode",{parentName:"p"},"Common::Collection")," but removes the requirement to make changes to the model. This will allow us to easily apply filters to all of our indexes and make changes to the filtering logic as needed without the risk of impacting other teams."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("p",null,"Adding filtering is a per-endpoint action. After fetching the records, call:\n",(0,i.kt)("inlineCode",{parentName:"p"},"records, errors = ListFilter.matches(records, params[:filter])")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"records")," object passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"ListFilter")," must be an array of either ",(0,i.kt)("inlineCode",{parentName:"p"},"Common::Resource")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Common::Base")," objects. The filter argument must be a controller ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," object. ",(0,i.kt)("inlineCode",{parentName:"p"},"ListFilter")," will always return two objects: the matching records and any errors encountered. See ",(0,i.kt)("a",{parentName:"p",href:"#error-handling"},"error handling")," for details."),(0,i.kt)("p",null,"Any caching should be done on the unfiltered records, not on the results of the filtering. Any pagination should be done on the results of the filtering."),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"The front end must provide filters as query params in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[model_attribute][operation]=value"),'. For example, if your model implements an attribute called "status" and you want to receive only records where the status equals "complete", you would add the param ',(0,i.kt)("inlineCode",{parentName:"p"},"filter[status][eq]=complete"),"."),(0,i.kt)("p",null,"At this time, our filtering system only supports two operations: ",(0,i.kt)("inlineCode",{parentName:"p"},"eq")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"not_eq"),". Attribute/operation pairs can only be used once. In other words, you can't request ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[status][eq]=complete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[status][eq]=pending"),'. This is a limitation in how params are processed by the rails app. We intend to add "one of these values" functionality as well as other operations later.'),(0,i.kt)("p",null,"Filters are additive. In other words, if the request contains ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[status][eq]=complete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"filter[telehealth][not_eq]=true"),", you will receive only records where the status is complete and telehealth is not true."),(0,i.kt)("p",null,"As discussed ",(0,i.kt)("a",{parentName:"p",href:"#error-handling"},"below"),", error behavior can be defined on a per-endpoint or even per-error-case basis."),(0,i.kt)("h2",{id:"error-handling"},"Error Handling"),(0,i.kt)("p",null,"Any errors encountered during the filter process, either due to invalid filters or other causes, will cancel the filtering process. The filter library will return all records as well as the error encountered. What we do with that information can be determined on a per-endpoint basis. It is up to the controller to determine whether to re-raise the error or pass it back to the client in the metadata."),(0,i.kt)("p",null,"This approach was chosen in order to keep our endpoints as stable as possible until we determine that filtering is reliable and error-free. As we develop greater confidence in the filtering and our requirements become clearer, we may later decide to always allow the error to be raised."))}h.isMDXComponent=!0}}]);