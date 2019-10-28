import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import StatusBarContainer from '../SubComponents/StatusBarContainer';
import Content from './Content';

const Container = () => {
  return (
    <>
      <StatusBarContainer />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Content />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const TabNavigator = createBottomTabNavigator({
  Home: Container,
  Profile: Container,
  Settings: Container,
});

export default createAppContainer(TabNavigator);
