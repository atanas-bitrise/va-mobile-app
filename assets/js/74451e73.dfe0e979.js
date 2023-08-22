"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3831],{90266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));n(8209);const s={},l="Translations",o={unversionedId:"Engineering/FrontEnd/Internationalization/Translations",id:"Engineering/FrontEnd/Internationalization/Translations",title:"Translations",description:"Translation Files",source:"@site/docs/Engineering/FrontEnd/Internationalization/Translations.md",sourceDirName:"Engineering/FrontEnd/Internationalization",slug:"/Engineering/FrontEnd/Internationalization/Translations",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/Internationalization/Translations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating or Adding to an Existing Feature State",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature"},next:{title:"Unit Tests",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/Testing/UnitTesting"}},r={},p=[{value:"Translation Files",id:"translation-files",level:2},{value:"Files and Namespaces",id:"files-and-namespaces",level:3},{value:"Translation Keys",id:"translation-keys",level:3},{value:"Adding a New String",id:"adding-a-new-string",level:3},{value:"Using Translations",id:"using-translations",level:2},{value:"Strings With Parameters",id:"strings-with-parameters",level:3},{value:"Multiple Namespaces",id:"multiple-namespaces",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"translations"},"Translations"),(0,i.kt)("h2",{id:"translation-files"},"Translation Files"),(0,i.kt)("p",null,"All visible copy in the app should be located in language specific translation files to support the ability of the app to decide client side which language it will display. Translations are stored in JSON files located under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/translations/<language>")," and split into separate files by namespace."),(0,i.kt)("h3",{id:"files-and-namespaces"},"Files and Namespaces"),(0,i.kt)("p",null,"Within a language directory, the translation files are split into files for each namespace representing different sections of the app. There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"common"),' namespace used for strings used throughout the app like "Save" or "Cancel".'),(0,i.kt)("h3",{id:"translation-keys"},"Translation Keys"),(0,i.kt)("p",null,"Strings are identified in the app through a key associated with the value in their language file. This key must be consistent across all language files for their respective values, the key itself is not translated."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"claimPhase.details.phaseFive": "Complete",')),(0,i.kt)("p",null,"This is an example of a string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"claims")," namespace. The key is ",(0,i.kt)("inlineCode",{parentName:"p"},"claimPhase.details.phaseFive")," and the translated value is ",(0,i.kt)("inlineCode",{parentName:"p"},"Complete"),"."),(0,i.kt)("h3",{id:"adding-a-new-string"},"Adding a New String"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'If it is specific to a screen or will only be used within certain parts of the app (for example, "Take photos and upload to your claim") it should be placed in the file for the namespace associated with that copy.'),(0,i.kt)("li",{parentName:"ul"},'If it is used in a common component or will be used across the app in nonspecific contexts (for example "confirm" or "refreshes the page") then it should go in the ',(0,i.kt)("inlineCode",{parentName:"li"},"common")," namespace."),(0,i.kt)("li",{parentName:"ul"},"Maintain keys in alphabetical order within the JSON file.")),(0,i.kt)("h2",{id:"using-translations"},"Using Translations"),(0,i.kt)("p",null,"Translation values are accessed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"useTranslation")," hook. This hook creates a translation function for a namespace or list of namespaces provided as an argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { t } = useTranslation(NAMESPACE.COMMON)\n")),(0,i.kt)("p",null,"For basic usage, the translation function takes in the desired key as the only argument and will resolve to the display value associated with that key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"t('claimDetails.needHelp')\n")),(0,i.kt)("p",null,"This value can be used like any other string, either placed directly into a TextView component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<TextView variant=\"MobileBodyBold\" >\n  {t('claimDetails.needHelp')}\n</TextView>\n")),(0,i.kt)("p",null,"Or passed in as a prop to a component that will decide where and how to display it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<VAButton\n    label={t('fileUpload.submit')}\n    testID={t('fileUpload.submit')}\n    buttonType={ButtonTypesConstants.buttonPrimary}\n    a11yHint={t('fileUpload.uploadFileA11yHint')}\n/>\n")),(0,i.kt)("h3",{id:"strings-with-parameters"},"Strings With Parameters"),(0,i.kt)("p",null,"Sometimes text will not be static and includes values that are user, code, or API driven and cannot be added to the translation file itself. In the translated string in the translation files, the ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}")," notation provides a spot in the string to place dynamic values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"listPosition": "{{position}} of {{total}}",\n')),(0,i.kt)("p",null,"This allows this translation to take in two values, position and total that will be placed in the translated value. To use this with our translation function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"t('listPosition', { position: myPosition, total: totalEntries })\n")),(0,i.kt)("h3",{id:"multiple-namespaces"},"Multiple Namespaces"),(0,i.kt)("p",null,"To use multiple namespaces, either create another function with the desired namespace"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { t } = useTranslation(NAMESPACE.COMMON)\nconst { t: tCommon } = useTranslation(NAMESPACE.COMMON)\n")),(0,i.kt)("p",null,"or create one translation function for multiple namespaces where the usage will be prefixed with the desired namespace"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { t } = useTranslation([NAMESPACE.COMMON, NAMESPACE.HEALTH])\n\nconst myCommonString = t('health:key.in.health')\n")))}c.isMDXComponent=!0}}]);