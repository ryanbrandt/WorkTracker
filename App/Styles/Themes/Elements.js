import {StyleSheet} from 'react-native';

import Colors from './Colors';

export default StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.grayAccent,
    height: 50,
    margin: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.grayAccent,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anchor: {
    color: 'blue',
  },
});
