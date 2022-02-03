"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2419],{26045:function(n,e,o){o.r(e),o.d(e,{contentTitle:function(){return a},default:function(){return g},exampleString:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=o(87462),t=o(63366),i=(o(67294),o(3905)),s=(o(19055),o(38909)),c=["components"],l={},a=void 0,p={unversionedId:"Engineering/FrontEnd/ComponentsSection/VAScrollView",id:"Engineering/FrontEnd/ComponentsSection/VAScrollView",title:"VAScrollView",description:"export const exampleString = `return (",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/VAScrollView.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/VAScrollView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/VAScrollView",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VAImage",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/VAImage"},next:{title:"useAccessibilityFocus",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useAccessibilityFocus"}},u=[],m="return (\n    <VAScrollView>\n        <Box />\n    </VAScrollView>\n)",d={toc:u,exampleString:m};function g(n){var e=n.components,o=(0,t.Z)(n,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"VAScrollView",example:m,codeString:"import { ScrollView, ScrollViewProps } from 'react-native'\nimport React, { FC, Ref } from 'react'\n\nimport { BackgroundVariant } from './Box'\nimport { useSafeAreaInsets } from 'react-native-safe-area-context'\nimport { useTheme } from '../utils/hooks'\n\nexport type VAScrollViewProps = {\n  /** Optional reference prop to determine scroll position */\n  scrollViewRef?: Ref<ScrollView>\n  /** optional background color to override the main background */\n  backgroundColor?: BackgroundVariant\n} & ScrollViewProps\n\n/**A common component that provides a scrollable view. Use this instead of ScrollView. This component is a wrapper for react-native ScrollView that has a scrollbar styling fix */\nconst VAScrollView: FC<VAScrollViewProps> = (props) => {\n  const insets = useSafeAreaInsets()\n  const theme = useTheme()\n\n  const style = {\n    paddingRight: insets.right,\n    paddingLeft: insets.left,\n    backgroundColor: props.backgroundColor ? props.backgroundColor : theme.colors.background.main,\n  }\n\n  return (\n    /**\n     * force scroll position by default to avoid visual bug where scrollbar appears in the center of a screen\n     * scrollIndicatorInsets is an iOS only prop, this bug only appears on iOS\n     */\n    <ScrollView ref={props.scrollViewRef} scrollIndicatorInsets={{ right: 1 }} {...props} style={style} />\n  )\n}\n\nexport default VAScrollView\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);