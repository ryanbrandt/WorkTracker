import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import LogIn from '../../Auth/Components/Login';
import SplashScreen from '../../Screens/SplashScreen';

import Colors from '../../Styles/Themes/Colors';

const TabNavigator = createBottomTabNavigator(
  {
    Log: {
      screen: LogIn,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={32} />
        ),
      },
    },
    Habits: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="trending-up" color={tintColor} size={32} />
        ),
      },
    },
    Settings: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" color={tintColor} size={32} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.blueDetail,
    },
  },
);

export default createAppContainer(TabNavigator);
