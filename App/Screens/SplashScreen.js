import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import Colors from '../Styles/Themes/Colors';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.mainText}>Work Tracker</Text>
      <Text style={Styles.subText}>Health Conscious Productivity</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grayAccent,
  },
  mainText: {
    color: 'white',
    fontSize: RFPercentage(8),
  },
  subText: {
    color: 'white',
    fontSize: RFPercentage(2),
  },
});

export default SplashScreen;
