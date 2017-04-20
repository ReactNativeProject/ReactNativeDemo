import React, {Component} from "react";
import {StyleSheet, Image,View,Text} from "react-native";
 import Request from "../services/Request";

export default class HomeComponents extends Component {
   constructor(props) {
        super(props);
    }
  //网络请求
    componentWillMount(){
      let param = {'p':'1'};
      //  Request.requestPost('Goods/index',param,this.bind.callback(this));
    }

  callback(data){
    if(!data){
      alert(12);
    }
  }

  render() {
    return (
      <Text style = {styles.mainText}>mingmingGOGOHomePage!!</Text>
    );
  }
}

const styles = StyleSheet.create({

    mainText:{
        marginTop:100,
    },

});