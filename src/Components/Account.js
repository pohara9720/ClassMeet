import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,ScrollView,Image,TouchableOpacity
} from 'react-native'
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header,Icon,SocialIcon,List,ListItem} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'



export default class Account extends Component<Props> {
    constructor(props){
        console.log('Account',props)
        super(props)

        this.state = {
            list:[
                {
                    name:'Sally Molly',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
                    mutual:'118',
                    score:'99%',
                    subtitle: 'Aquaintance'

                },
                {
                    name:'Sally Jen',
                    image: 'https://static1.squarespace.com/static/582a08d48419c24bb272794b/58cf480a6a49634f9172ef00/58cf4846f7e0ab911f7acf6f/1489979467375/25-stunning-young-woman-headshot-makeup-wind-hair-captivating-eyes-megan-dipiero-photography-fort-myers-naples.jpg',
                    score:'77%',
                    subtitle:'Close Friends',
                    mutual:'1'
                },
                {
                    name:'Sally Tiffany',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
                    score:'87%',
                    subtitle:'Close Friends',
                    mutual:'122'
                },
                {
                    name:'Sally Jane',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nGnuXTVg-nMwbTu_Si6IYSU7qF5TCQZexZVK1eiJa98NoIn9Hw',
                    score:'80%',
                    subtitle:'Met Once',
                    mutual:'132'
                },
                {
                    name:'Sally Sabrina',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhETiI7KhXnTz098H44tC7Nh7ErF3IrQ5YF6og2EXofhSEA14W7Q',
                    score:'99%',
                    subtitle:'Never Met',
                    mutual:'142'
                },
                {
                    name:'Sally Karen',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxZ5rYJ22h5FWrz2ZYYgSQTEiW-iwttStfBR0jRsn8VOFcN_W',
                    score:'33%',
                    subtitle:'Never Met',
                    mutual:'112'
                },
                {
                    name:'Sally Holly',
                    image: 'https://static1.squarespace.com/static/54d942d5e4b0c4d5e7b8e4f0/t/59f24c0827ef2db556bfb25b/1509051439658/IMG_8836-2.jpg',
                    score:'78%',
                    subtitle:'Met Once',
                    mutual:'212'
                },
                {
                    name:'Sally Sydney',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
                    score:'90%',
                    subtitle:'Aquaintance',
                    mutual:'412'
                },
                {
                    name:'Sally June',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
                    score:'87%',
                    subtitle:'Aquaintance',
                    mutual:'512'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Aquaintance',
                    mutual:'112'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Aquaintance',
                    mutual:'112'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Never Met',
                    mutual:'112'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Close Friends',
                    mutual:'112'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Close Friends',
                    mutual:'112'
                },
                {
                    name:'Sally Shrek',
                    image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
                    score:'17%',
                    subtitle:'Close Friends',
                    mutual:'112'
                }]
        }
    }
  static navigationOptions = {
      tabBarLabel: 'Profile',

  }
  render() {

      const { navigate } = this.props.navigation
      // this.props.navigation.state.params.user
      return (
          <View style={styles.container}>
              <Header
                  centerComponent={{ text: "Patrick O'Hara", style: { color: '#cc0000',fontSize:30 } }}
                  rightComponent={{ icon: 'settings', color: '#cc0000',onPress: () => navigate('Settings')}}
                  outerContainerStyles={{backgroundColor:'white',borderBottomWidth:0}}
              />
              <ScrollView>
                  
                  <View style={{flex:1,padding:10}}>
                      <View style={{display:'flex',flexDirection:'row'}}>
                          <View style={{flexGrow:1}}>
                              <View><SocialIcon type='facebook' /></View>
                              <View><SocialIcon type='instagram' /></View>
                          </View>
                          <View style={{flexGrow:1}}>
                              <TouchableOpacity onPress={() => navigate('ImageView')}><Image resizeMode='cover' style={{height:150,width:150,borderRadius:10}} source={require('../a.jpg')}/></TouchableOpacity>
                          </View>
                          <View style={{flexGrow:1}}>
                              <View style={{flexDirection:'row',display:'flex',alignItems:'center',flexGrow:1}}><Icon type='ionicon' name='logo-apple' color= '#cc0000'/><Text style={styles.ratings}>100%</Text></View>
                              <View style={{flexDirection:'row',display:'flex',alignItems:'center',flexGrow:1}}><Icon type='ionicon' name='ios-clipboard' color= '#cc0000' /><Text style={styles.ratings}>90</Text></View>
                          </View>
                      </View>
                      <View style={{display:'flex',flexDirection:'row',paddingTop:20}}>
                          <View style={{flexGrow:1}}>
                              <View><Text>Phoenix,AZ</Text></View>
                          </View>
                          <View style={{flexGrow:1}}>
                              <View><Text>Bartender at Cake</Text></View>
                          </View>
                          <View style={{flexGrow:1}}>
                              <View><Text>Age: 25</Text></View>
                          </View>
                      </View>
                      <LinearGradient colors={['red', '#cc0000']} start={{x: 1, y: 0}} end={{x: 0.2, y: 0}} style={styles.linearGradient}>
                          <Text onPress={()=> this.setState({modal:false,kings:4})} style={styles.buttonText}>
                                Add a Review
                          </Text>
                      </LinearGradient>
                      <View>
                          <List>
                              {
                                  this.state.list.map((item, i) => (
                                      <ListItem
                                          roundAvatar
                                          key={i}
                                          title={`${item.name} (${item.subtitle})`}
                                          subtitle={`${item.mutual} Mutual friends with Patrick`}
                                          badge={{ value: `${item.score}`, textStyle: { color: 'white' }, containerStyle: { backgroundColor:'#cc0000' } }}
                                          subtitleNumberOfLines={1}
                                          subtitleStyle={{fontSize:10}}
                                          avatar={{uri:item.image}}
                                          hideChevron={true}
                                          rightIcon={{name:'more-vert'}}
                                          onPress={() => navigate('ViewReview',{item})}
                                      />
                                  ))
                              }
                          </List>
                      </View>
                  </View>
              </ScrollView>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subcon:{
        flex:1,
        // padding:10,
    },
    linearGradient: {
        alignSelf:'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop:15,
        borderRadius: 25,
        width: '50%',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    ratings: {
        paddingLeft:10,
        fontFamily:'Chalkduster',
        fontSize:15,
        color:'#cc0000'
    }
})
