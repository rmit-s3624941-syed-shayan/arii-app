import React, { Component } from "react";
import { Image, TextInput } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import styles from "./styles";
const background = require("../../../images/welcome.png");
const dp = require("../../../images/dp.png");
class tennant extends Component {

  render() {
    return (
      <Container>
        <View style={styles.container}>
            <Image source={background} style={styles.shadow}></Image>
        </View>
        <View style={{flex: 1, marginTop: 150, flexDirection: 'column',}}>
          <View style={{width: 350, height: 130, backgroundColor: '#38d0d0'}}>
          <Image source={dp} style={styles.pic}></Image>
          </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      </Container>
    );
  }
}

export default tennant;
