import React, { Component } from "react";
import { Image, TextInput } from "react-native";
import tennant from "../tennant";
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
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";
const background = require("../../../images/shadow.png");
const mailLogo = require("../../../images/mailLogo.png");
const pwLogo = require("../../../images/pwLogo.png");
const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
              <View style={styles.box}>
              <Text style={styles.msg}>ENTER USERNAME AND PASSWORD</Text>
              </View>
              <View style={{marginTop: 10}}>
              <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={mailLogo}/>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={pwLogo}/>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
      </View>
                <Button style={styles.btn} onPress={() => loginUser(this)}>
                  <Text style={styles.btnMsg}>Login</Text>
                </Button>
                <Button style={styles.btnReg} onPress={() => SignUpUser(this)}>
                  <Text style={styles.btnMsg}>Register</Text>
                </Button>
                </View>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
function loginUser(t) {
  console.log(t.state);
  t.props.navigation.navigate("tennant");

};
function SignUpUser(t) {
  console.log(t.state);
  t.props.navigation.navigate("signUp");

};
const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
