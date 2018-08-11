
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: 300,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    width: 300,
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: "#38d0d0" ,
  },
  btnReg: {
    width: 300,
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: "#38d0d0" ,
  },
  msg: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnMsg: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    alignSelf: 'center',
    backgroundColor: 'black',
    width: 350,
    padding: 2,
    marginTop: -60,
  }
};
