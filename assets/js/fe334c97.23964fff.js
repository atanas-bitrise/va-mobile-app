"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3914],{10414:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=o(87462),i=(o(67294),o(3905));o(95657);const n={title:"How to update",sidebar_position:2},r="How to update the VA Mobile doc site",s={unversionedId:"Operations/Updating the doc site/how to update",id:"Operations/Updating the doc site/how to update",title:"How to update",description:"Follow these steps each time you want to make an update to the VA Mobile doc site.",source:"@site/docs/Operations/Updating the doc site/how to update.md",sourceDirName:"Operations/Updating the doc site",slug:"/Operations/Updating the doc site/how to update",permalink:"/va-mobile-app/docs/Operations/Updating the doc site/how to update",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to update",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting set up",permalink:"/va-mobile-app/docs/Operations/Updating the doc site/Gettingsetup"},next:{title:"About our team",permalink:"/va-mobile-app/docs/About our team/"}},l=[{value:"1. Get the latest version of the live doc site to work from",id:"1-get-the-latest-version-of-the-live-doc-site-to-work-from",children:[],level:3},{value:"2. Create a new branch to edit pages &amp; make your changes",id:"2-create-a-new-branch-to-edit-pages--make-your-changes",children:[],level:3},{value:"3. Get set up to view changes to your local copy of the doc site in a browser",id:"3-get-set-up-to-view-changes-to-your-local-copy-of-the-doc-site-in-a-browser",children:[],level:3},{value:"4. Open the repository in your text editor to edit, create new and save md pages",id:"4-open-the-repository-in-your-text-editor-to-edit-create-new-and-save-md-pages",children:[],level:3},{value:"5. Build the doc site locally to review changes before publishing",id:"5-build-the-doc-site-locally-to-review-changes-before-publishing",children:[],level:3},{value:"6. Publish your changes to the live doc site",id:"6-publish-your-changes-to-the-live-doc-site",children:[{value:"Your PR has been created!",id:"your-pr-has-been-created",children:[],level:5}],level:3},{value:"Further reading",id:"further-reading",children:[],level:3}],h={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-update-the-va-mobile-doc-site"},"How to update the VA Mobile doc site"),(0,i.kt)("p",null,"Follow these steps each time you want to make an update to the ",(0,i.kt)("a",{parentName:"p",href:"https://department-of-veterans-affairs.github.io/va-mobile-app/"},"VA Mobile doc site"),"."),(0,i.kt)("p",null,"You need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A folder on your computer where you\u2019re making changes to markdown (.md) files (open in Finder)"),(0,i.kt)("li",{parentName:"ul"},"GitHub Desktop"),(0,i.kt)("li",{parentName:"ul"},"A text editor (like Sublime text)"),(0,i.kt)("li",{parentName:"ul"},"Terminal/Command Line"),(0,i.kt)("li",{parentName:"ul"},"A browser ")),(0,i.kt)("h3",{id:"1-get-the-latest-version-of-the-live-doc-site-to-work-from"},"1. Get the latest version of the live doc site to work from"),(0,i.kt)("p",null,"To get the latest version, open",(0,i.kt)("strong",{parentName:"p"}," GitHub Desktop"),". Make sure the current repository says \u201cva-mobile-app\u201d and the current branch is set to \u201cdevelop.\u201d Click \u201cPull/Fetch origin\u201d to get the latest version of the site."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - fetch origin",src:o(99702).Z,title:"github - fetch origin"})),(0,i.kt)("h3",{id:"2-create-a-new-branch-to-edit-pages--make-your-changes"},"2. Create a new branch to edit pages & make your changes"),(0,i.kt)("p",null,"(Do not work directly in develop). Open the current branch menu and choose the \u201cnew branch\u201d button option. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - current branch",src:o(66123).Z,title:"github - current branch"})),(0,i.kt)("p",null,"Give the new branch a unique name. Make sure it\u2019s based on the ",(0,i.kt)("strong",{parentName:"p"},"develop")," branch & then click \u201cCreate branch\u201d.   "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - create branch",src:o(91407).Z,title:"github - create branch"})),(0,i.kt)("p",null,"The current branch should now show the name of the branch you created: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - current branch",src:o(32388).Z,title:"github - current branch"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - no local changes",src:o(82685).Z,title:"github - no local changes"})),(0,i.kt)("p",null,"Now you have a place where you can make edits to the doc site! "),(0,i.kt)("h3",{id:"3-get-set-up-to-view-changes-to-your-local-copy-of-the-doc-site-in-a-browser"},"3. Get set up to view changes to your local copy of the doc site in a browser"),(0,i.kt)("p",null,"To be able to see the changes you\u2019re going to make to md files rendered in a browser, you need to run the local version of the doc site on your computer.  "),(0,i.kt)("p",null,"First, open ",(0,i.kt)("strong",{parentName:"p"},"Terminal/Command Line"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Terminal/Command Line",src:o(58861).Z,title:"Terminal/Command Line"})),(0,i.kt)("p",null,"Then use the ",(0,i.kt)("strong",{parentName:"p"},"Finder")," to navigate to the folder where the doc site is on your machine: ",(0,i.kt)("inlineCode",{parentName:"p"},"somefolderonyourcomputer/VAMobile/documentation"),"  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"doc site in Finder",src:o(73669).Z,title:"doc site in Finder"})),(0,i.kt)("p",null,"Back in Terminal/Command Line, type ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," and then a space, then drag and drop the ",(0,i.kt)("inlineCode",{parentName:"p"},"somefolderonyourcomputer/VAMobile/documentation")," folder from the finder into Terminal/Command Line. It will look like this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"terminal - cd",src:o(44147).Z,title:"terminal - cd"})),(0,i.kt)("p",null,"Hit enter. Then type ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," and hit enter again. It will then do this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"terminal - yarn start",src:o(52485).Z,title:"terminal - yarn start"})),(0,i.kt)("p",null,"It will also automatically open a new browser window where changes to your files will be rendered (if you see an alert, give it permission to open your browser). The URL bar for that new window will look like this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"url bar",src:o(58844).Z,title:"url bar"})),(0,i.kt)("p",null,"Now you\u2019re ready to start making edits to the doc site!"),(0,i.kt)("h3",{id:"4-open-the-repository-in-your-text-editor-to-edit-create-new-and-save-md-pages"},"4. Open the repository in your text editor to edit, create new and save md pages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To create a new md page:")," Open the Doc site folder within your text editor and choose \u201cNew File\u201d. The new page will open in the text editor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To edit an existing md page:")," Open the Doc site folder within your text editor & select the file you want to edit. The page will open in the text editor.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sublime text editor",src:o(68862).Z,title:"sublime text editor"})),(0,i.kt)("p",null,"Edit the md file and save it, then switch to your browser window to view the changes rendered onscreen. Review updates in your browser as you go to make sure everything looks as you expect.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"doc site in browser",src:o(17349).Z,title:"doc site in browser"})),(0,i.kt)("p",null,"Once you\u2019re happy with all of your edits, it\u2019s time to build the site & submit your changes!"),(0,i.kt)("h3",{id:"5-build-the-doc-site-locally-to-review-changes-before-publishing"},"5. Build the doc site locally to review changes before publishing"),(0,i.kt)("p",null,"Once you are done editing you need to build the site. This step generates a static version of the site, which is the same as how it is served on the live Doc site. It should look the same as the development environment you have been running.  "),(0,i.kt)("p",null,"First, stop/kill the dev site. To do this, go to ",(0,i.kt)("strong",{parentName:"p"},"Terminal/Command Line")," and type in\n",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL + C")," to stop/kill the dev site.  "),(0,i.kt)("p",null,"Next, you\u2019re going to build the site. In ",(0,i.kt)("strong",{parentName:"p"},"Terminal/Command Line,")," type in ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build "),"and press enter.  "),(0,i.kt)("p",null,"The site will build and display any errors it finds. Check and make sure everything looks good. Note that if you make changes you will have to run build again to see them, unlike with the development server which auto updates for faster development.  "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you\u2019d like someone else to review your branch before publishing them, you should commit your changes and publish your branch following the steps below, but don\u2019t create a pull request.")),(0,i.kt)("h3",{id:"6-publish-your-changes-to-the-live-doc-site"},"6. Publish your changes to the live doc site"),(0,i.kt)("p",null,"To push your changes to the live Doc site, you first need to check your changes, and get those changes approved by someone else on the team. You can do this by publishing the changes & creating a pull request.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commit changes"),"  "),(0,i.kt)("p",null,"First, open GitHub Desktop. It will show all of the pages you changed in the Changes tab on the left. If you click on a file, you can see the set of changes for each file (called a diff). Green indicates a line was added. Red indicates the line was deleted.  "),(0,i.kt)("p",null,"Make sure only the boxes next to the pages you want to update are checked. At the bottom of that column, write a summary of the changes you made (in case someone needs to review the history and can easily tell what you were up to) and then click \u201cCommit\u201d to save the changes.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - commit changes",src:o(77438).Z,title:"github - commit changes"})),(0,i.kt)("p",null,"GH Desktop should then show you a screen that says \u201cNo local changes\u201d again. If you have more changes or more commits, go ahead and do those now. Once you have all the changes you want to make, you will need to publish your branch so that you can make a pull request.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Publish branch"),"  "),(0,i.kt)("p",null,"In order to make a Pull Request and add your changes back onto the base branch, you will need to copy your local branch up onto the GitHub server. To do this, you just need to go to the GH Desktop app, and click either the Publish Branch tab at the top or the Publish Branch button in the Publish your branch area.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - publish branch",src:o(40397).Z,title:"github - publish branch"})),(0,i.kt)("p",null,"The branch should get pushed up to the repository and you should then see an area to Create Pull Request.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - no local changes",src:o(85001).Z,title:"github - no local changes"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create a pull request"),"  "),(0,i.kt)("p",null,"Click the Create Pull Request button. This should open a browser window that takes you to a Pull Request template in the repository (You can also open the docsite in Github in your browser: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app"},"https://github.com/department-of-veterans-affairs/va-mobile-app"),")  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github create PR",src:o(3482).Z,title:"github create PR"})),(0,i.kt)("p",null,"Click \u201cCompare & pull request.\u201d You will see this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github - open PR",src:o(85827).Z,title:"github - open PR"})),(0,i.kt)("p",null,"Before you create the pull request, do the following things:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the base is set to \u201cdevelop\u201d "),(0,i.kt)("li",{parentName:"ul"},"Github will automatically choose reviewers for you, but you can also choose two people to review your request."),(0,i.kt)("li",{parentName:"ul"},"Scroll down to compare the changes between branches.")),(0,i.kt)("p",null,"If all is well, click Click the green \u201cCreate pull request\u201d button.  "),(0,i.kt)("h5",{id:"your-pr-has-been-created"},"Your PR has been created!"),(0,i.kt)("p",null,"Wait for it to be reviewed and merged into the doc site by a team member.  "),(0,i.kt)("h3",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Making%20Changes/"},"How to use GitHub Desktop and Sublime text to make pull requests")," (General - not specific to Doc site) "),(0,i.kt)("li",{parentName:"ul"},"More info on ","[how to navigate files and folders in Terminal/Command Line]","(",(0,i.kt)("a",{parentName:"li",href:"https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-Terminal/Command"},"https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-Terminal/Command")," Line.html)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/cheat-sheet/"},"Markdown cheatsheet"))))}u.isMDXComponent=!0},73669:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/docsite-in-finder-9aada2ae0eacefe3e98f786e85698a7c.png"},17349:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/docsiteinbrowser-698e6e07ac3bb27de9b295caf2033d7c.png"},77438:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubcommit-86af165e8c65e24b7d51566310df026f.png"},91407:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubcreatebranch-c65c2e853d69934041d93cd3f4d13229.png"},3482:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubcreatepr-ca19479f4c4bde7108f20f18b6414a48.png"},66123:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubcurrentbranch-9f41d1c6b4ff429e7cde2fd4f6603768.png"},32388:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubcurrentbranch2-9d89f067091e1d772b9e15368613fa43.png"},99702:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubfetchorigin-39a3b183d4021ddaef00c34c09a5699a.png"},82685:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubnolocalchanges-b4e700b4960f4fa3ef2a7a991b1cad3b.png"},85001:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubnolocalchanges2-a9bca4ed043b2865487c848e128be3cb.png"},85827:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubopenpr-6902d09ce7f175c4465b0402f84d58c6.png"},40397:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/githubpublish-528a339f8abf809a95e2c2d02f105ceb.png"},68862:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sublimetexteditor-c0d185a52aeb46c98b0265addab572ba.png"},44147:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/terminal-docu-cd-0bda966f38e48d015cbac7b6bdfc5b09.png"},58861:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/terminal1-3a4053cb4328fcd0bedfe3222950d52c.png"},52485:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/terminalyarnstart-827de2389e4a5e9424f72139844525f0.png"},58844:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);