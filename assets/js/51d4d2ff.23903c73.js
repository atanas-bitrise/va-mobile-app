"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[490],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},53156:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],s={sidebar_position:1,sidebar_label:"Overview"},l="GitHub Actions",u={unversionedId:"Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",id:"Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",title:"GitHub Actions",description:"Overview",source:"@site/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview.md",sourceDirName:"Engineering/DevOps/Automation Code Docs/GitHub Actions",slug:"/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Build automation overview",permalink:"/va-mobile-app/docs/Engineering/DevOps/Overview"},next:{title:"Build and Release Workflows",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/BuildReleaseWorkflows"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Workflows",id:"workflows",children:[],level:2},{value:"Build and Release Workflows",id:"build-and-release-workflows",children:[],level:2},{value:"Code Quality Workflows",id:"code-quality-workflows",children:[],level:2},{value:"Other Workflows",id:"other-workflows",children:[{value:"Code Quality",id:"code-quality",children:[],level:3}],level:2},{value:"Automation Robot",id:"automation-robot",children:[],level:2},{value:"Local Testing",id:"local-testing",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," is used to automate several processes for our project, including build automation, releases, ensuring code quality, and other workflows related to project management. Our workflows can be found on the va-mobile-app repo's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app/actions"},"Actions tab"),"."),(0,i.kt)("h2",{id:"workflows"},"Workflows"),(0,i.kt)("p",null,"Our workflows can curently be categorized into three types: Release and Build workflows, Code Quality workflows, and Other workflows."),(0,i.kt)("h2",{id:"build-and-release-workflows"},"Build and Release Workflows"),(0,i.kt)("p",null,"We ",(0,i.kt)("a",{parentName:"p",href:"/docs/Operations/Releases/release-process"},"release")," a new version of the app to app stores every 2 weeks. The process of building, packaging, uploading the app, updating screenshots and release notes manually can be very time consuming.  We use a combination of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," and ",(0,i.kt)("a",{parentName:"p",href:"https://fastlane.tools/"},"fastlane")," to automate these processes with a combination of git branching strategy, scheduled jobs, and scripting. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Engineering/DevOps/Automation%20Code%20Docs/GitHub%20Actions/BuildReleaseWorkflows"},"View Build and Release Workflows")),(0,i.kt)("h2",{id:"code-quality-workflows"},"Code Quality Workflows"),(0,i.kt)("p",null,"Our automations also help us prevent bad code from shipping out by performing linting and running unit tests before PRs are allowed to pass, keeping our dependencies up todate, scanning for vulnerability, and automating ",(0,i.kt)("a",{parentName:"p",href:"https://www.testrail.com/"},"TestRail")," runs. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Engineering/DevOps/Automation%20Code%20Docs/GitHub%20Actions/CodeQualityWorkflows"},"View Code Quality Workflows")),(0,i.kt)("h2",{id:"other-workflows"},"Other Workflows"),(0,i.kt)("p",null,"We also have other workflows to help us with more general tasks, such as getting a use added to our GitHub repo, sending Slack messages, enabling slash commands on our GitHub issues, and deploying our this documentation site. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Engineering/DevOps/Automation%20Code%20Docs/GitHub%20Actions/OtherWorkflows"},"View Other Workflows")," "),(0,i.kt)("h3",{id:"code-quality"},"Code Quality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code checks: linting and automated test runners"),(0,i.kt)("li",{parentName:"ul"},"Vulnerability checking with ",(0,i.kt)("a",{parentName:"li",href:"https://codeql.github.com/"},"CodeQL"))),(0,i.kt)("h2",{id:"automation-robot"},"Automation Robot"),(0,i.kt)("p",null,"We use our GitHub automation robot account to do any work in Actions. ",(0,i.kt)("inlineCode",{parentName:"p"},"va-mobile-automation-robot")," account credentials are located in the VA Mobile vault in 1Password."),(0,i.kt)("p",null,"I would recommend that you use this account in a separate browser from your every-day browser. It's easier to have the two accounts at hand if one is running in Chrome and the other is only used in say Safari. "),(0,i.kt)("p",null,"Access in Actions is granted with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Personal Access Tokens"),"."),(0,i.kt)("h2",{id:"local-testing"},"Local Testing"),(0,i.kt)("p",null,"You can test GitHub Actions on your local machine using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nektos/act"},"act CLI tool")),(0,i.kt)("p",null,"You can find saved test data used in my local testing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app/tree/develop/.github/test-data"},"here")))}d.isMDXComponent=!0}}]);