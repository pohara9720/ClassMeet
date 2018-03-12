import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,ScrollView
} from 'react-native'
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header } from 'react-native-elements'
import { NavigationActions } from "react-navigation"


export default class ImageView extends Component<Props> {

  render() {
    const backAction = NavigationActions.back({})
    return (
      <View style={styles.container}>
        <Header
            centerComponent={{ text: 'View Image', style: { color: 'black',fontSize:30 } }}
            leftComponent={{ icon: 'arrow-back', color: 'black',onPress: () => this.props.navigation.dispatch(backAction)}}
            outerContainerStyles={{backgroundColor:'white'}}
          />
          <View style={styles.subcon}>
          
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  start:{
    textAlign:'center',
    fontSize:40,
    color:'white'
  },
  subcon:{
    flex:1,
    padding:20,
    marginBottom:50
  },
  general:{
    color:'white',
    textAlign:'center'

  },
  rule:{
    color:'white',
    fontSize:30
  },
  imp:{
    color:'red',
    fontSize:30,
    marginLeft:10
  },
  kings:{
    color:'red',
    fontSize:30
  },
  instructions:{
    color:'white',
    fontSize:15,
    lineHeight:20
  }
});
