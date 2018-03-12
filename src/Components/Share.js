import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,ScrollView
} from 'react-native';
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header } from 'react-native-elements'


export default class Share extends Component<Props> {
  static navigationOptions = {
      tabBarLabel: 'Share',

  }
  render() {
      const backAction = NavigationActions.back({})
      return (
          <View style={styles.container}>
              <Header
                  centerComponent={{ text: 'Share', style: { color: '#fff',fontSize:30 } }}
                  leftComponent={{ icon: 'arrow-back', color: '#fff',onPress: () => this.props.navigation.dispatch(backAction)}}
                  outerContainerStyles={{backgroundColor:'black'}}
              />
              <View style={styles.subcon}>
          
              </View>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    subcon:{
        flex:1,
        padding:20,
        marginBottom:50
    },
  
})
