import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Icon } from 'react-native-elements';

export default FlashCard = ({ id, question, answer, navigation }) => (
  <Card>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ minHeight: 50, flex: 1 }}>
        <Text>{question}</Text>
        <Text>{answer}</Text>
      </View>
      <View style={{ minHeight: 50, width: 40 }}>
        <Icon
          color="lightgray"
          name="edit"
          onPress={() => navigation.navigate('EditCard', {id}) }
        />
      </View>
    </View>
  </Card>
);

FlashCard.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
};
