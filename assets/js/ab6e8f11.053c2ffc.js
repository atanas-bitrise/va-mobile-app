"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3463],{32666:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),o=n(97405),i=n(22808),r=n(30433),s=n(41284),l=n(36005);const c=e=>{let{props:t}=e;return t?a.createElement(a.Fragment,null,l.ZP.isEmpty(t)?a.createElement("pre",{className:"preText"},"This component does not have props defined"):a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Default Value"),a.createElement("th",null,"Required"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,Object.keys(t).map((e=>a.createElement("tr",{key:e},a.createElement("td",null,a.createElement("code",null,e)),a.createElement("td",{style:{minWidth:200}},t[e].type?.name),a.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),a.createElement("td",null,t[e].required?"Yes":"No"),a.createElement("td",null,t[e].description))))))):null};function m(e){const t=(0,s.N)(e.componentName),{description:n,displayName:l,props:m}=t[0],p=`How to use the ${l} component`,u=`Full code for the ${l} component`;return a.createElement(a.Fragment,null,n,a.createElement("br",null),a.createElement("br",null),a.createElement(i.Z,null,a.createElement(r.Z,{value:"props",label:"Properties"},a.createElement(c,{props:m})),a.createElement(r.Z,{value:"example",label:"Example"},e.example&&a.createElement(o.Z,{title:p,className:"language-tsx test"},e.example)),a.createElement(r.Z,{value:"code",label:"Source Code"},e.codeString&&a.createElement(o.Z,{title:u,className:"language-tsx"},e.codeString)),a.createElement(r.Z,{value:"accessibility",label:"Accessibility"},a.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},41284:(e,t,n)=>{n.d(t,{N:()=>o});var a=n(52426);const o=e=>(0,a.ZP)()["docusaurus-plugin-react-docgen-typescript"].default.filter((t=>t.displayName===e))},66483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,exampleString:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(8209),n(97405);const i="import { AccessibilityRole, AccessibilityState, TouchableWithoutFeedback } from 'react-native'\nimport { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/src/types'\nimport { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native'\nimport { SafeAreaView } from 'react-native-safe-area-context'\nimport { TFunction } from 'i18next'\nimport { useTranslation } from 'react-i18next'\nimport React, { FC } from 'react'\nimport styled from 'styled-components'\n\nimport { NAMESPACE } from 'constants/namespaces'\nimport { VA_ICON_MAP } from './VAIcon'\nimport { a11yValueProp, testIdProps } from 'utils/accessibility'\nimport { themeFn } from 'utils/theme'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport VAIconWithText, { VAIconWithTextProps } from './VAIconWithText/VAIconWithText'\n\ntype TabBarRoute = {\n  key: string\n  name: string\n}\n\n/**\n *  Signifies the props that need to be passed in to {@link NavigationTabBar}\n */\nexport type NavigationTabBarProps = {\n  /** the tab navigators current state */\n  state: TabNavigationState<ParamListBase>\n\n  /** the tab navigators navigation helpers */\n  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>\n\n  /** useTranslations t function to translate the labels */\n  translation: TFunction\n}\n\nconst StyledSafeAreaView = styled(SafeAreaView)`\n  background-color: ${themeFn((theme) => theme.colors.background.navButton)};\n`\n/**Component for the bottom tab navigation*/\nconst NavigationTabBar: FC<NavigationTabBarProps> = ({ state, navigation, translation }) => {\n  const theme = useTheme()\n  const { t } = useTranslation(NAMESPACE.COMMON)\n\n  const onPress = (route: TabBarRoute, isFocused: boolean): void => {\n    const event = navigation.emit({\n      type: 'tabPress',\n      target: route.key,\n      canPreventDefault: true,\n    })\n\n    if (!isFocused && !event.defaultPrevented) {\n      navigation.navigate(route.name)\n    }\n  }\n\n  const onLongPress = (route: TabBarRoute): void => {\n    navigation.emit({\n      type: 'tabLongPress',\n      target: route.key,\n    })\n  }\n\n  return (\n    <StyledSafeAreaView edges={['bottom']}>\n      <Box\n        flexDirection=\"row\"\n        backgroundColor={'navButton'}\n        height={theme.dimensions.navBarHeight}\n        borderTopColor=\"primary\"\n        borderTopWidth={theme.dimensions.borderWidth}\n        accessibilityRole=\"toolbar\">\n        {state.routes.map((route: TabBarRoute, index: number) => {\n          const isFocused = state.index === index\n          const routeName = route.name.replace('Tab', '')\n          const lowerCaseRoute = routeName.toLowerCase()\n          // TODO: remove this conditional once all tab names have been moved to common.json\n          const translatedName = ['payments', 'benefits'].includes(lowerCaseRoute) ? translation(`common:${lowerCaseRoute}.title`) : translation(`${routeName.toLowerCase()}:title`)\n\n          type TouchableProps = {\n            key: string\n            onPress: () => void\n            onLongPress: () => void\n            accessibilityRole: AccessibilityRole\n            accessibilityState: AccessibilityState\n            accessible: boolean\n          }\n\n          const props: TouchableProps = {\n            key: route.name,\n            onPress: (): void => onPress(route as TabBarRoute, isFocused),\n            onLongPress: (): void => onLongPress(route as TabBarRoute),\n            accessibilityRole: 'tab',\n            accessibilityState: isFocused ? { selected: true } : { selected: false },\n            accessible: true,\n          }\n\n          const iconProps: VAIconWithTextProps = {\n            name: `${routeName}${isFocused ? 'Selected' : 'Unselected'}` as keyof typeof VA_ICON_MAP,\n            fill: isFocused ? 'active' : 'inactive',\n            label: routeName,\n            labelColor: isFocused ? 'textWithIconButton' : 'textWithIconButtonInactive',\n          }\n\n          return (\n            <TouchableWithoutFeedback\n              {...testIdProps(translatedName)}\n              {...props}\n              {...a11yValueProp({ text: t('listPosition', { position: index + 1, total: state.routes.length }) })}>\n              <Box flex={1} display=\"flex\" flexDirection=\"column\" mt={7}>\n                <Box alignSelf=\"center\" position=\"absolute\" mt={theme.dimensions.buttonBorderWidth}>\n                  <VAIconWithText {...iconProps} />\n                </Box>\n              </Box>\n            </TouchableWithoutFeedback>\n          )\n        })}\n      </Box>\n    </StyledSafeAreaView>\n  )\n}\n\nexport default NavigationTabBar\n";var r=n(32666);const s={},l=void 0,c={unversionedId:"Flagship design library/Components/Navigation/Primary/NavigationTabBar",id:"Flagship design library/Components/Navigation/Primary/NavigationTabBar",title:"NavigationTabBar",description:"",source:"@site/docs/Flagship design library/Components/Navigation/Primary/NavigationTabBar.mdx",sourceDirName:"Flagship design library/Components/Navigation/Primary",slug:"/Flagship design library/Components/Navigation/Primary/NavigationTabBar",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Primary/NavigationTabBar",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HeaderTitle",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Primary/HeaderTitle"},next:{title:"Secondary navigation",permalink:"/va-mobile-app/docs/Flagship design library/Components/Navigation/Secondary/"}},m={},p=[],u='<>\n  <TabNav.Navigator \n  tabBar={(props): \n  React.ReactNode => <NavigationTabBar {...props} translation={t} />} \n  initialRouteName="HomeTab" \n  screenOptions={{ headerShown: false }}>\n        <TabNav.Screen name="HomeTab" component={HomeScreen} options={{ title: t(\'home:title\') }} />\n        <TabNav.Screen name="BenefitsTab" component={ClaimsScreen} options={{ title: t(\'common:benefits.title\') }} />\n        <TabNav.Screen name="HealthTab" component={HealthScreen} options={{ title: t(\'health:title\') }} />\n        <TabNav.Screen name="ProfileTab" component={ProfileScreen} options={{ title: t(\'profile:title\') }} />\n  </TabNav.Navigator>\n</>',d={toc:p,exampleString:u},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{componentName:"NavigationTabBar",example:u,codeString:i,mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);