import React from 'react';
import {View} from 'react-native';

import SwitchNavigator from '../Navigators/Index';

import Styles from '../../Styles/Containers/ContainerStyles';

const Content = props => {
  return (
    <View style={Styles.contentContainer}>
      <SwitchNavigator />
    </View>
  );
};

export default Content;
