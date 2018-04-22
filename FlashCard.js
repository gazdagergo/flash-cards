import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

export default FlashCard
 = ({ question, answer }) => (
  <Card>
    <Text>{ question }</Text>
    <Text>{ answer }</Text>
  </Card>
);

FlashCard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
