import React from 'react';
import {View, TextInput} from 'react-native';

import ElementStyles from '../../Styles/Themes/Elements';

const AppInput = props => {
  const handleChange = value => {
    const {name, onChange} = props;

    onChange(name, value);
  };

  const {placeholder} = props;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={ElementStyles.input}
        onChangeText={value => handleChange(value)}
      />
    </View>
  );
};

export default AppInput;
