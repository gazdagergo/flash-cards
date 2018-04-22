import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class EditCard extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Edit card',
  });

  render() {
    return (
      <Card>
        <Text>
          Edit
        </Text>
      </Card>
    );
  }
}