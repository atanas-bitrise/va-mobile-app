"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9818],{32666:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(67294),r=t(97405),l=t(22808),s=t(30433),a=t(41284),i=t(36005);const p=e=>{let{props:n}=e;return n?o.createElement(o.Fragment,null,i.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((e=>o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},n[e].type?.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))))))):null};function m(e){const n=(0,a.N)(e.componentName),{description:t,displayName:i,props:m}=n[0],c=`How to use the ${i} component`,d=`Full code for the ${i} component`;return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(l.Z,null,o.createElement(s.Z,{value:"props",label:"Properties"},o.createElement(p,{props:m})),o.createElement(s.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:c,className:"language-tsx test"},e.example)),o.createElement(s.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:d,className:"language-tsx"},e.codeString)),o.createElement(s.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,n,t)=>{t.d(n,{N:()=>r});var o=t(52426);const r=e=>(0,o.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((n=>n.displayName===e))},14476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>h,exampleString:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));t(8209),t(97405);const l="import { ViewStyle } from 'react-native'\nimport LottieView from 'lottie-react-native'\nimport React, { FC } from 'react'\n\nimport { Box, TextView, VAScrollView } from 'components'\nimport { useTheme } from 'utils/hooks'\nimport colors from 'styles/themes/VAColors'\n\nexport type LoadingComponentProps = {\n  /** Text to be shown under the spinner */\n  text?: string\n  /** AccessibilityLabel for the text */\n  a11yLabel?: string\n  /** Param to show the spinner icon only and not the full page with text */\n  justTheSpinnerIcon?: boolean\n  /** spinner height*/\n  spinnerHeight?: number\n  /** spinner width */\n  spinnerWidth?: number\n  /** Hex string to set the spinner color*/\n  spinnerColor?: string\n}\n\n/**A common component to show a loading spinner */\nconst LoadingComponent: FC<LoadingComponentProps> = ({ text, a11yLabel, justTheSpinnerIcon, spinnerHeight, spinnerWidth, spinnerColor }) => {\n  const theme = useTheme()\n\n  const scrollStyles: ViewStyle = {\n    flexGrow: 1,\n    justifyContent: 'center',\n  }\n\n  const spinnerStyle: ViewStyle = {\n    height: spinnerHeight || 50,\n    width: spinnerWidth || 50,\n    alignContent: 'center',\n  }\n\n  const getSpinner = () => {\n    return (\n      <LottieView\n        source={require('./va-spinner.json')}\n        autoPlay\n        loop\n        style={spinnerStyle}\n        speed={0.8}\n        colorFilters={[\n          {\n            keypath: 'Shape Layer 9',\n            color: spinnerColor || colors.primary,\n          },\n          {\n            keypath: 'Shape Layer 11',\n            color: spinnerColor || colors.primary,\n          },\n        ]}\n      />\n    )\n  }\n\n  return (\n    <>\n      {justTheSpinnerIcon ? (\n        <Box alignItems=\"center\" justifyContent=\"center\">\n          {getSpinner()}\n        </Box>\n      ) : (\n        <VAScrollView contentContainerStyle={scrollStyles}>\n          <Box justifyContent=\"center\" mx={theme.dimensions.gutter} mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} alignItems={'center'}>\n            {getSpinner()}\n            <Box mt={theme.dimensions.condensedMarginBetween}>\n              <TextView textAlign={'center'} variant=\"MobileBody\" accessibilityLabel={a11yLabel}>\n                {text}\n              </TextView>\n            </Box>\n          </Box>\n        </VAScrollView>\n      )}\n    </>\n  )\n}\n\nexport default LoadingComponent\n";var s=t(32666);const a={},i=void 0,p={unversionedId:"Flagship design library/Components/Alerts and Progress/LoadingComponent",id:"Flagship design library/Components/Alerts and Progress/LoadingComponent",title:"LoadingComponent",description:"",source:"@site/docs/Flagship design library/Components/Alerts and Progress/LoadingComponent.mdx",sourceDirName:"Flagship design library/Components/Alerts and Progress",slug:"/Flagship design library/Components/Alerts and Progress/LoadingComponent",permalink:"/va-mobile-app/docs/Flagship design library/Components/Alerts and Progress/LoadingComponent",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlertBox",permalink:"/va-mobile-app/docs/Flagship design library/Components/Alerts and Progress/AlertBox"},next:{title:"MessageAlert",permalink:"/va-mobile-app/docs/Flagship design library/Components/Alerts and Progress/MessageAlert"}},m={},c=[],d="<LoadingComponent text={'secureMessaging.formMessage.saveDraft.loading'} />",u={toc:c,exampleString:d},g="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{componentName:"LoadingComponent",example:d,codeString:l,mdxType:"ComponentTopInfo"}))}h.isMDXComponent=!0}}]);