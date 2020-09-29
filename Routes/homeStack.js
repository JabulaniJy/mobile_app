import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/Home';
import News from '../screens/News';
import NewsStory from '../screens/NewsStory';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
      }
    },
  },
  News: {
    screen: News,
  },
  NewsStory:{
    screen:NewsStory,
    navigationOptions: {
      title: 'Story',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'black', height: 80 }
  }
});
export default HomeStack;