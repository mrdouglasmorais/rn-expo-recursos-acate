import {
  StyleSheet, Dimensions,
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  logo: {
    width: 100,
    height: 20
  },
  textCallout: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 22
  }
})