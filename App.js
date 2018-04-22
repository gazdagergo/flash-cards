import React from 'react';
import ListOfCards from './ListOfCards';
import { StackNavigator } from 'react-navigation'
import EditCard from './EditCard';

const MainNavigator =  StackNavigator({
  Home: { screen: ListOfCards },
  Edit: { screen: EditCard },
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

