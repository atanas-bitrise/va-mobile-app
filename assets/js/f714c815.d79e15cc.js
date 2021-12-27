"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1248],{8544:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return f},exampleString:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=(t(9055),t(8909)),s=["components"],c={},d=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/FocusedNavHeaderText",id:"Engineering/FrontEnd/ComponentsSection/FocusedNavHeaderText",title:"FocusedNavHeaderText",description:"export const exampleString = `useEffect(() => {",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/FocusedNavHeaderText.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/FocusedNavHeaderText",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/FocusedNavHeaderText",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DefaultList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/DefaultList"},next:{title:"FooterButton",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/FooterButton"}},p=[],m="useEffect(() => {\n    navigation.setOptions({\n        headerTitle: (headerTitle) => <FocusedNavHeaderText headerTitle={headerTitle.children} />,\n    })\n}, [navigation])",l={toc:p,exampleString:m};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{componentName:"FocusedNavHeaderText",example:m,codeString:"import { View } from 'react-native'\nimport { useFocusEffect } from '@react-navigation/native'\nimport React, { FC } from 'react'\n\nimport { useAccessibilityFocus } from 'utils/hooks'\nimport HeaderTitle from './HeaderTitle'\n\n/**\n *  Properties for {@link FocusedNavHeaderText}\n */\nexport type FocusedNavHeaderTextProps = {\n  /**sets the title's text */\n  headerTitle: string\n}\n\n/**\n * Component to use as a navigation header where accessibility focus is needed on the header in iOS on screen load\n */\nexport const FocusedNavHeaderText: FC<FocusedNavHeaderTextProps> = ({ headerTitle }) => {\n  const [focusRef, setFocus] = useAccessibilityFocus<View>()\n  useFocusEffect(setFocus)\n\n  return <HeaderTitle headerTitle={headerTitle} focusRef={focusRef} />\n}\n\nexport default FocusedNavHeaderText\n",mdxType:"ComponentTopInfo"}))}f.isMDXComponent=!0}}]);