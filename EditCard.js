import React from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native';
import { Card } from 'react-native-elements';
import apiService from './apiService';

export default class EditCard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Edit card',
    headerRight: (
      <Button
        title="Save"
        onPress={() => {navigation.state.params.handleSave()}}
      />
    )    
  });

  state = {
    isLoading: true,
    id: null,
    question: null,
    answer: null,
    operation: 'edit',
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.saveDetails });
    const { params } = this.props.navigation.state;
    if (!params) {
      this.setState({
        isLoading: false,
        operation: 'add',
      });
      return;
    }

    apiService.getCardDetails(params.id)
    .then((cardDetails) => {
      this.setState({
        isLoading: false,
        ...cardDetails,
      });
    })
  }

  saveDetails = () => {
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;
    const { question, answer, id } = this.state;

    if (this.state.operation === 'edit') {
      apiService.updateCard({ question, answer, id })
      .then(goBack());
    } else {
      apiService.addNewCard({ question, answer })
      .then(goBack());
    }
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