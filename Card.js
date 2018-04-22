import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default Card = ({ question, answer }) => (
  <View>
    <Text>{ question }</Text>
    <Text>{ answer }</Text>
  </View>
)