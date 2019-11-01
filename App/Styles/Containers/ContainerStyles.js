import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 40,
    flex: 1,
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
    backgroundColor: 'gray',
    height: 50,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    borderBottomColor: 'black',
  },
});
