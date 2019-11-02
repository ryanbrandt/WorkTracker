import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LogIn from '../../Auth/Components/Login';
import Register from '../../Auth/Components/Register';

const TabNavigator = createBottomTabNavigator({
  'Sign In': LogIn,
  'Sign Up': Register,
});

export default createAppContainer(TabNavigator);
