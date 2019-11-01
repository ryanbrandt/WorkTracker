import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.mainText}>Work Tracker</Text>
      <Text style={Styles.subText}>
        Encouraging health conscious productivity
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
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
