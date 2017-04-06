import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,

} from 'react-native';




export default class main extends Component {
   constructor(props) {
        super(props);
    }
  render() {
    return (
      <Text style = {styles.mainText}>helloworld!!</Text>
    );
  }
}

const styles = StyleSheet.create({
    mainText:{
        marginTop:100,
    },

});
