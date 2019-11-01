import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Styles from '../../Styles/Themes/Elements';
import Fonts from '../../Styles/Themes/Fonts';

const AppButton = props => {
  const {onPress, childText, buttonStyles} = props;

  return (
    <View>
      <TouchableOpacity
        style={{...Styles.button, ...buttonStyles}}
        onPress={() => onPress()}>
        <Text style={Fonts.button}>{childText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
