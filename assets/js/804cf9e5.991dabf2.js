"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9114],{11784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(8209);const o={title:"Development Setup Process",sidebar_position:5},r="Development Setup Instructions",l={unversionedId:"Engineering/FrontEnd/DevSetupProcess",id:"Engineering/FrontEnd/DevSetupProcess",title:"Development Setup Process",description:"Prerequisites",source:"@site/docs/Engineering/FrontEnd/DevSetupProcess.md",sourceDirName:"Engineering/FrontEnd",slug:"/Engineering/FrontEnd/DevSetupProcess",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/DevSetupProcess",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Development Setup Process",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Debugging Tools",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/DebuggingToolsInstructions"},next:{title:"Downtime Messages",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/DowntimeMessages"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download and install the latest versions of the following IDEs and Native Hosts:",id:"download-and-install-the-latest-versions-of-the-following-ides-and-native-hosts",level:4},{value:"Depending on which IDE you are using install the following:",id:"depending-on-which-ide-you-are-using-install-the-following",level:4},{value:"ENV Variables Setup",id:"env-variables-setup",level:2},{value:"On your bash_profile or .zprofile add the following:",id:"on-your-bash_profile-or-zprofile-add-the-following",level:4},{value:"On your bashrc or .zshrc add the following:",id:"on-your-bashrc-or-zshrc-add-the-following",level:4},{value:"Github And Cloning Repo",id:"github-and-cloning-repo",level:2},{value:"With VSCode or IntelliJ IDEA Project Setup",id:"with-vscode-or-intellij-idea-project-setup",level:2},{value:"Download the files from Firebase",id:"download-the-files-from-firebase",level:3},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Add file to proper directory",id:"add-file-to-proper-directory",level:3},{value:"Android Setup",id:"android-setup",level:2},{value:"Emulator Setup:",id:"emulator-setup",level:3},{value:"Physical Device Setup:",id:"physical-device-setup",level:3},{value:"iPhone Setup",id:"iphone-setup",level:2},{value:"Simulator Setup",id:"simulator-setup",level:3},{value:"Physical Device",id:"physical-device",level:3}],s={toc:d},m="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"development-setup-instructions"},"Development Setup Instructions"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h4",{id:"download-and-install-the-latest-versions-of-the-following-ides-and-native-hosts"},"Download and install the latest versions of the following IDEs and Native Hosts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12"},"XCode"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"CocoaPods"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/#jdk17-mac"},"Java JDK")))),(0,n.kt)("h4",{id:"depending-on-which-ide-you-are-using-install-the-following"},"Depending on which IDE you are using install the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"VSCode"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/#section=mac"},"IntelliJ IDEA")))),(0,n.kt)("h2",{id:"env-variables-setup"},"ENV Variables Setup"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you are using z on Mac you will need to create the .zprofile and .zshrc files if they do not exists.\n"))),(0,n.kt)("h4",{id:"on-your-bash_profile-or-zprofile-add-the-following"},"On your bash_profile or .zprofile add the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"JAVA_HOME")," variable pointing to the java installed above example:")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export JAVA_HOME=$(/usr/libexec/java_home -v 15.0.2)")," make sure you use the version you installed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"NODE_OPTIONS")," this is to manage the node memory space:")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export NODE_OPTIONS=--max_old_space_size=8192")))),(0,n.kt)("h4",{id:"on-your-bashrc-or-zshrc-add-the-following"},"On your bashrc or .zshrc add the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Android specific vars for the ",(0,n.kt)("inlineCode",{parentName:"strong"},"ANDROID_HOME"),", ",(0,n.kt)("inlineCode",{parentName:"strong"},"platform-tools")," and ",(0,n.kt)("inlineCode",{parentName:"strong"},"cmdline-tools"),":")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export ANDROID_SDK=/Users/(your user folder)/Library/Android/sdk")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export ANDROID_HOME=$ANDROID_SDK")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin")," "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export PATH=$PATH:$ANDROID_HOME/platform-tools")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"The build of the app relies on a scripted creation of the .env file to run correctly. You will need to add the ",(0,n.kt)("inlineCode",{parentName:"strong"},"APP_CLIENT_SECRET")," var to work correctly:")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export APP_CLIENT_SECRET='client secret ask for this client key'"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"The app has a demo mode. To use demo mode the app reads the ",(0,n.kt)("inlineCode",{parentName:"strong"},"DEMO_PASSWORD")," var. You can set this to a blank password or assign any string to it:")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"export DEMO_PASSWORD=''")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"After adding the variables if you have a terminal open run source .zprofile and source .zshrc. If you do not have a terminal open than open a brand new terminal and the variables should be activated. Run which adb to make sure the android vars are working.\n"))),(0,n.kt)("h2",{id:"github-and-cloning-repo"},"Github And Cloning Repo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify you have access to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app"},"VAMobile")," repo.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure you have the SSH Github setup on your machine if not follow these instruction ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-server@3.5/authentication/connecting-to-github-with-ssh/about-ssh"},"Connect With SSH"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a folder where you wish to clone the repo to. Example (",(0,n.kt)("inlineCode",{parentName:"p"},"/Users/(your user folder/Workspace"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Using your prefer method or prefer IDE (example cmd line, Github Desktop, VSCode, or IntelliJ) clone the VAMobile repo to the folder created in the previouse step.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify you see a folder structure like ",(0,n.kt)("inlineCode",{parentName:"p"},"/Users/(your user folder/Workspace/va-mobile-app/VAMobile"),"."))),(0,n.kt)("h2",{id:"with-vscode-or-intellij-idea-project-setup"},"With VSCode or IntelliJ IDEA Project Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify you have access to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/project/va-mobile-app/settings/general/android:gov.va.mobileapp"},"Firebase console"),". If you don't, please reach out to VA Mobile engineering leadership./")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"With your prefer IDE Open the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Users/(your user folder/Workspace/va-mobile-app/VAMobile")," folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app")," directory add a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"google-services.json"),". You can download this ",(0,n.kt)("inlineCode",{parentName:"p"},"google-services.json")," file from the ",(0,n.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/project/va-mobile-app/settings/general/android:gov.va.mobileapp"},"firebase console"),', under the "your apps" section. You can also download the corresponding ',(0,n.kt)("inlineCode",{parentName:"p"},"GoogleService-Info.plist")," file you will need to later place in your in ",(0,n.kt)("inlineCode",{parentName:"p"},"VAMobile/ios"),"."))),(0,n.kt)("h3",{id:"download-the-files-from-firebase"},"Download the files from Firebase"),(0,n.kt)("h4",{id:"android"},"Android"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firebase console apps section where you can find the google services file for Android",src:a(64536).Z,width:"730",height:"312"})),(0,n.kt)("h4",{id:"ios"},"iOS"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firebase console apps section where you can find the google services file for iOS",src:a(577).Z,width:"729",height:"293"})),(0,n.kt)("h3",{id:"add-file-to-proper-directory"},"Add file to proper directory"),(0,n.kt)("p",null,"   ",(0,n.kt)("img",{alt:"Google services file",src:a(39617).Z,width:"355",height:"333"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open a terminal in the IDE and type ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn install")," and press enter to install the projects dependencies. This will create the ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," folder.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After dependencies are installed type ",(0,n.kt)("inlineCode",{parentName:"p"},"cd ios && pod install && cd ..")," and press enter to install pods on ios (This is done once unless you installed new dependencies that need pods created).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After pods are installed type ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn env:staging")," and press enter to setup the staging environment and create the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file. Verify the file has the client key and demo password that is in your .zshrc file."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Env file Location",src:a(37858).Z,width:"358",height:"125"}),"  "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"ENV File Content",src:a(55798).Z,width:"921",height:"340"})," "))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the env file is created type ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn bundle:ios")," and press enter to create the IOS bundle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the ios bundle is done tye ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn bundle:android")," and press enter to create the android bundle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the android bundle is done type ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start")," to start the metro development server."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Metro Started",src:a(979).Z,width:"395",height:"397"}),"  "))),(0,n.kt)("h2",{id:"android-setup"},"Android Setup"),(0,n.kt)("h3",{id:"emulator-setup"},"Emulator Setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open Android Studios and select to a open project."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Open Android Studio",src:a(56535).Z,width:"798",height:"437"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the popup window browse to ",(0,n.kt)("inlineCode",{parentName:"p"},"/Users/(your user folder/Workspace/va-mobile-app/VAMobile/android")," and select the android folder from the VAMobile project and press open."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Android Folder",src:a(83913).Z,width:"1069",height:"587"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After opening the android project you will need to sync the project with gradle. Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"File -> Sync Project With Gradle Files"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Sync With Gradle",src:a(50843).Z,width:"577",height:"532"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Android Studios -> Preferences -> Build, Execution, Deployment -> Build Tools -> Gradle")," and verify that the Gradle JDK is pointing to ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications/Android Studio.app/Contents/jre/Contents/Home")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Preference Android",src:a(27323).Z,width:"254",height:"276"})," "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Gradle Java Path",src:a(30056).Z,width:"1187",height:"645"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add a test emulator in Android Studios ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools -> AVD Manager"),". Follow the instructions on ",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds"},"Android Emulator Setup")," to add a new virtual device.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After adding the new virtual device select it from the top device menu."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Select Device",src:a(30143).Z,width:"495",height:"229"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build the project. "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Build Project",src:a(64554).Z,width:"420",height:"436"}),"\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Launch Virtual Device from Android studio."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Launch Project",src:a(84582).Z,width:"457",height:"95"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify the Virtual Device launches and Android Studios installs and opens the VAMobile app on the device."))),(0,n.kt)("h3",{id:"physical-device-setup"},"Physical Device Setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open Android Studios and select to a open project."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Open Android Studio",src:a(56535).Z,width:"798",height:"437"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the popup window browse to ",(0,n.kt)("inlineCode",{parentName:"p"},"/Users/(your user folder/Workspace/va-mobile-app/VAMobile/android")," and select the android folder from the VAMobile project and press open."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Android Folder",src:a(83913).Z,width:"1069",height:"587"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After opening the android project you will need to sync the project with gradle. Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"File -> Sync Project With Gradle Files"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Sync With Gradle",src:a(50843).Z,width:"577",height:"532"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Android Studios -> Preferences -> Build, Execution, Deployment -> Build Tools -> Gradle")," and verify that the Gradle JDK is pointing to ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications/Android Studio.app/Contents/jre/Contents/Home")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Preference Android",src:a(27323).Z,width:"254",height:"276"})," "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Gradle Java Path",src:a(30056).Z,width:"1187",height:"645"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Turn on developer mode for the phone. ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/running-on-device"},"See React Native Instructions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect phone with a usb to the host machine.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open a Terminal and type ",(0,n.kt)("inlineCode",{parentName:"p"},"adb devices"),". You should see an ouput like so."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"ADB Devices",src:a(14080).Z,width:"379",height:"56"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type ",(0,n.kt)("inlineCode",{parentName:"p"},"adb -s <device name> reverse tcp:8081 tcp:8081"),"."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"ADB TCP Reverse",src:a(55729).Z,width:"579",height:"64"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the physical device from the top device menu."),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Select Device",src:a(30143).Z,width:"495",height:"229"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build the project. "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Build Project",src:a(64554).Z,width:"420",height:"436"}),"\n")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Launch Virtual Device from Android studio."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Launch Project",src:a(84582).Z,width:"457",height:"95"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify Android Studios installs and opens the VAMobile app on the device."))),(0,n.kt)("h2",{id:"iphone-setup"},"iPhone Setup"),(0,n.kt)("h3",{id:"simulator-setup"},"Simulator Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open Xcode and select to open project or file."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Open Xcode Project",src:a(1147).Z,width:"477",height:"428"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the popup window browse and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," folder on the ",(0,n.kt)("inlineCode",{parentName:"p"},"VAMobile")," project."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Project Xcode",src:a(44759).Z,width:"1138",height:"439"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to Xcode -> Preference and under account verify you are signed in with the apple id which has the ",(0,n.kt)("inlineCode",{parentName:"p"},"US Department of Veterans Affairs (VA) developer account"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Apple Id Account",src:a(53871).Z,width:"310",height:"359"})," "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Apple Id Account",src:a(72594).Z,width:"817",height:"546"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the project icon on the left hand explorer and verify you have the right signing. ",(0,n.kt)("inlineCode",{parentName:"p"},"Team should be US Department of Veterans Affairs (VA)")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Signing Project Account",src:a(63781).Z,width:"1812",height:"587"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select a simulator from the list in Xcode."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Simulator Xcode",src:a(11966).Z,width:"415",height:"788"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build project on Xcode."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Build Project Xcode",src:a(92581).Z,width:"377",height:"552"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Launch simulator by pressing the play button."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Launch Simulator Xcode",src:a(53989).Z,width:"458",height:"153"})," "))),(0,n.kt)("h3",{id:"physical-device"},"Physical Device"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open Xcode and select to open project or file."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Open Xcode Project",src:a(1147).Z,width:"477",height:"428"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the popup window browse and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," folder on the ",(0,n.kt)("inlineCode",{parentName:"p"},"VAMobile")," project."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Project Xcode",src:a(44759).Z,width:"1138",height:"439"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to Xcode -> Preference and under account verify you are signed in with the apple id which has the ",(0,n.kt)("inlineCode",{parentName:"p"},"US Department of Veterans Affairs (VA) developer account"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Apple Id Account",src:a(53871).Z,width:"310",height:"359"})," "),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Apple Id Account",src:a(72594).Z,width:"817",height:"546"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the project icon on the left hand explorer and verify you have the right signing. ",(0,n.kt)("inlineCode",{parentName:"p"},"Team should be US Department of Veterans Affairs (VA)"),"."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Signing Project Account",src:a(63781).Z,width:"1812",height:"587"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect the iPhone via USB to the host machine. ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/running-on-device"},"See React Native Instructions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Accept permissions on your iPhone from Xcode to allow the developers option.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select a device from the list in Xcode."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"Select Simulator Xcode",src:a(11966).Z,width:"415",height:"788"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build project on Xcode. "),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Build Project Xcode",src:a(92581).Z,width:"377",height:"552"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Launch device by pressing the play button."),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("img",{alt:"Launch Simulator Xcode",src:a(53989).Z,width:"458",height:"153"})))))}c.isMDXComponent=!0},14080:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/adb-devices-android-f00024d477c361d186269e208bef9dae.png"},30056:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/android-gradle-java-path-0a30f09d0589f676501b686d55137d33.png"},27323:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/android-preferences-path-b0a78c02f2b94b2994149f4a15e1a2aa.png"},64554:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/build-project-android-eacdb43c82ea049837fe9b9162fae4eb.png"},92581:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/build-project-xcode-ecacf286ed159820b4e852a595d09157.png"},55798:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/env-file-content-image-2acdee6730d7606d108832661c523d86.png"},37858:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},64536:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/firebase-google-services_android-5a73ea8ed79526c7a495be87bec4ff11.png"},577:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/firebase-google-services_ios-9e0b277938aace454e81ca3951acf20f.png"},39617:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/google-service-android-file-d7e871f3bd0b3de340031960653d815c.png"},50843:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gradle-project-sync-image-6b06f8132e3eb9e684a3e517411ea1d9.png"},53989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/launch-app-xcode-dcbd90f291632991f11cf937ad205f3d.png"},84582:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/launch-virtual-app-android-cdce5bd5252a10802dfb54fe46ad34bf.png"},979:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/metro-started-image-eb14c9ba05b9a80af4f7555527c3d892.png"},56535:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/open-android-studio-image-0340e5b427c00ed79d5af7783f7d84af.png"},1147:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/open-xcode-project-7549fa4ce5f37329d5ff00da3a529e4d.png"},55729:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/reverse-tcp-android-224eec40f5b7272b47507d56474ad760.png"},83913:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-android-folder-android-studio-72a5dca8c00904f4068d3133068333e5.png"},30143:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-device-android-studio-2940f13a55af946ef0c02878c4256bb6.png"},11966:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-emulator-xcode-19955e5d1c2a62c30dbfa3c122f82ce3.png"},44759:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select-ios-folder-xcode-0c6eb0c58cf0ec1ff99d3e0e21f63915.png"},63781:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/signing-xcode-1942cb47175a2079c35a8b47c35470be.png"},72594:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/xcode-apple-id-account-ba96666ec8dfd41fc5bed2f37b764981.png"},53871:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/xcode-preference-path-5d11b7b3947ae574490d8997decbada4.png"}}]);