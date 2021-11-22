"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5027],{3079:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},exampleString:function(){return p},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return l}});var s=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(9055),n(8909)),r=["components"],m={},c=void 0,d={unversionedId:"FrontEnd/ComponentsSection/MessageList",id:"FrontEnd/ComponentsSection/MessageList",isDocsHomePage:!1,title:"MessageList",description:"",source:"@site/docs/FrontEnd/ComponentsSection/MessageList.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/MessageList",permalink:"/docs/FrontEnd/ComponentsSection/MessageList",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageAlert",permalink:"/docs/FrontEnd/ComponentsSection/MessageAlert"},next:{title:"MessagesCountTag",permalink:"/docs/FrontEnd/ComponentsSection/MessagesCountTag"}},l=[],p="<MessageList items={getMessagesListItems()} title={folderName} />",g={toc:l,exampleString:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{componentName:"MessageList",example:p,codeString:"import React, { FC } from 'react'\n\nimport { List, ListItemObj, ListProps, TextLineWithIconProps } from './index'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { READ } from '../constants/secureMessaging'\nimport { TextLineWithIcon } from './TextLineWithIcon'\nimport { generateTestIDForTextIconList } from 'utils/common'\nimport { useTheme, useTranslation } from 'utils/hooks'\nimport Box from './Box'\nimport MessagesSentReadTag from './MessagesSentReadTag'\n\n/**\n * Signifies each item in the list of items in {@link MessageListProps}\n */\nexport type MessageListItemObj = {\n  /** lines of text to display */\n  textLinesWithIcon: Array<TextLineWithIconProps>\n  /** Tells if one is displaying sent folder messages list - needed for READ tag display conditional */\n  isSentFolder: boolean\n  /** Attribute for whether recipient has read user's sent message (Sent folder) OR whether user has read received message (Inbox || Folders other than 'Sent')\n   * Usage depends on which folder you're in */\n  readReceipt?: string\n} & Partial<ListItemObj>\n\n/**\n * Props for {@link MessageList}\n */\nexport type MessageListProps = {\n  /** list of items of which a button will be rendered per item */\n  items: Array<MessageListItemObj>\n} & Partial<ListProps>\n\n/**\n * Display a list of buttons with text and optional actions\n */\nconst MessageList: FC<MessageListProps> = ({ items, title, titleA11yLabel }) => {\n  const t = useTranslation(NAMESPACE.HEALTH)\n  const themes = useTheme()\n  const listItemObjs: Array<ListItemObj> = items.map((item) => {\n    // Move all of the properties except text lines to the standard list item object\n    const { textLinesWithIcon, testId, ...listItemObj } = item\n    let testIdToUse = testId ? testId : generateTestIDForTextIconList(textLinesWithIcon, t)\n\n    // We want to display black 'READ' tag only for sent messages that have been seen by the recipients\n    const isSentReadTag = item.isSentFolder && item.readReceipt === READ\n    const sentReadTagA11y = isSentReadTag ? t('secureMessaging.folders.sent.read.a11y') : ''\n\n    const content = (\n      // Package individual textLineWithIcon components together into one message\n      <Box flex={1} mr={themes.dimensions.gutter}>\n        <Box flexDirection=\"column\" mb={themes.dimensions.navigationBarIconMarginTop}>\n          {textLinesWithIcon?.map((textObj: TextLineWithIconProps, index: number) => {\n            return <TextLineWithIcon key={index} {...textObj} />\n          })}\n          {isSentReadTag && (\n            <Box ml={themes.dimensions.messageSentReadLeftMargin} mt={themes.dimensions.navigationBarIconMarginTop}>\n              <MessagesSentReadTag text={t('secureMessaging.folders.read.tag')} />\n            </Box>\n          )}\n        </Box>\n      </Box>\n    )\n\n    // Append accessibility label for Sent messages 'READ' tag\n    testIdToUse = `${testIdToUse} ${sentReadTagA11y}`.trim()\n\n    return { ...listItemObj, content, testId: testIdToUse }\n  })\n\n  return <List items={listItemObjs} title={title} titleA11yLabel={titleA11yLabel} />\n}\n\nexport default MessageList\n",mdxType:"ComponentTopInfo"}))}u.isMDXComponent=!0}}]);