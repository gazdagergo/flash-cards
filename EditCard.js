import React from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  View,
  Text,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-elements';

export default class EditCard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit card',
  });

  state = {
    isLoading: true,
    id: null,
    question: null,
    answer: null,
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    return fetch(`https://gg-flash-cards.firebaseio.com/cards/${params.id}.json`)
      .then((response) => response.json())
      .then((cardDetails) => {
        this.setState({
          isLoading: false,
          ...cardDetails,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator />
      )
    }

    return (
      <View>
        <Card>
          <Text style={{ color: 'gray', marginBottom: 12 }}>Question</Text>
          <TextInput
            autoFocus
            defaultValue={this.state.question}
          />
        </Card>
        <Card>
          <Text style={{ color: 'gray', marginBottom: 12 }}>Answer</Text>
          <TextInput
            defaultValue={this.state.answer}
          />
        </Card>
      </View>
    );
  }
}