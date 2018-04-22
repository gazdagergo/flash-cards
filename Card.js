import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default Card = ({ question, answer }) => (
  <View>
    <Text>{ question }</Text>
    <Text>{ answer }</Text>
  </View>
);

Card.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
