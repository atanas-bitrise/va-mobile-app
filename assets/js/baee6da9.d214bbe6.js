"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6683],{38909:function(n,e,t){t.d(e,{Z:function(){return p}});var i=t(67294),o=t(19055),r=t(26396),l=t(58215),a=t(82224),s=t(36005),c=function(n){var e=n.props;return e?i.createElement(i.Fragment,null,s.ZP.isEmpty(e)?i.createElement("pre",{className:"preText"},"This component does not have props defined"):i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default Value"),i.createElement("th",null,"Required"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,Object.keys(e).map((function(n){var t;return i.createElement("tr",{key:n},i.createElement("td",null,i.createElement("code",null,n)),i.createElement("td",{style:{minWidth:200}},null==(t=e[n].type)?void 0:t.name),i.createElement("td",null,e[n].defaultValue&&e[n].defaultValue.value.toString()),i.createElement("td",null,e[n].required?"Yes":"No"),i.createElement("td",null,e[n].description))}))))):null};function p(n){var e=(0,a.N)(n.componentName)[0],t=e.description,s=e.displayName,p=e.props,u="How to use the "+s+" component",m="Full code for the "+s+" component";return i.createElement(i.Fragment,null,t,i.createElement("br",null),i.createElement("br",null),i.createElement(r.Z,null,i.createElement(l.Z,{value:"props",label:"Properties"},i.createElement(c,{props:p})),i.createElement(l.Z,{value:"example",label:"Example"},n.example&&i.createElement(o.Z,{title:u,className:"language-tsx test"},n.example)),i.createElement(l.Z,{value:"code",label:"Source Code"},n.codeString&&i.createElement(o.Z,{title:m,className:"language-tsx"},n.codeString)),i.createElement(l.Z,{value:"accessibility",label:"Accessibility"},i.createElement("pre",{className:"preText"},n.accessibilityInfo))))}},13627:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return k},exampleString:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),l=(t(19055),t(38909)),a=["components"],s={},c=void 0,p={unversionedId:"Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickForActionLink",id:"Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickForActionLink",title:"ClickForActionLink",description:"export const exampleString = `<ClickForActionLink",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickForActionLink.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Buttons and Links",slug:"/Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickForActionLink",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickForActionLink",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BackButton",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/BackButton"},next:{title:"ClickToCallPhoneNumber",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber"}},u=[],m="<ClickForActionLink \ndisplayedText={'text displayed'}\na11yLabel={'for the voiceover'}\nnumberOrUrlLink={'https://www.google.com'} \nlinkType={LinkTypeOptionsConstants.url} />\n\n<ClickForActionLink \ndisplayedText={'text displayed'}\na11yLabel={'for the voiceover'}\nnumberOrUrlLink={'https://www.google.com'} \nlinkType={LinkTypeOptionsConstants.url} \nlinkUrlIconType={LinkUrlIconType.Arrow} />",d={toc:u,exampleString:m};function k(n){var e=n.components,t=(0,o.Z)(n,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{componentName:"ClickForActionLink",example:m,codeString:"import { AccessibilityProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'\nimport Box from './Box'\nimport React, { FC } from 'react'\n\nimport { addToCalendar, checkCalendarPermission, requestCalendarPermission } from 'utils/rnCalendar'\nimport { useExternalLink, useTheme } from 'utils/hooks'\nimport TextView, { TextViewProps } from './TextView'\nimport VAIcon, { VA_ICON_MAP } from './VAIcon'\n\n/** Icon type for links, defaults to Chat */\nexport enum LinkUrlIconType {\n  /** Signifies icon with chat bubbles */\n  Chat = 'Chat',\n  /** Signifies icon with right pointing arrow */\n  Arrow = 'Arrow',\n}\n\nexport const LinkTypeOptionsConstants: {\n  text: LinkTypeOptions\n  call: LinkTypeOptions\n  callTTY: LinkTypeOptions\n  url: LinkTypeOptions\n  calendar: LinkTypeOptions\n  directions: LinkTypeOptions\n  externalLink: LinkTypeOptions\n} = {\n  text: 'text',\n  call: 'call',\n  callTTY: 'callTTY',\n  url: 'url',\n  calendar: 'calendar',\n  directions: 'directions',\n  externalLink: 'externalLink',\n}\ntype LinkTypeOptions = 'text' | 'call' | 'callTTY' | 'url' | 'calendar' | 'directions' | 'externalLink'\n\nexport type CalendarMetaData = {\n  title: string\n  startTime: number\n  endTime: number\n  location: string\n}\n\nexport type ActionLinkMetaData = CalendarMetaData\n\n/**\n *  Signifies the props that need to be passed in to {@link ClickForActionLink}\n */\nexport type LinkButtonProps = AccessibilityProps & {\n  /** phone number or text for url that is displayed to the user, may be different than actual number or url used */\n  displayedText: string\n\n  /** string signifying the type of link it is (click to call/text/go to website/add to calendar) */\n  linkType: LinkTypeOptions\n\n  /** signifies actual link or number used for link, may be different than text displayed */\n  numberOrUrlLink?: string\n\n  /** signifies icon type of link */\n  linkUrlIconType?: LinkUrlIconType\n\n  /** object with additional data needed to perform the given action */\n  metaData?: ActionLinkMetaData\n\n  /** Accessibility label for the link, mandatory for every element with a link role */\n  a11yLabel: string\n\n  /** optional function to fire analytic events when the link is clicked */\n  fireAnalytic?: () => void\n}\n\n/**\n * Reusable component used for opening native calling app, texting app, or opening a url in the browser\n */\nconst ClickForActionLink: FC<LinkButtonProps> = ({ displayedText, linkType, numberOrUrlLink, linkUrlIconType, metaData, a11yLabel, fireAnalytic, ...props }) => {\n  const theme = useTheme()\n  const launchExternalLink = useExternalLink()\n\n  const onCalendarPress = async (): Promise<void> => {\n    const { title, endTime, startTime, location } = metaData as ActionLinkMetaData\n\n    let hasPermission = await checkCalendarPermission()\n    if (!hasPermission) {\n      hasPermission = await requestCalendarPermission()\n    }\n\n    if (hasPermission) {\n      await addToCalendar(title, startTime, endTime, location)\n    }\n  }\n\n  const _onPress = async (): Promise<void> => {\n    if (fireAnalytic) {\n      fireAnalytic()\n    }\n\n    if (linkType === LinkTypeOptionsConstants.calendar) {\n      await onCalendarPress()\n      return\n    }\n\n    let openUrlText = numberOrUrlLink || ''\n    if (linkType === LinkTypeOptionsConstants.call || linkType === LinkTypeOptionsConstants.callTTY) {\n      openUrlText = `tel:${numberOrUrlLink}`\n    } else if (linkType === LinkTypeOptionsConstants.text) {\n      openUrlText = `sms:${numberOrUrlLink}`\n    }\n\n    // ex. numbers: tel:${8008271000}, sms:${8008271000} (number must have no dashes)\n    // ex. url: https://google.com (need https for url)\n    launchExternalLink(openUrlText)\n  }\n\n  const getUrlIcon = (): keyof typeof VA_ICON_MAP => {\n    switch (linkUrlIconType) {\n      case LinkUrlIconType.Arrow:\n        return 'RightArrowInCircle'\n      default:\n        return 'Chat'\n    }\n  }\n\n  const getIconName = (): keyof typeof VA_ICON_MAP => {\n    switch (linkType) {\n      case 'call':\n        return 'Phone'\n      case 'callTTY':\n        return 'PhoneTTY'\n      case 'text':\n        return 'Text'\n      case 'url':\n        return getUrlIcon()\n      case 'calendar':\n        return 'Calendar'\n      case 'directions':\n        return 'Directions'\n      case 'externalLink':\n        return 'ExternalLink'\n    }\n  }\n\n  const textViewProps: TextViewProps = {\n    color: 'link',\n    variant: 'MobileBody',\n    ml: 4,\n    textDecoration: 'underline',\n    textDecorationColor: 'link',\n  }\n\n  const pressableProps: TouchableWithoutFeedbackProps = {\n    onPress: _onPress,\n    accessibilityLabel: a11yLabel,\n    accessibilityRole: 'link',\n    accessible: true,\n    ...props,\n  }\n\n  return (\n    <TouchableWithoutFeedback {...pressableProps}>\n      <Box flexDirection={'row'} py={theme.dimensions.buttonPadding} alignItems={'center'}>\n        <VAIcon name={getIconName()} fill={'link'} width={25} height={25} />\n        <Box flexShrink={1}>\n          <TextView {...textViewProps}>{displayedText}</TextView>\n        </Box>\n      </Box>\n    </TouchableWithoutFeedback>\n  )\n}\n\nexport default ClickForActionLink\n",mdxType:"ComponentTopInfo"}))}k.isMDXComponent=!0}}]);