import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Card from './Card';

export default class ListOfCards extends React.Component {
  render() {
    return (
      <View>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}