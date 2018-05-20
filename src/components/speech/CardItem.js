import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

const CardItem = (props) => {
  return (
    <TouchableOpacity style={style.containerStyle} key={props.card.title}>
      <Image style={style.imageStyle} />
      <Text>{props.card.title}</Text>
    </TouchableOpacity>
  )
}

const style = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    borderBottomWidth: 0,
    elevation: 1,
    marginRight: 0,
    marginLeft: 0,
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
  }
}
