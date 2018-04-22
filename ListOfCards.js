import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  Header,
  Card
} from 'react-native-elements';
import FlashCard from './FlashCard';

export default class ListOfCards extends React.Component {
  state = {
    isLoading: true,
    cards: null,
  }

  componentDidMount() {
    return fetch('https://gg-flash-cards.firebaseio.com/cards.json')
      .then((response) => response.json())
      .then((cards) => {

        this.setState({
          isLoading: false,
          cards,
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
        <Header />
        {this.state.cards.map(card => (
          card && <FlashCard key={ card.id } { ...card } />
        ))}
      </View>
    );
  }
}