import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {getAuthenticatedStatus} from '../../Auth/selectors';
import Login from '../../Auth/Components/Login';

import Styles from '../../Styles/Containers/ContainerStyles';

const Content = () => {
  return (
    <View style={Styles.content}>
      <Login />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: getAuthenticatedStatus(state),
  };
};

const connectedContent = connect(
  mapStateToProps,
  null,
)(Content);

const TabNavigator = createBottomTabNavigator({
  'Sign In': connectedContent,
  'Sign Up': connectedContent,
});

export default createAppContainer(TabNavigator);
