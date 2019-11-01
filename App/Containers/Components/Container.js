import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import StatusBarContainer from '../SubComponents/StatusBarContainer';
import Content from './Content';

import Styles from '../../Styles/Containers/ContainerStyles';

const Container = props => {
  return (
    <>
      <StatusBarContainer />
      <SafeAreaView style={Styles.container}>
        <ScrollView contentContainerStyle={Styles.scrollContent}>
          <Content />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Container;
