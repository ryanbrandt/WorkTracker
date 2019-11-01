import React from 'react';
import {View, StatusBar} from 'react-native';

import Styles from '../../Styles/Containers/ContainerStyles';

const StatusBarContainer = () => {
  return (
    <View style={Styles.statusBarContainer}>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
    </View>
  );
};

export default StatusBarContainer;
