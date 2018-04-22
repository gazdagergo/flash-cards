import React from 'react';
import ListOfCards from './ListOfCards';
import { StackNavigator } from 'react-navigation'

const MainNavigator =  StackNavigator({
  Home: {
    screen: ListOfCards,
    navigationOptions: {
      title: "Flash Cards",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}


