"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7783],{38909:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(67294),r=t(19055),i=t(26396),a=t(58215),s=t(82224),l=t(36005),c=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,l.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function m(e){var n=(0,s.N)(e.componentName)[0],t=n.description,l=n.displayName,m=n.props,p="How to use the "+l+" component",u="Full code for the "+l+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(a.Z,{value:"props",label:"Properties"},o.createElement(c,{props:m})),o.createElement(a.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:p,className:"language-tsx test"},e.example)),o.createElement(a.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:u,className:"language-tsx"},e.codeString)),o.createElement(a.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},67917:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return h},exampleString:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=(t(19055),t(38909)),s=["components"],l={},c=void 0,m={unversionedId:"Engineering/FrontEnd/ComponentsSection/Form/FormAttachments",id:"Engineering/FrontEnd/ComponentsSection/Form/FormAttachments",title:"FormAttachments",description:"export const exampleString = `<FormAttachments",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Form/FormAttachments.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Form",slug:"/Engineering/FrontEnd/ComponentsSection/Form/FormAttachments",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Form/FormAttachments",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NetworkConnectionError",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Error/NetworkConnectionError"},next:{title:"FormWrapper",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Form/FormWrapper"}},p=[],u="<FormAttachments \nattachmentsList={[ { name: 'file.txt' }, { fileName: 'image.jpeg' } ]} \nremoveOnPress={() => {}} \nlargeButtonProps={{ label: 'add files', onPress: () => {} }} />",d={toc:p,exampleString:u};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{componentName:"FormAttachments",example:u,codeString:'import { Pressable } from \'react-native\'\nimport { useTranslation } from \'react-i18next\'\nimport React, { FC, ReactNode } from \'react\'\n\nimport { ImagePickerResponse } from \'react-native-image-picker/src/types\'\nimport _ from \'underscore\'\n\nimport { Box, ButtonTypesConstants, TextView, VAButton, VAButtonProps, VAIcon } from \'components/index\'\nimport { DocumentPickerResponse } from \'screens/ClaimsScreen/ClaimsStackScreens\'\nimport { NAMESPACE } from \'constants/namespaces\'\nimport { getFileDisplay } from \'utils/common\'\nimport { useRouteNavigation, useTheme } from \'utils/hooks\'\n\nexport type FormAttachmentsProps = {\n  /** header for page title display */\n  originHeader: string\n  /** callback called on click of remove link for an attachment */\n  removeOnPress?: (attachment: ImagePickerResponse | DocumentPickerResponse) => void\n  /** optional props for large button */\n  largeButtonProps?: Omit<VAButtonProps, \'iconProps\' | \'buttonType\'>\n  /** list of current attachments */\n  attachmentsList?: Array<ImagePickerResponse | DocumentPickerResponse>\n  /** optional a11y Hint */\n  a11yHint?: string\n}\n\n/**A common component for form attachments, displays Attachments heading with helper link, already attached items with remove option, and an optional large button. */\nconst FormAttachments: FC<FormAttachmentsProps> = ({ originHeader, removeOnPress, largeButtonProps, attachmentsList, a11yHint }) => {\n  const theme = useTheme()\n  const { t } = useTranslation(NAMESPACE.COMMON)\n  const { t: tFunction } = useTranslation()\n  const navigateTo = useRouteNavigation()\n\n  const renderFileNames = (): ReactNode => {\n    return _.map(attachmentsList || [], (attachment, index) => {\n      const { fileName, fileSize: formattedFileSize, fileSizeA11y } = getFileDisplay(attachment, tFunction, true)\n      const text = [fileName, formattedFileSize].join(\' \').trim()\n\n      return (\n        <Box\n          display="flex"\n          flexDirection="row"\n          justifyContent="space-between"\n          alignItems="center"\n          flexWrap="wrap"\n          mt={index !== 0 ? theme.dimensions.condensedMarginBetween : 0}\n          key={index}>\n          <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap" justifyContent="space-between">\n            <VAIcon name="PaperClip" width={16} height={16} fill="spinner" />\n            <TextView variant="MobileBodyBold" ml={theme.dimensions.textIconMargin} accessibilityLabel={fileSizeA11y ? [fileName, fileSizeA11y].join(\' \').trim() : undefined}>\n              {text}\n            </TextView>\n          </Box>\n\n          <Pressable\n            onPress={() => (removeOnPress ? removeOnPress(attachment) : {})}\n            accessible={true}\n            accessibilityRole="link"\n            accessibilityHint={t(\'remove.a11yHint\', { content: fileName })}\n            accessibilityLabel={t(\'remove\')}>\n            <Box display="flex" flexDirection="row" alignItems="center" minHeight={theme.dimensions.touchableMinHeight}>\n              <VAIcon name="Remove" {...iconProps} />\n              <TextView variant="HelperText" ml={theme.dimensions.textIconMargin} color="link" textDecoration="underline" textDecorationColor="link">\n                {t(\'remove\')}\n              </TextView>\n            </Box>\n          </Pressable>\n        </Box>\n      )\n    })\n  }\n\n  const iconProps = {\n    width: 16,\n    height: 16,\n    fill: \'link\',\n  }\n\n  const attachmentsDoNotExist = !attachmentsList || attachmentsList.length === 0\n\n  const goToFaq = navigateTo(\'AttachmentsFAQ\', { originHeader: originHeader })\n\n  return (\n    <Box>\n      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">\n        <TextView>{t(\'attachments\')}</TextView>\n        <Pressable onPress={goToFaq} accessible={true} accessibilityRole="link" accessibilityHint={a11yHint ? a11yHint : undefined} accessibilityLabel={t(\'howToAttachAFile\')}>\n          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" minHeight={theme.dimensions.touchableMinHeight}>\n            <VAIcon name="QuestionMark" {...iconProps} />\n            <TextView variant="HelperText" ml={theme.dimensions.textIconMargin} color="link" textDecoration="underline" textDecorationColor="link">\n              {t(\'howToAttachAFile\')}\n            </TextView>\n          </Box>\n        </Pressable>\n      </Box>\n      <Box mt={theme.dimensions.standardMarginBetween} mb={attachmentsDoNotExist || !largeButtonProps ? 0 : theme.dimensions.standardMarginBetween}>\n        {renderFileNames()}\n      </Box>\n      {!!largeButtonProps && <VAButton {...largeButtonProps} buttonType={ButtonTypesConstants.buttonSecondary} iconProps={{ ...iconProps, fill: \'active\', name: \'PaperClip\' }} />}\n    </Box>\n  )\n}\n\nexport default FormAttachments\n',mdxType:"ComponentTopInfo"}))}h.isMDXComponent=!0}}]);