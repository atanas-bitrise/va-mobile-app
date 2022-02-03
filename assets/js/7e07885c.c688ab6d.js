"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9770],{77800:function(e,n,t){t.d(n,{Z:function(){return c}});var s=t(67294),o=t(19055),r=t(26396),a=t(58215),l=t(82224),m=t(73490),i=function(e){var n=e.props;return n?s.createElement(s.Fragment,null,m.ZP.isEmpty(n)?s.createElement("pre",{className:"preText"},"This component does not have param defined"):s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"Param / Return"),s.createElement("th",null,"Description"))),s.createElement("tbody",null,Object.keys(n).map((function(e){return s.createElement("tr",{key:e},s.createElement("td",null,s.createElement("code",null,e)),s.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return s.createElement("div",{key:n},s.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function c(e){var n=(0,l.N)(e.componentName)[0],t=n.description,m=n.displayName,c=n.tags,u="How to use the "+m+" component";return s.createElement(s.Fragment,null,s.createElement(r.Z,null,s.createElement(a.Z,{value:"description",label:"Description"},s.createElement("pre",{className:"preText"},t)),s.createElement(a.Z,{value:"params",label:"Params and Return"},s.createElement(i,{props:c})),s.createElement(a.Z,{value:"example",label:"Example"},e.example&&s.createElement(o.Z,{title:u,className:"language-tsx test"},e.example))))}},86924:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},exampleString:function(){return d},default:function(){return p}});var s=t(87462),o=t(63366),r=(t(67294),t(3905)),a=t(77800),l=["components"],m={},i=void 0,c={unversionedId:"Engineering/FrontEnd/CustomHooks/useAutoScrollToElement",id:"Engineering/FrontEnd/CustomHooks/useAutoScrollToElement",isDocsHomePage:!1,title:"useAutoScrollToElement",description:"export const exampleString = `const [scrollRef, messageRef, scrollToSelectedMessage] = useAutoScrollToElement()\\n",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useAutoScrollToElement.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useAutoScrollToElement",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useAutoScrollToElement",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useAttachments",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useAttachments"},next:{title:"useDestructiveAlert",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useDestructiveAlert"}},u=[],d="const [scrollRef, messageRef, scrollToSelectedMessage] = useAutoScrollToElement()\n\nuseEffect(() => {\n    if (!loading && isTransitionComplete) {\n      scrollToSelectedMessage()\n    }\n}, [loading, isTransitionComplete, scrollToSelectedMessage])\n\nexport const renderMessages = (message: SecureMessagingMessageAttributes, messagesById: SecureMessagingMessageMap, thread: Array<number>, messageRef?: Ref<View>): ReactNode => {\n  const threadMessages = thread.map((messageID) => messagesById[messageID]).sort((message1, message2) => (message1.sentDate < message2.sentDate ? -1 : 1))\n  return threadMessages.map(\n    (m) =>\n      m &&\n      m.messageId && (\n        <CollapsibleMessage\n          key={m.messageId}\n          message={m}\n          isInitialMessage={m.messageId === message.messageId}\n          collapsibleMessageRef={m.messageId === message.messageId ? messageRef : undefined}\n        />\n      ),\n  )\n}\n\nreturn (\n<>\n    <VAScrollView {...testIdProps('ViewMessage-page')} scrollViewRef={scrollRef}>\n    <Box mt={theme.dimensions.standardMarginBetween} mb={theme.dimensions.condensedMarginBetween}>\n        <Box borderColor={'primary'} borderBottomWidth={'default'} p={theme.dimensions.cardPadding}>\n        <TextView variant=\"BitterBoldHeading\" accessibilityRole={'header'}>\n            {formatSubject(category, subject, t)}\n        </TextView>\n        </Box>\n        {renderMessages(message, messagesById, thread, messageRef)}\n    </Box>\n    {replyExpired && (\n        <Box mt={theme.dimensions.standardMarginBetween} mx={theme.dimensions.gutter} mb={theme.dimensions.contentMarginBottom}>\n        <AlertBox border={'warning'} title={t('secureMessaging.reply.youCanNoLonger')} text={t('secureMessaging.reply.olderThan45Days')}>\n            <Box mt={theme.dimensions.standardMarginBetween}>\n            <VAButton\n                label={t('secureMessaging.composeMessage.new')}\n                onPress={onPressCompose}\n                buttonType={'buttonPrimary'}\n                a11yHint={t('secureMessaging.composeMessage.new.a11yHint')}\n            />\n            </Box>\n        </AlertBox>\n        </Box>\n    )}\n    </VAScrollView>\n    {!replyExpired && <ReplyMessageFooter messageID={messageID} />}\n</>\n)",g={toc:u,exampleString:d};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{componentName:"useAutoScrollToElement",example:d,mdxType:"HooksInfo"}))}p.isMDXComponent=!0}}]);