import React, {Component} from "react";
import {StyleSheet, Image,View,Text} from "react-native";
import Request from "../services/Request";

export default class HomeComponents extends Component {
   constructor(props) {
        super(props);
    }
  //网络请求
    componentWillMount(){
      //参数
      let param = {'p':'1'};
        //发起请求
        Request.requestPost('Goods/index',param,this.callback);
    }

  //成功的回调
  callback(data,isSuccess){
    if(isSuccess){
      alert(data["status"]);
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