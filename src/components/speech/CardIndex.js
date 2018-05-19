import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class CardIndex extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    try {
      await AsyncStorage.getItem(key: 'initial');
      //static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)
      if (value !== null) {
        console.log(value)
      }
    } catch (error) {
      console.log("Error getting data" + error);
    }
  }

  componentWillReceiveProps(nextProps) {
    //where we prepare to load the next_keys
    //nextProps vs this.props rip
  }

  renderList() {
    let list = []
    let subList = []
    let startingIndex = 
  }

}
