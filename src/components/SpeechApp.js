import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import CardIndex from './speech/CardIndex';
// import Header from './speech/Header';

export default class SpeechApp extends Component {

  // onPressHandler() {
  //  sets card to sentence display
  //  loads next_keys
  // }

  // <Header style={{flex: 4}}/>
  render() {
    return (
      <View style={{flex: 1}}>
        <CardIndex style={{flex: 1}}/>
      </View>
    )
  }

}
