import React, {Component} from "react";
import {StyleSheet, Image,View,Text} from "react-native";

export default class FineComponents extends Component {
   constructor(props) {
        super(props);
    }
  render() {
    return (
      <Text style = {styles.mainText}>FindPage!!</Text>
    );
  }
}

const styles = StyleSheet.create({
    
    mainText:{
        marginTop:100,
        marginLeft:100,
    },

});