import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import News from '../screens/News';


const screens = {
  News: {
    screen: News,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='News' navigation={navigation} />
      }
    },  
  },
};

// home stack navigator screens
const NewsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'black', height: 80 },
  }
});

export default NewsStack;