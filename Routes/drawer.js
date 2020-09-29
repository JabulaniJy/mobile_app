  
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import ProfileStack from './ProfileStack';
import NewsStack from './NewsStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  NewsFeed:{
    screen:NewsStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

export default createAppContainer(RootDrawerNavigator);