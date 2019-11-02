import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthTabs from './AuthNavigator';
import ContentTabs from './ContentNavigator';

import AuthLoadingScreen from '../../Screens/AuthLoadingScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: ContentTabs,
      Auth: AuthTabs,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
