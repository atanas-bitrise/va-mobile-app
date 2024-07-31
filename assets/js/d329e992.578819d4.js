"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1482],{29209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={title:"Building screens in Figma",sidebar_position:6},r="How to build screens in Figma",l={unversionedId:"UX/How-We-Work/building-screens-figma",id:"UX/How-We-Work/building-screens-figma",title:"Building screens in Figma",description:"A guide to building working files and shipped files",source:"@site/docs/UX/How-We-Work/building-screens-figma.md",sourceDirName:"UX/How-We-Work",slug:"/UX/How-We-Work/building-screens-figma",permalink:"/va-mobile-app/docs/UX/How-We-Work/building-screens-figma",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Building screens in Figma",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Branching in Figma",permalink:"/va-mobile-app/docs/UX/How-We-Work/figma-branching"},next:{title:"Creating components in Figma",permalink:"/va-mobile-app/docs/UX/How-We-Work/figma-components"}},s={},d=[{value:"A guide to building working files and shipped files",id:"a-guide-to-building-working-files-and-shipped-files",level:2},{value:"Step 1: Create your frame",id:"step-1-create-your-frame",level:2},{value:"Step 2: Add your content",id:"step-2-add-your-content",level:2},{value:"Step 3: Create dark mode versions",id:"step-3-create-dark-mode-versions",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-build-screens-in-figma"},"How to build screens in Figma"),(0,a.kt)("h2",{id:"a-guide-to-building-working-files-and-shipped-files"},"A guide to building working files and shipped files"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"step-1-create-your-frame"},"Step 1: Create your frame"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a frame at 360 x 760."),(0,a.kt)("li",{parentName:"ol"},"In the assets panel, search \u201ctemplate\u201d and drag the template into the frame."),(0,a.kt)("li",{parentName:"ol"},"After adding the template to the frame, you can then select that template layer, which will give you options in the design panel on the right-hand side of the screen. In this panel, you can select the category (home, health, benefits, payments) and template type (feature, subtask, etc.).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the design panel in Figma",src:n(49631).Z,width:"242",height:"894"})),(0,a.kt)("h2",{id:"step-2-add-your-content"},"Step 2: Add your content"),(0,a.kt)("p",null,"To create and link your content to your template, we recommend following the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the assets panel, drag the content area component onto the page."),(0,a.kt)("li",{parentName:"ol"},"Detach the instance and remove the content area layer (it\u2019s just a placeholder)."),(0,a.kt)("li",{parentName:"ol"},"Add your components to the content area (they can all be customized by selecting the component\u2019s layer in the design panel on the right-hand side of the screen)."),(0,a.kt)("li",{parentName:"ol"},"After you have completed adding your components, we recommend that you add autolayout to the main \u201ccontent area (default)\u201d component to help keep consistent spacing and alignment. Then, create a new component and give your content a unique name."),(0,a.kt)("li",{parentName:"ol"},"In the main frame that houses your template, select the template\u2019s layer. Scroll down to \u201cMain Content\u201d and then select your content component. This will replace the placeholder content with the content that you just created.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: You can always go back and make changes to the content component that you created. Also, there may be additional ways to create a content component, such as by starting from scratch and creating a new component.")),(0,a.kt)("h2",{id:"step-3-create-dark-mode-versions"},"Step 3: Create dark mode versions"),(0,a.kt)("p",null,"After you\u2019ve created all of the shipped screens in light mode, you may need to create dark mode versions of your screens. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To create dark mode versions, select all of your light mode layers and duplicate them (on Mac, you can hold down option and click + drag to duplicate). ",(0,a.kt)("em",{parentName:"li"},"We recommend visually grouping light mode versions together and dark mode versions together.")),(0,a.kt)("li",{parentName:"ol"},"We recommend adding light and/or dark mode to each of your frame names within your shipped file. For example, you may name one of your light mode frames \u201cProfile / Landing / Light\u201d and the dark mode frames  \u201cProfile / Landing / Dark\u201d."),(0,a.kt)("li",{parentName:"ol"},'After you have duplicated your light mode versions, you\u2019ll need to change the color mode. You can adjust the mode by clicking the change variable mode icon and switching each library to "Dark" (see screenshot below).')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Change variable mode icon in Figma",src:n(91260).Z,width:"464",height:"156"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"You may also need to update some of your components within your content area to dark mode. The easiest way to do this is to select each component layer within the \u201cLayers\u201d panel on the left (you may have to click the option to \u201cSee All Layers\u201d). You\u2019ll want to look for the \u201cContent\u201d layer and may have to go several layers deep within this layer to find your individual component layers. Then, select \u201cDark\u201d in the mode area within the design panel. ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Figma is not without glitches and will sometimes return your component to its default settings when switching the color mode. When this happens, sometimes resetting the component will fix it. You can do this by clicking the icon with 3 dots (\u201c...\u201d) in the design panel. Click the icon and select \u201cReset all changes\u201d (see screenshot below). If this doesn\u2019t work, you may have to update each component manually."),(0,a.kt)("li",{parentName:"ol"},"When using the \u201cText Area\u201d and \u201cDefault List\u201d components, you may have to update each row within the component to dark mode vs. updating the entire component at one time. This will often prevent the content from restoring to default.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the detach instance panel in Figma",src:n(92270).Z,width:"472",height:"546"})))}h.isMDXComponent=!0},92270:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/detach-instance-828af4797a90b72ac9a9b85142815de6.png"},91260:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/figma-change-variable-mode-icon-10629db40be046c246b0cf4c26ef2160.png"},49631:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/figma-screen-template-properties-e9c3485d3d73bb8e7081f8eed9e2f802.png"}}]);