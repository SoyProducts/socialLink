import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import CardIndex from './src/components/speech/CardIndex';
import Header from './src/components/speech/Header';

export default class SpeechApp extends Component {

  render() {
    <View style={{flex: 1}}>
      <Header style={{flex: 4}}/>
      <CardIndex style={{flex: 1}}/>
    </View>
  }

}
