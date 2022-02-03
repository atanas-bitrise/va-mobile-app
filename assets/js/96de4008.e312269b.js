"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3342],{60433:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return u},exampleString:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),s=(t(19055),t(38909)),a=["components"],l={},c=void 0,p={unversionedId:"Engineering/FrontEnd/ComponentsSection/ClickForActionLink",id:"Engineering/FrontEnd/ComponentsSection/ClickForActionLink",isDocsHomePage:!1,title:"ClickForActionLink",description:"export const exampleString = `<ClickForActionLink",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/ClickForActionLink.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/ClickForActionLink",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ClickForActionLink",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Box",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/Box"},next:{title:"ClickToCallPhoneNumber",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber"}},d=[],k="<ClickForActionLink \ndisplayedText={'text displayed'} \nnumberOrUrlLink={'https://www.google.com'} \nlinkType={LinkTypeOptionsConstants.url} />\n\n<ClickForActionLink \ndisplayedText={'text displayed'} \nnumberOrUrlLink={'https://www.google.com'} \nlinkType={LinkTypeOptionsConstants.url} \nlinkUrlIconType={LinkUrlIconType.Arrow} />",m={toc:d,exampleString:k};function u(n){var e=n.components,t=(0,o.Z)(n,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{componentName:"ClickForActionLink",example:k,codeString:"import { AccessibilityProps, TouchableWithoutFeedback } from 'react-native'\nimport Box from './Box'\nimport React, { FC } from 'react'\n\nimport { addToCalendar, checkCalendarPermission, requestCalendarPermission } from 'utils/rnCalendar'\nimport { generateTestID } from 'utils/common'\nimport { testIdProps } from 'utils/accessibility'\nimport { useExternalLink, useTheme } from 'utils/hooks'\nimport TextView, { TextViewProps } from './TextView'\nimport VAIcon, { VA_ICON_MAP } from './VAIcon'\n\n/** Icon type for links, defaults to Chat */\nexport enum LinkUrlIconType {\n  /** Signifies icon with chat bubbles */\n  Chat = 'Chat',\n  /** Signifies icon with right pointing arrow */\n  Arrow = 'Arrow',\n}\n\nexport const LinkTypeOptionsConstants: {\n  text: LinkTypeOptions\n  call: LinkTypeOptions\n  callTTY: LinkTypeOptions\n  url: LinkTypeOptions\n  calendar: LinkTypeOptions\n  directions: LinkTypeOptions\n} = {\n  text: 'text',\n  call: 'call',\n  callTTY: 'callTTY',\n  url: 'url',\n  calendar: 'calendar',\n  directions: 'directions',\n}\ntype LinkTypeOptions = 'text' | 'call' | 'callTTY' | 'url' | 'calendar' | 'directions'\n\nexport type CalendarMetaData = {\n  title: string\n  startTime: number\n  endTime: number\n  location: string\n}\n\nexport type ActionLinkMetaData = CalendarMetaData\n\n/**\n *  Signifies the props that need to be passed in to {@link ClickForActionLink}\n */\nexport type LinkButtonProps = AccessibilityProps & {\n  /** phone number or text for url that is displayed to the user, may be different than actual number or url used */\n  displayedText: string\n\n  /** string signifying the type of link it is (click to call/text/go to website/add to calendar) */\n  linkType: LinkTypeOptions\n\n  /** signifies actual link or number used for link, may be different than text displayed */\n  numberOrUrlLink?: string\n\n  /** signifies icon type of link */\n  linkUrlIconType?: LinkUrlIconType\n\n  /** object with additional data needed to perform the given action */\n  metaData?: ActionLinkMetaData\n\n  /** optional testID */\n  testID?: string\n\n  /** optional function to fire analytic events when the link is clicked */\n  fireAnalytic?: () => void\n}\n\n/**\n * Reusable component used for opening native calling app, texting app, or opening a url in the browser\n */\nconst ClickForActionLink: FC<LinkButtonProps> = ({ displayedText, linkType, numberOrUrlLink, linkUrlIconType, metaData, testID, fireAnalytic, ...props }) => {\n  const theme = useTheme()\n  const launchExternalLink = useExternalLink()\n\n  const onCalendarPress = async (): Promise<void> => {\n    const { title, endTime, startTime, location } = metaData as ActionLinkMetaData\n\n    let hasPermission = await checkCalendarPermission()\n    if (!hasPermission) {\n      hasPermission = await requestCalendarPermission()\n    }\n\n    if (hasPermission) {\n      await addToCalendar(title, startTime, endTime, location)\n    }\n  }\n\n  const _onPress = async (): Promise<void> => {\n    if (fireAnalytic) {\n      fireAnalytic()\n    }\n\n    if (linkType === LinkTypeOptionsConstants.calendar) {\n      await onCalendarPress()\n      return\n    }\n\n    let openUrlText = numberOrUrlLink || ''\n    if (linkType === LinkTypeOptionsConstants.call || linkType === LinkTypeOptionsConstants.callTTY) {\n      openUrlText = `tel:${numberOrUrlLink}`\n    } else if (linkType === LinkTypeOptionsConstants.text) {\n      openUrlText = `sms:${numberOrUrlLink}`\n    }\n\n    // ex. numbers: tel:${8008271000}, sms:${8008271000} (number must have no dashes)\n    // ex. url: https://google.com (need https for url)\n    launchExternalLink(openUrlText)\n  }\n\n  const getUrlIcon = (): keyof typeof VA_ICON_MAP => {\n    switch (linkUrlIconType) {\n      case LinkUrlIconType.Arrow:\n        return 'RightArrowInCircle'\n      default:\n        return 'Chat'\n    }\n  }\n\n  const getIconName = (): keyof typeof VA_ICON_MAP => {\n    switch (linkType) {\n      case 'call':\n        return 'Phone'\n      case 'callTTY':\n        return 'PhoneTTY'\n      case 'text':\n        return 'Text'\n      case 'url':\n        return getUrlIcon()\n      case 'calendar':\n        return 'Calendar'\n      case 'directions':\n        return 'Directions'\n    }\n  }\n\n  const textViewProps: TextViewProps = {\n    color: 'link',\n    variant: 'MobileBody',\n    ml: 4,\n    textDecoration: 'underline',\n    textDecorationColor: 'link',\n  }\n\n  return (\n    <TouchableWithoutFeedback onPress={_onPress} {...testIdProps(testID ? testID : generateTestID(displayedText, ''))} accessibilityRole=\"link\" accessible={true} {...props}>\n      <Box flexDirection={'row'} py={theme.dimensions.buttonPadding} alignItems={'center'}>\n        <VAIcon name={getIconName()} fill={'link'} width={25} height={25} />\n        <Box flexShrink={1}>\n          <TextView {...textViewProps}>{displayedText}</TextView>\n        </Box>\n      </Box>\n    </TouchableWithoutFeedback>\n  )\n}\n\nexport default ClickForActionLink\n",mdxType:"ComponentTopInfo"}))}u.isMDXComponent=!0}}]);