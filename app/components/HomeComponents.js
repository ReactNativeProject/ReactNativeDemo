import React, {Component} from "react";
import {StyleSheet, Image,View,Text} from "react-native";

export default class HomeComponents extends Component {
   constructor(props) {
        super(props);
    }
  render() {
    return (
      <Text style = {styles.mainText}>zzzzHomePage!!</Text>
    );
  }
}

const styles = StyleSheet.create({

    mainText:{
        marginTop:100,
    },

});