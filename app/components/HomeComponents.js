import React, {Component} from "react";
import {StyleSheet, Image,View,Text} from "react-native";
import Request from "../services/Request";
import Banner from "react-native-banner";//一个第三方的组件
export default class HomeComponents extends Component {
   constructor(props) {
        super(props);
        //banner数据（随便找的）
        this.banners = [
            {
                title: '第一张',
                image: 'https://img.xianhuoapp.com/FsIfwABy2i-MmcaUaEMhnntSMVNO',
            },
            {
                title: '第二张',
                image: 'https://img.xianhuoapp.com/pdf/5243717961.png',
            },
            {
                title: '第三张',
                image: 'https://img.xianhuoapp.com/FsIfwABy2i-MmcaUaEMhnntSMVNO',
            },
            {
                 title: '第四张',
                image: 'https://img.xianhuoapp.com/pdf/5243717961.png',
            },
        ];
        this.state = {
            defaultIndex: 0,
        }
        this.defaultIndex = 0;

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

  //轮播图的点击事件
  clickListener(index) {
    alert("click"+index);
    }

  onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }

  render() {
    return (
            <View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
            </View>
               );
  }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});