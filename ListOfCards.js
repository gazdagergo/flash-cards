import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  Card
} from 'react-native-elements';
import FlashCard from './FlashCard';
import apiService from './apiService';

export default class ListOfCards extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Cards',
  });
  
  state = {
    isLoading: true,
    cards: null,
  }

  componentDidMount() {
    apiService.getCards()
    .then(cards => {
      this.setState({
        isLoading: false,
        cards,
      });
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator />
      )
    }

    return (
      <View>
        <FlatList
          data={this.state.cards}
          keyExtractor={item => item.id.toString()}
          renderItem={card => {
            return <FlashCard {...card.item} navigation={this.props.navigation} />
          }}
        />
      </View>
    );
  }
}