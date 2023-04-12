"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3201],{3905:function(e,n,a){a.d(n,{Zo:function(){return h},kt:function(){return p}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},h=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return a?t.createElement(g,o(o({ref:n},h),{},{components:a})):t.createElement(g,o({ref:n},h))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35992:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Branching in Figma",sidebar_position:5},s=void 0,c={unversionedId:"UX/How-We-Work/figma-branching",id:"UX/How-We-Work/figma-branching",title:"Branching in Figma",description:"What is branching?",source:"@site/docs/UX/How-We-Work/figma-branching.md",sourceDirName:"UX/How-We-Work",slug:"/UX/How-We-Work/figma-branching",permalink:"/va-mobile-app/docs/UX/How-We-Work/figma-branching",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Branching in Figma",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Design Librarian",permalink:"/va-mobile-app/docs/UX/How-We-Work/design-librarian"},next:{title:"Research",permalink:"/va-mobile-app/docs/UX/research"}},h=[{value:"What is branching?",id:"what-is-branching",children:[],level:2},{value:"Why are we branching?",id:"why-are-we-branching",children:[],level:2},{value:"When should we create a branch?",id:"when-should-we-create-a-branch",children:[],level:2},{value:"Who will be able to do what in the design library?",id:"who-will-be-able-to-do-what-in-the-design-library",children:[],level:2},{value:"How do I create a branch in Figma?",id:"how-do-i-create-a-branch-in-figma",children:[],level:2},{value:"How do I view branches in Figma?",id:"how-do-i-view-branches-in-figma",children:[],level:2},{value:"How do I submit a branch for review in Figma?",id:"how-do-i-submit-a-branch-for-review-in-figma",children:[],level:2},{value:"How do I review and merge changes from a branch in Figma?",id:"how-do-i-review-and-merge-changes-from-a-branch-in-figma",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],m={toc:h};function u(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-branching"},"What is branching?"),(0,i.kt)("p",null,"Branching is a form of version control commonly used in software development in which you make a copy of something, make changes, and then merge those changes back into the main file/codebase."),(0,i.kt)("h2",{id:"why-are-we-branching"},"Why are we branching?"),(0,i.kt)("p",null,"Branching allows you to create a separate space to experiment without impacting your main file. It also allows you to submit changes to a reviewer (ie Design Librarian) before merging your changes to the main file."),(0,i.kt)("h2",{id:"when-should-we-create-a-branch"},"When should we create a branch?"),(0,i.kt)("p",null,"For now, we\u2019ll be testing branching in our design library for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding a new component to our library"),(0,i.kt)("li",{parentName:"ul"},"Updating an existing component in our library"),(0,i.kt)("li",{parentName:"ul"},"Experimental changes we don\u2019t want to commit to yet")),(0,i.kt)("p",null,"In the future, we may consider branching for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Evaluative research such as user testing"),(0,i.kt)("li",{parentName:"ul"},"Large scale reorganization or restructures"),(0,i.kt)("li",{parentName:"ul"},"Development handoff of specific components or feature work")),(0,i.kt)("h2",{id:"who-will-be-able-to-do-what-in-the-design-library"},"Who will be able to do what in the design library?"),(0,i.kt)("p",null,"We\u2019ll be updating permissions for the design library as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Owner (UX lead)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Able to adjust file and project permissions"),(0,i.kt)("li",{parentName:"ul"},"Always has editing and publishing rights"),(0,i.kt)("li",{parentName:"ul"},"Also has Editor and Viewer permissions"))),(0,i.kt)("li",{parentName:"ul"},"Editors (design librarians)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Temporarily have editing and publishing rights"),(0,i.kt)("li",{parentName:"ul"},"Able to review and approve branches"),(0,i.kt)("li",{parentName:"ul"},"Also have Viewer permissions"))),(0,i.kt)("li",{parentName:"ul"},"Viewers (everyone else)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Able to create and edit branches"),(0,i.kt)("li",{parentName:"ul"},"Able to submit branches for review")))),(0,i.kt)("h2",{id:"how-do-i-create-a-branch-in-figma"},"How do I create a branch in Figma?"),(0,i.kt)("p",null,"Open the file you want to branch. Next to the file name, there is a dropdown where you can select ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Create branch")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": When working in a branch, keep track of if/when you move components from one section to another in the library. This may cause conflicts and/or duplicate components when a Reviewer merges your branch into the main file. Be sure to include this information when you submit your branch for review."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the create a branch menu item",src:a(81426).Z})),(0,i.kt)("p",null,"Name your branch and select ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the create a branch modal",src:a(79530).Z})),(0,i.kt)("p",null,"Now, you have a branch (aka a copy) of the file. "),(0,i.kt)("p",null,"You can tell when you\u2019re working in a branch by the arrow symbol next to the file name."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot file name with branching icon",src:a(24857).Z})),(0,i.kt)("h2",{id:"how-do-i-view-branches-in-figma"},"How do I view branches in Figma?"),(0,i.kt)("p",null,"Open the dropdown menu next to the branch name. Then, select ",(0,i.kt)("strong",{parentName:"p"},"See all branches"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot see all branches menu item",src:a(33139).Z})),(0,i.kt)("p",null,"If you switch branches, Figma automatically saves your changes in the branch you were previously working on, so you don\u2019t need to worry about losing your work."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of see all branches modal",src:a(88609).Z})),(0,i.kt)("h2",{id:"how-do-i-submit-a-branch-for-review-in-figma"},"How do I submit a branch for review in Figma?"),(0,i.kt)("p",null,"Open the dropdown menu next to the branch name. Then, select ",(0,i.kt)("strong",{parentName:"p"},"Review and merge changes"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of review and merge changes menu",src:a(88609).Z})),(0,i.kt)("p",null,"In the modal, you\u2019ll see a list of available reviewers. Add the current design librarians as Reviewers. Then, select ",(0,i.kt)("strong",{parentName:"p"},"Request review"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of request reviewer modal",src:a(89269).Z})),(0,i.kt)("p",null,"Before sending a branch for review, be sure to include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description of what changes were made"),(0,i.kt)("li",{parentName:"ul"},"Justification for why changes were made (ticket number, Slack message, etc)"),(0,i.kt)("li",{parentName:"ul"},"In the future, we may ask for documentation to be included")),(0,i.kt)("h2",{id:"how-do-i-review-and-merge-changes-from-a-branch-in-figma"},"How do I review and merge changes from a branch in Figma?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Only the Owner and Editors can review and merge changes.")," When you request a review of your branch, the Reviewers (design librarians) will receive a notification in Figma, Slack, and/or email."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of notification of review in Figma",src:a(30699).Z})),(0,i.kt)("p",null,"Next, a Reviewer will ",(0,i.kt)("a",{parentName:"p",href:"https://help.figma.com/hc/en-us/articles/5693123873687/#review-changes"},"review your changes"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of branch review moda",src:a(98640).Z})),(0,i.kt)("p",null,"Reviewers can view before and after versions of your changes as side-by-side or overlay comparisons."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of branch side by side branch review comparison",src:a(46526).Z})),(0,i.kt)("p",null,"Next, a Reviewer can ",(0,i.kt)("a",{parentName:"p",href:"https://help.figma.com/hc/en-us/articles/5693123873687/#approve"},"approve")," or ",(0,i.kt)("a",{parentName:"p",href:"https://help.figma.com/hc/en-us/articles/5693123873687/#suggest-changes"},"suggest changes")," to your branch. Changes can be suggested in the modal or through comments on the individual designs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of finish review modal with approve selected",src:a(7318).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of finish review modal with suggest selected",src:a(59916).Z})),(0,i.kt)("p",null,"If approved, a Reviewer will ",(0,i.kt)("a",{parentName:"p",href:"https://help.figma.com/hc/en-us/articles/5691189138839/"},"merge your changes to the main file"),". As a reviewer, it\u2019s recommended to add a ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/best-practices/branching-in-figma/best-practices-when-using-branches/#naming-your-branches"},"Name and Description")," to the merge."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of edit merge description prompt",src:a(82792).Z})),(0,i.kt)("p",null,"After the review, you\u2019ll receive a notification in Figma and/or email that your branch was either approved and merged or has changes suggested. You\u2019ll be able to view the suggestions in the review modal or through comments. Then, you\u2019ll need to repeat this process to submit your branch for another review."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot file name with types of file statuses",src:a(13193).Z})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/best-practices/branching-in-figma/"},"Branching in Figma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.figma.com/best-practices/branching-in-figma/questions/"},"FAQs about branching in Figma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ben-maclaren.medium.com/the-complete-guide-to-figma-branching-15bc369f9df6"},"Complete guide to Figma branching"))))}u.isMDXComponent=!0},13193:function(e,n,a){n.Z=a.p+"assets/images/figma-branch-file-status-a13a35bdfc3fffa5bc7c751f6e3c5bbb.png"},46526:function(e,n,a){n.Z=a.p+"assets/images/figma-branch-review-comparison-6767019e0d5f4762e43f8003752fb36c.png"},98640:function(e,n,a){n.Z=a.p+"assets/images/figma-branch-review-modal-d33eb2f342a93e3214d137aea59e330e.png"},82792:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-edit-merge-description-button-f7b492a4230db26150288d0a08a46419.png"},24857:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-file-name-972f72e1957f652b04f9c703f6539856.png"},7318:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-finish-review-modal-approve-5eb9146c6b741244ecf82579d509c8c1.png"},59916:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-finish-review-modal-suggest-3caeaba6862358dc40a6393a2e669248.png"},30699:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-notification-b4fd613b5762caa6a271dca5e4549632.png"},89269:function(e,n,a){n.Z=a.p+"assets/images/figma-branching-request-review-modal-6984de6f9a59322b84a23fed31d6e854.png"},81426:function(e,n,a){n.Z=a.p+"assets/images/figma-create-a-branch-menu-ffc78acc003eaba7c51b7ceec21b3a40.png"},79530:function(e,n,a){n.Z=a.p+"assets/images/figma-create-a-branch-modal-0bd95d6581b0a440ae27b05f6fe6b5e1.png"},33139:function(e,n,a){n.Z=a.p+"assets/images/figma-see-all-branches-menu-dab82c7a0e180058a40a8c94d6371f58.png"},88609:function(e,n,a){n.Z=a.p+"assets/images/figma-see-all-branches-modal-7bc79c48ddb5de4031bd3e360df2fc24.png"}}]);