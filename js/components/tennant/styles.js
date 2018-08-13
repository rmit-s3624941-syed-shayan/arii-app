const React = require('react-native');
const { StyleSheet } = React;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  dp: {
    marginTop: 100,
    width: 350,
    height: 150,
    alignSelf:'center',
    backgroundColor: "#38d0d0" ,
  },
  pic: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
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
  box: {
    alignSelf: 'center',
    backgroundColor: 'black',
    width: 350,
    padding: 2,
    marginTop: -60,
  },
};
