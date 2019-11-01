import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LogIn from '../../Auth/Components/Login';
import SplashScreen from '../../Screens/SplashScreen';

const TabNavigator = createBottomTabNavigator({
  Log: LogIn,
  Habits: SplashScreen,
  Settings: SplashScreen,
});

export default createAppContainer(TabNavigator);
