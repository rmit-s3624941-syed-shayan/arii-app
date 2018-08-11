import React, { Component } from "react";
import Home from "../components/home/";
import signUp from "../components/signUp";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    signUp: { screen: signUp }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
