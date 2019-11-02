import {StyleSheet, Dimensions} from 'react-native';

import Colors from '../Themes/Colors';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  scrollContent: {
    flex: 1,
  },
  centeredAbsolute: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredVertical: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredHorizontal: {
    flex: 1,
    alignItems: 'center',
  },
  statusBarContainer: {
    backgroundColor: Colors.grayAccent,
    height: 50,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    borderBottomColor: 'black',
  },
});
