"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[525],{68739:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={title:"QA"},s="Overview | VA Mobile App Quality Assurance Process",l={unversionedId:"QA/index",id:"QA/index",title:"QA",description:'A quality assurance process is an agreement between the project developers, product managers and quality assurance on the process for testing and verifying the delivery of product functionality. (See this whitepaper for some great QA-related basic terms and definitions, including "quality assurance process")',source:"@site/docs/QA/index.md",sourceDirName:"QA",slug:"/QA/",permalink:"/va-mobile-app/docs/QA/",tags:[],version:"current",frontMatter:{title:"QA"},sidebar:"tutorialSidebar",previous:{title:"UX Resources",permalink:"/va-mobile-app/docs/UX/Resources"},next:{title:"UI automation testing",permalink:"/va-mobile-app/docs/QA/Automation"}},o=[{value:"Test strategy",id:"test-strategy",children:[],level:2},{value:"Features to test",id:"features-to-test",children:[],level:2},{value:"Who is responsible",id:"who-is-responsible",children:[],level:2},{value:"Testing methods",id:"testing-methods",children:[],level:2},{value:"Testing accounts and data",id:"testing-accounts-and-data",children:[],level:2},{value:"Bug tracking",id:"bug-tracking",children:[{value:"Issue severity",id:"issue-severity",children:[{value:"Impact definitions",id:"impact-definitions",children:[],level:4},{value:"Frequency definitions",id:"frequency-definitions",children:[],level:4}],level:3}],level:2},{value:"Test activity reporting",id:"test-activity-reporting",children:[],level:2},{value:"Mobile QA Overview",id:"mobile-qa-overview",children:[],level:2}],d={toc:o},p="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview--va-mobile-app-quality-assurance-process"},"Overview | VA Mobile App Quality Assurance Process"),(0,i.kt)("p",null," A quality assurance process is an agreement between the project developers, product managers and quality assurance on the process for testing and verifying the delivery of product functionality. (See ",(0,i.kt)("a",{parentName:"p",href:"https://www.altexsoft.com/whitepapers/quality-assurance-quality-control-and-testing-the-basics-of-software-quality-management/"},"this whitepaper"),' for some great QA-related basic terms and definitions, including "quality assurance process")'),(0,i.kt)("p",null,"The VA Mobile App is a mobile application that will allow veterans to access their healthcare services and claims information via their mobile devices."),(0,i.kt)("p",null,"The objective of this QA process is to document how we will verify that the software developed for the VA Mobile App works as defined in the product requirements."),(0,i.kt)("h2",{id:"test-strategy"},"Test strategy"),(0,i.kt)("p",null,"We are taking an integrated approach to testing - building QA activities into the agile development process so that testing takes place early and often as a key part of sprint operations. Identifying issues during development will minimize technical and functional debt and make for better product quality and more accurate progress reporting and delivery status. In addition, we will leverage automated testing tools in the development delivery chain to provide real time ",(0,i.kt)("a",{parentName:"p",href:"https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/FrontEnd/Testing/UnitTesting"},"unit"),", ",(0,i.kt)("a",{parentName:"p",href:"https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA/Automation"},"UI")," and service reliability (",(0,i.kt)("em",{parentName:"p"},"no documentation yet"),") checks."),(0,i.kt)("h2",{id:"features-to-test"},"Features to test"),(0,i.kt)("p",null,"Testing will be performed throughout the development process based on the prioritization and delivery of features in the product backlog. As product management prioritizes features and the development team implements those features, Quality Assurance will write associated test cases and execute those test cases, verifying that the features delivered meet the requirements and function as intended. Features that have not been prioritized and implemented will not be tested. For a detailed description of test and acceptance criteria please refer to the product backlog. At a high level, testing will cover the following functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All delivered features related to login and authentication flows including biometric authentication"),(0,i.kt)("li",{parentName:"ul"},"All delivered features related to navigation and general app behavior"),(0,i.kt)("li",{parentName:"ul"},"All delivered features related to veteran access of information in the app (such as military history or disability rating)"),(0,i.kt)("li",{parentName:"ul"},"All delivered features related to veteran submission of information in the app (such as Rx refill, secure messaging, or file upload in claims)"),(0,i.kt)("li",{parentName:"ul"},"All delivered features related to notifications including push notifications"),(0,i.kt)("li",{parentName:"ul"},"All delivered features using accessibility controls (see accessibility test plan for more detail)")),(0,i.kt)("h2",{id:"who-is-responsible"},"Who is responsible"),(0,i.kt)("p",null,"Software quality is a team effort. Developers will be responsible for ",(0,i.kt)("a",{parentName:"p",href:"https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/Philosphy#all-the-tests"},"writing unit tests"),". The product team will be responsible for user acceptance testing of the delivered features. Quality Assurance is responsible for writing automated UI tests and manually testing the product functionality and various user flows through the application."),(0,i.kt)("h2",{id:"testing-methods"},"Testing methods"),(0,i.kt)("p",null,"The following testing methods will be employed during development and testing of the VA Mobile App."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Method")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Primary Owner")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Stories ","&"," Acceptance Criteria"),(0,i.kt)("td",{parentName:"tr",align:null},"Requirements are defined by the product team and written as user stories in the product backlog. Acceptance criteria (AC) are written as part of the user story and describe the conditions that must be met in order for the story to be accepted as complete."),(0,i.kt)("td",{parentName:"tr",align:null},"Product")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Test Cases ","&"," Functional Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Test cases are defined by the QA team and are written not only to make sure all stories and their acceptance criteria are met but will also account for edge cases (scenarios that happen outside of normal operating conditions) like attempting to upload the wrong file type or entering text characters into a date field. Test cases are used to perform manual functional testing in which QA interacts with the application as would an end user to identify any issues."),(0,i.kt)("td",{parentName:"tr",align:null},"QA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unit Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Unit tests are written into the code by developers and target the smallest components of the code that can be logically isolated from the rest of the system. These tests are typically fast and can run any time the code is changed to help identify and isolate defects during development. The purpose of unit tests is to make sure the code functions are defect-free before merging into the larger code base."),(0,i.kt)("td",{parentName:"tr",align:null},"Developers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Integration Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"In contrast to unit tests, integration tests run across individual modules of code to validate that separately developed modules are working together properly. Integration tests are also used to validate that the VA Mobile App front end interfaces with other systems and services, such as the VA.gov APIs, as designed."),(0,i.kt)("td",{parentName:"tr",align:null},"Developers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"End-to-end Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"End-to-end testing, or system testing, looks to validate that the system as a whole works as intended. These tests are similar in nature to integration tests but are focused on the superset of delivered software and its connections to other systems. End-to-end testing will be done prior to release and will consist of both manual and automated testing to ensure adequate coverage of the delivered functionality."),(0,i.kt)("td",{parentName:"tr",align:null},"Developers, QA, Product")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Acceptance Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"User Acceptance Testing, sometimes referred to as ",'"',"UAT",'"'," or just Acceptance Testing, involves the product team and other stakeholders interacting with the application to simulate real-world usage and signing off that the delivered software functions as defined in the designs and requirements. We will leverage pre-production distribution tools such as TestFlight to get the app in the hands of stakeholders to facilitate Acceptance Testing."),(0,i.kt)("td",{parentName:"tr",align:null},"Product, Stakeholder community")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accessibility Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Accessibility is a major requirement for the VA Mobile App and requires additional consideration beyond the standard testing process. QA will include accessibility checks in the manual functional testing activities. For a more detailed plan on accessibility testing approach see the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/Accessibility%20Test%20Plan.md"},"Mobile Accessibility Testing Plan"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Developers, QA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatibility Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Software may behave differently depending on the specific device and operating system that it is running on. In order to validate that the software developed will work as intended across a variety of devices we will also perform manual functional testing of each feature on a variety of physical devices and OSs as defined in the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#what-did-you-decide-on-6"},"test device matrix"),"."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"testing-accounts-and-data"},"Testing accounts and data"),(0,i.kt)("p",null,"In order to support testing activities we will need test user accounts with test data that is representative of the variations anticipated in production user data. The purpose of test accounts and test data is to simulate the possible variations that may occur in production data to stress test the application and ensure it has been designed and built to accommodate real world user variance. Test user data variance, and uptime/availability of staging systems, is critical to efficient, low-risk delivery of new features and regression-testing existing features. "),(0,i.kt)("h2",{id:"bug-tracking"},"Bug tracking"),(0,i.kt)("p",null,"Issues identified during a development sprint will be written up as new bug tickets, and attached to an epic (if relevant). The Product Owner may prioritize logged issues into upcoming sprints for the development team to address. Issue tickets are scoped at a 1 by default, and split into further tickets if Engineering investigation uncovers a heavier lift to fix than the default scoping. "),(0,i.kt)("p",null,"All issue tickets should be written using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/ISSUE_TEMPLATE/bug-report.md"},"issue ticket template"),". Issues should be classified according to severity based on an agreed-upon scale."),(0,i.kt)("h3",{id:"issue-severity"},"Issue severity"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Severity")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Definition")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Critical (sev-1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Issues with both HIGH impact and HIGH frequency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High (sev-2)"),(0,i.kt)("td",{parentName:"tr",align:null},"Issues with either HIGH impact and LOW frequency, or LOW impact and HIGH frequency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low (sev-3)"),(0,i.kt)("td",{parentName:"tr",align:null},"Issues with both LOW impact and LOW frequency")))),(0,i.kt)("h4",{id:"impact-definitions"},"Impact definitions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Impact")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Definition")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Examples")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High impact"),(0,i.kt)("td",{parentName:"tr",align:null},"Prevents a user from completing a task"),(0,i.kt)("td",{parentName:"tr",align:null},"Crashes, system hangs, file/data corruption, errors with no discoverable workaround, component doesn't function (ex: link broken, button can't receive screen reader focus), etc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low impact"),(0,i.kt)("td",{parentName:"tr",align:null},"Does not prevent a user from completing a task"),(0,i.kt)("td",{parentName:"tr",align:null},"Typos, unclear messaging, repetitive information, errors with an easily discoverable workaround, etc")))),(0,i.kt)("h4",{id:"frequency-definitions"},"Frequency definitions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Frequency")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Definition")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Examples")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"Affects a component, screen, or action used by 15% or more of monthly users"),(0,i.kt)("td",{parentName:"tr",align:null},"Authentication, category landing screens, feature landing or child screens for most-used features (Claims, Upcoming Appointments), feature landing or child screens for next-most-used features (Payments, Messaging, Letters, Disability Rating, Military Info and Onboarding)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"Affects a component, screen, or action used by 14% or fewer of monthly users"),(0,i.kt)("td",{parentName:"tr",align:null},"All app actions (send message, upload file, etc); and all screens not listed in high frequency examples")))),(0,i.kt)("h2",{id:"test-activity-reporting"},"Test activity reporting"),(0,i.kt)("p",null,"QA activities will primarily be tracked in ZenHub as commentary on sprint stories or logged issues."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Activity")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Summary")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Acceptance Criteria / Test Cases")),(0,i.kt)("td",{parentName:"tr",align:null},"Added to ZenHub and associated to user stories")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Issue Tickets")),(0,i.kt)("td",{parentName:"tr",align:null},"Maintained in ZenHub")))),(0,i.kt)("h2",{id:"mobile-qa-overview"},"Mobile QA Overview"),(0,i.kt)("p",null,"In April of 2023, we recorded an 'overview of Mobile QA' presentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/files/11348079/PDF.Mobile.app.release.process.QA.pdf"},"(presentation slides as PDF)")," with some VA stakeholders. Video clips for each (rough) topic include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/94404065/234995289-0e373312-d47a-43f7-8db7-60bcdf4902ba.mp4"},"High-level diagram of QA process in feature implementation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/94404065/234995471-a0774258-0cbe-47e4-9041-4d476a25c131.mp4"},"The dwindling tail of bug fixes at the end of feature implementation, aka the feature armadillo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/94404065/234995671-e25cb9c9-e267-4ff0-ad8f-445acee8f10b.mp4"},"What QA tests on any given ticket")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/94404065/234995746-f18e5a4c-fc62-4939-838d-86c9061ba2e1.mp4"},"QA work outside of testing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/94404065/234995839-6aed1042-818d-4e00-b55d-d22923f0698c.mp4"},"QA FAQs, aka elephants in the room"))))}c.isMDXComponent=!0}}]);