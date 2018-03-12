import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,Image,ScrollView,Dimensions,TouchableOpacity
} from 'react-native'
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header,SearchBar,Icon } from 'react-native-elements'

export default class MainFeed extends Component<Props> {
  constructor(props){
      super(props)

      this.state={
        
      }
    }
    static navigationOptions ={
      tabBarLabel: 'Home'
    }
  render() {
    const users = [{
      name:'Sally Molly',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
      rating:'27%',
      reviews:'13'
    },
    {
      name:'Sally Jen',
      image: 'https://static1.squarespace.com/static/582a08d48419c24bb272794b/58cf480a6a49634f9172ef00/58cf4846f7e0ab911f7acf6f/1489979467375/25-stunning-young-woman-headshot-makeup-wind-hair-captivating-eyes-megan-dipiero-photography-fort-myers-naples.jpg',
      rating:'77%',
      reviews:'1'
    },
    {
      name:'Sally Tiffany',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
      rating:'87%',
      reviews:'122'
    },
    {
      name:'Sally Jane',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nGnuXTVg-nMwbTu_Si6IYSU7qF5TCQZexZVK1eiJa98NoIn9Hw',
      rating:'80%',
      reviews:'132'
    },
    {
      name:'Sally Sabrina',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhETiI7KhXnTz098H44tC7Nh7ErF3IrQ5YF6og2EXofhSEA14W7Q',
      rating:'99%',
      reviews:'142'
    },
    {
      name:'Sally Karen',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxZ5rYJ22h5FWrz2ZYYgSQTEiW-iwttStfBR0jRsn8VOFcN_W',
      rating:'33%',
      reviews:'112'
    },
    {
      name:'Sally Holly',
      image: 'https://static1.squarespace.com/static/54d942d5e4b0c4d5e7b8e4f0/t/59f24c0827ef2db556bfb25b/1509051439658/IMG_8836-2.jpg',
      rating:'78%',
      reviews:'212'
    },
    {
      name:'Sally Sydney',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
      rating:'90%',
      reviews:'412'
    },
    {
      name:'Sally June',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQLad1He7W4Gi2CsrNuvGZaR-Zf3poorAJH6E4Ct4GFsNzgFcvg',
      rating:'87%',
      reviews:'512'
    },
     {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    },
    {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    },
    {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    },
     {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    },
     {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    },
     {
      name:'Sally Shrek',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      rating:'17%',
      reviews:'112'
    }]


        const { navigate } = this.props.navigation
        const { width } = Dimensions.get('window')
        const Center = (props) => {
            return(
                <View style={{justifyContent:'center'}}>
                    <Image style={{resizeMode:'contain',width:300,marginTop:70}} source={require('../2_burned.png')}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={<Center />}
                    rightComponent={{ icon: 'group-add', color: '#cc0000',onPress: () => navigate('Share') }}
                    outerContainerStyles={{backgroundColor:'white',borderColor:'transparent',borderBottomWidth:0}}
                />
                <ScrollView>
                    <SearchBar
                        round
                        lightTheme
                        onChangeText={(e) => console.log(e)}
                        onClearText={(e) => console.log(e)}
                        containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                        cancelButtonTitle={'Cancel'}
                        icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder='Search apples by name' />
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {
                            users.map((user,index) => 
                                <View key={index} style={{marginTop:25}}>
                                    <TouchableOpacity
                                        onPress={() => navigate('Profile', {user})}
                                        style={{
                                            overflow: 'hidden',
                                            alignItems: 'center',
                                            position: 'relative',
                                            width: width/3 -11,
                                            height: width/2.1,
                                            borderColor: '#cc0000',
                                            borderWidth:1,
                                            margin:5,
                                        }}>

                                        <View style={{display:'flex', alignItems:'center'}}>
                                            <Image resizeMode='cover' style={{
                                                width: width/3 -6,
                                                height: width/3 -6,
                                            }} 
                                            source={{uri: user.image}}/>
                                        </View>
                                        <Text>{user.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flexDirection:'row',display:'flex',alignItems:'center',flexGrow:1,padding:5}}><Icon type='ionicon' name='logo-apple' color= '#cc0000' /><Text style={{paddingLeft:5}}>{user.rating}</Text></View>
                                            <View style={{flexDirection:'row',display:'flex',alignItems:'center',flexGrow:1,padding:5}}><Icon type='ionicon' name='ios-clipboard' color= '#cc0000' /><Text style={{paddingLeft:5}}>{user.reviews}</Text></View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    image: {
        flex: 1
    }
})
