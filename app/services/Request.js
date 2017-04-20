
import React, {Component} from "react";



export default class Request extends React.Component {

/*
  *  	post请求
  *		url: url地址
  *   param: param:{"key1":"value1","key2":"value2",...}
  *   callback: 为网络请求回调函数，两个参数，第一个为返回数据
  *   					第二个参数为bool类型，网络错误的情况下为false，
  *   					正确的情况为true，在回调中必须进行判断
  */
  static requestPost(url, param, callback) {
    var contentUrl = 'https://api.xianhuoapp.com/Api/' + url +'/';
      var fetchParam = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
      };
      fetch(contentUrl, fetchParam)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText),true);
      })
      .catch((error) => {
        console.log(error);
        callback(error,false);
      }).done();
    }

}