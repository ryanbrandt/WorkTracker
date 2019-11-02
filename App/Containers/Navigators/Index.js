import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthTabs from './AuthContainer';
import ContentTabs from './ContentContainer';

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
