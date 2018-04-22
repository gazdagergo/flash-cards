import React from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default class EditCard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit card',
  });

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <Card>
        <Text>
          Edit {params.id}
        </Text>
      </Card>
    );
  }
}