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

export default class ListOfCards extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Cards',
  });
  
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