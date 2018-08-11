
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    
    backgroundColor: '#000000'
    
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 5,
  },
  input: {
    marginBottom: 20,
    color: 'white',
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
    
    borderWidth: 1,
    borderColor: '#fff'
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnTxt: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
};
