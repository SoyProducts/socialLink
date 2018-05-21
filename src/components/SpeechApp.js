import React, { Component } from 'react';
import ReactNative, { View } from 'react-native';
import CardIndex from './speech/CardIndex';
import Header from './speech/Header';

// onPress, CardItem in CardIndex will be pushed into the header
// the header will have an array that displays the cards

export default class SpeechApp extends Component {

  constructor(props) {
    super(props)
    this.state = { selectedCards: [], pageNumber: 0 }
  }

  // the loading next_keys part needs to be changed
  // onPressHandler(card, e) {
  //   this.state.selectedCards.push(card)
  //   // loads next_keys
  //   try {
  //     let nextKeysArray = card.nextKeys
  //     for (let i = 0; i < nextKeysArray.length; i++) {
  //       let key = nextKeysArray[i];
  //       await AsyncStorage.getItem(key)
  //     }
  //   } catch (error) {
  //     console.log("Error onPress" + error)
  //   }
  // }



  // <Header style={{flex: 4}}/>
  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={{flex: 4}}
          selectedCards={this.state} />
        <CardIndex style={{flex: 1}} />
      </View>
    )
  }

}
