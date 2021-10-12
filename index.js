import { AppRegistry, Platform } from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import {name as appName} from './app.json';

import codePush from 'react-native-code-push';

import { CodePushDeploymentKey } from './constants';
  
// Or hard code if only ios or android
const CodePushifiedApp = codePush({
    deploymentKey: CodePushDeploymentKey,
    // heckFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    heckFrequency: codePush.CheckFrequency.MANUAL,
    installMode: codePush.InstallMode.ON_NEXT_RESUME,
    // mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESUME,
})(App);

AppRegistry.registerComponent(appName, () => CodePushifiedApp);
  