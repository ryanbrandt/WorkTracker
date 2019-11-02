import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LogIn from '../../Auth/Components/Login';
import Register from '../../Auth/Components/Register';

import Colors from '../../Styles/Themes/Colors';

const TabNavigator = createBottomTabNavigator(
  {
    'Sign In': {
      screen: LogIn,
    },
    'Sign Up': {
      screen: Register,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.blueDetail,
    },
  },
);

export default createAppContainer(TabNavigator);
