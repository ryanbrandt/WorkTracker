import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LogIn from '../../Auth/Components/Login';
import SplashScreen from '../../Screens/SplashScreen';

const TabNavigator = createBottomTabNavigator({
  'Sign In': LogIn,
  'Sign Up': SplashScreen,
});

export default createAppContainer(TabNavigator);
