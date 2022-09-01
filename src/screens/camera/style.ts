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
    flex: 2,
    width: 100,
    height: 150,
    borderRadius: 500,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  buttonText:{
    fontSize: 22
  },
  text: {
    fontSize: 22
  }
})