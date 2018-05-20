import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
// import CardItem from './CardItem';
import initialSeeds from './initialSeeds'

export default class CardIndex extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.state = { currentCards: [] }
  }



  async componentWillMount() {
    try {
      let initialState = JSON.parse(await AsyncStorage.getItem('initial'));
      if (initialState !== null) {
      } else {
        await initialSeeds()
        initialState = JSON.parse(await AsyncStorage.getItem('initial'));
      }
      let newCardsArray = []
      for (let i = 0; i < initialState.nextKeys.length; i++) {
        let nextKey = initialState.nextKeys[i]
        let nextCard = JSON.parse(await AsyncStorage.getItem(nextKey))
        newCardsArray.push(nextCard)
      }
      this.setState({ currentCards: newCardsArray })
    } catch (error) {
      console.log("Error getting data" + error);
    }
  }

  componentWillReceiveProps(nextProps) {
    //when shit updates
  }

  renderList() {
    let list = []
    let subList = []

  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>"We're in the card index. Sakamoto is the cutest."</Text>
      </View>
    )
  }

}
