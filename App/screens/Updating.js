import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import codePush from 'react-native-code-push';

import { CodePushDeploymentKey } from '../../constants';

export default class Updating extends React.Component {
  state = {
    text: 'Checking for Updates...',
    progress: 0,
  };

  componentDidMount() {
    codePush.sync(
      {
        deploymentKey: CodePushDeploymentKey,
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      status => {
        let nextText = 'Checking for Updates...';
        let updateComplete = false;
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            nextText = 'Checking for Updates...';
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            nextText = 'Downloading Update...';
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            nextText = 'Installing Update...';
            break;
          default:
            updateComplete = true;
            break;
        }

        if (updateComplete) {
          this.props.navigation.pop();
        } else {
          this.setState({text: nextText});
        }
      },
      downloadProgress => {
        const {receivedBytes, totalBytes} = downloadProgress;
        const progress = (receivedBytes / totalBytes) * 100;
        this.setState({progress: Math.ceil(progress)});
      },
    );
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
          {this.state.text}
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
          {`${this.state.progress}%`}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}