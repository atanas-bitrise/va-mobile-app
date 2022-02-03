"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2290],{77800:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(67294),a=t(19055),s=t(26396),o=t(58215),i=t(82224),l=t(36005),u=function(e){var n=e.props;return n?r.createElement(r.Fragment,null,l.ZP.isEmpty(n)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return r.createElement("div",{key:n},r.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function m(e){var n=(0,i.N)(e.componentName)[0],t=n.description,l=n.displayName,m=n.tags,c="How to use the "+l+" component";return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement(o.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},t)),r.createElement(o.Z,{value:"params",label:"Params and Return"},r.createElement(u,{props:m})),r.createElement(o.Z,{value:"example",label:"Example"},e.example&&r.createElement(a.Z,{title:c,className:"language-tsx test"},e.example))))}},44855:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},exampleString:function(){return p},default:function(){return d}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),o=t(77800),i=["components"],l={},u=void 0,m={unversionedId:"Engineering/FrontEnd/CustomHooks/useMessageWithSignature",id:"Engineering/FrontEnd/CustomHooks/useMessageWithSignature",title:"useMessageWithSignature",description:"export const exampleString = `const [messageReply, setMessageReply] = useMessageWithSignature()\\n",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useMessageWithSignature.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useMessageWithSignature",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useMessageWithSignature",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useIsScreanReaderEnabled",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useIsScreanReaderEnabled"},next:{title:"useRouteNavigation",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useRouteNavigation"}},c=[],p="const [messageReply, setMessageReply] = useMessageWithSignature()\n\nconst goToCancel = () => {\n    replyCancelConfirmation({\n      origin: FormHeaderTypeConstants.reply,\n      replyToID: messageID,\n      messageData: { body: messageReply },\n      isFormValid: true,\n    })\n}\n\n{\n    fieldType: FieldType.TextInput,\n    fieldProps: {\n    inputType: 'none',\n    value: messageReply,\n    onChange: setMessageReply,\n    labelKey: 'health:secureMessaging.formMessage.message',\n    isRequiredField: true,\n    isTextArea: true,\n    setInputCursorToBeginning: true,\n    },\n    fieldErrorMessage: t('secureMessaging.formMessage.message.fieldError'),\n},",g={toc:c,exampleString:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{componentName:"useMessageWithSignature",example:p,mdxType:"HooksInfo"}))}d.isMDXComponent=!0}}]);