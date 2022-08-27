import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  containerButton:{
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20
  },
  button: {
    flex: 0.4,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 12
  },
  buttonText:{
    fontSize: 22
  },
  text: {
    fontSize: 22
  }
})