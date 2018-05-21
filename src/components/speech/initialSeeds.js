import React from 'react';
import { AsyncStorage } from 'react-native';

export default initialSeeds = async () => {
  try {
    // initial
    await AsyncStorage.setItem('initial', JSON.stringify({
      image: 'none',
      nextKeys: ['I want', 'I feel']
    }))

    //initial_next_keys
    await AsyncStorage.setItem('I want', JSON.stringify({
      image: 'want_image.jpg',
      nextKeys: ['to eat', 'to drink']
    }))
    await AsyncStorage.setItem('I feel', JSON.stringify({
      image: 'feels.jpg',
      nextKeys: ['sleepy']
    }))

    //Iwant_next_keys
    await AsyncStorage.setItem('to drink', JSON.stringify({
      image: 'drink_path',
      nextKeys: ['tea']
    }))
    await AsyncStorage.setItem('to eat', JSON.stringify({
      image: 'eat_path',
      nextKeys: []
    }))

    //drinking_next_keys_turnt
    await AsyncStorage.setItem('tea', JSON.stringify({
      image: 'tea.jpg',
      nextKeys: []
    }))

    //Ifeel_nextKeys
    await AsyncStorage.setItem('sleepy', JSON.stringify({
      image: 'sakamoto.jpg',
      nextKeys: []
    }))
  } catch (error) {
    console.log("Error setting data" + error);

  }
}
