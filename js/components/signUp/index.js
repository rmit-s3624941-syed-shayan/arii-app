import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";
<script src="http://localhost:8097"></script>
const logo = require("../../../images/ARII-logo.png");

class BlankPage2 extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Account Type</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder style={styles.container}>
        
        <View style={{flex: 1, alignItems: 'center', marginTop:10}}>
        <Image
          style={{flex: 1,
            alignSelf: 'stretch', top: 50, alignSelf: 'center'}}
          source={logo}
        />
        </View>
        <View  style={styles.bg}>
            <Text style={styles.textStyle}>
              SIGNUP AS A :
            </Text>
            {this.renderButton("TENANT")}
            {this.renderButton("PROPERTY MANAGER")}
            {this.renderButton("PROPERTY OWNER")}
            {this.renderButton("TRADE")}
          
        </View>
        </Content>
      </Container>
    );
  }
  renderButton(type){
			return (
				<Button backgroundColor="#38d0d0" style={styles.btn}
                  //onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text style={styles.btnTxt}>{type}</Text>
            </Button>
			)
	}
}

export default BlankPage2;
