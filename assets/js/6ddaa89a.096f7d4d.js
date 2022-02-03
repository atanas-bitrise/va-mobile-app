"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3071],{59706:function(n,r,e){e.r(r),e.d(r,{contentTitle:function(){return c},default:function(){return u},exampleString:function(){return l},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return E}});var o=e(87462),t=e(63366),i=(e(67294),e(3905)),s=(e(19055),e(38909)),p=["components"],a={},c=void 0,m={unversionedId:"Engineering/FrontEnd/ComponentsSection/ErrorComponents/ErrorComponent",id:"Engineering/FrontEnd/ComponentsSection/ErrorComponents/ErrorComponent",isDocsHomePage:!1,title:"ErrorComponent",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/ErrorComponent.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/ErrorComponents",slug:"/Engineering/FrontEnd/ComponentsSection/ErrorComponents/ErrorComponent",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/ErrorComponent",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DowntimeError",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/DowntimeError"},next:{title:"NetworkConnectionError",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/NetworkConnectionError"}},E=[],l="<ErrorComponent screenID={ScreenIDTypesConstants.APPEAL_DETAILS_SCREEN_ID} />",C={toc:E,exampleString:l};function u(n){var r=n.components,e=(0,t.Z)(n,p);return(0,i.kt)("wrapper",(0,o.Z)({},C,e,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"ErrorComponent",example:l,codeString:"import React, { FC } from 'react'\n\nimport { CallHelpCenter, DowntimeError, NetworkConnectionError } from 'components'\nimport { CommonErrorTypesConstants } from 'constants/errors'\nimport { DowntimeScreenIDToFeature, ScreenIDTypes } from 'store/api/types'\nimport { ErrorsState } from 'store/slices'\nimport { RootState } from 'store'\nimport { useDowntime, useTranslation } from 'utils/hooks'\nimport { useSelector } from 'react-redux'\n\nexport type ErrorComponentProps = {\n  /**The screen id for the screen that has the errors*/\n  screenID: ScreenIDTypes\n  /** optional function called when the Try again button is pressed */\n  onTryAgain?: () => void\n}\n\n/**Main error handling component. This component will show the proper screen according to the type of error.*/\nconst ErrorComponent: FC<ErrorComponentProps> = (props) => {\n  const { errorsByScreenID, tryAgain: storeTryAgain } = useSelector<RootState, ErrorsState>((state) => state.errors)\n  const t = useTranslation()\n  const isInDowntime = useDowntime(DowntimeScreenIDToFeature[props.screenID])\n\n  const getSpecificErrorComponent: FC<ErrorComponentProps> = ({ onTryAgain, screenID }) => {\n    const tryAgain = onTryAgain ? onTryAgain : storeTryAgain\n    const errorType = errorsByScreenID[screenID] || ''\n\n    if (isInDowntime) {\n      return <DowntimeError screenID={screenID} />\n    }\n    // check which specific error occurred and return the corresponding error element\n    switch (errorType) {\n      case CommonErrorTypesConstants.NETWORK_CONNECTION_ERROR:\n        return <NetworkConnectionError onTryAgain={tryAgain} />\n      case CommonErrorTypesConstants.APP_LEVEL_ERROR:\n        return <CallHelpCenter />\n      case CommonErrorTypesConstants.APP_LEVEL_ERROR_WITH_REFRESH:\n        return <CallHelpCenter onTryAgain={tryAgain} />\n      case CommonErrorTypesConstants.APP_LEVEL_ERROR_HEALTH_LOAD:\n        return (\n          <CallHelpCenter\n            onTryAgain={tryAgain}\n            errorText={t('health:secureMessaging.sendError.ifTheAppStill')}\n            errorA11y={t('health:secureMessaging.sendError.ifTheAppStill.a11y')}\n            callPhone={t('common:8773270022.displayText')}\n          />\n        )\n      case CommonErrorTypesConstants.APP_LEVEL_ERROR_DISABILITY_RATING:\n        return (\n          <CallHelpCenter\n            titleText={t('profile:disabilityRating.errorTitle')}\n            titleA11yHint={t('profile:disabilityRating.errorTitleA11y')}\n            callPhone={t('profile:disabilityRating.errorPhoneNumber')}\n          />\n        )\n      case CommonErrorTypesConstants.APP_LEVEL_ERROR_VACCINE:\n        return <CallHelpCenter onTryAgain={tryAgain} titleText={t('common:errors.callHelpCenter.vaAppNotWorking')} callPhone={t('common:8006982411.displayText')} />\n      default:\n        return <CallHelpCenter onTryAgain={tryAgain} />\n    }\n  }\n\n  return getSpecificErrorComponent(props)\n}\n\nexport default ErrorComponent\n",mdxType:"ComponentTopInfo"}))}u.isMDXComponent=!0}}]);