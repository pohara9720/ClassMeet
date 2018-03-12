import React, { Component } from 'react'
import {

    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,CameraRoll,Slider
} from 'react-native'

import {Header, SearchBar} from 'react-native-elements'
import { NavigationActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'


export default class AddReview extends Component<{}> {
    constructor(props){
        super(props)
        this.state = {
            image:'',
            rating:0
        }
    }


 _handleButtonPress = () => {
  
     const { navigate } = this.props.navigation
     CameraRoll.getPhotos({
         first: 20,
         assetType: 'All',
     })
         .then(r => {
             console.log(r)
             const stateChange = {
                 imageFunc: (param) => this.setState({image: param}),
                 imageRes: r
             }
             const imageRes = r 
             navigate('Upload', {stateChange})
         })
         .catch((err) => {
             console.log(err)
         })
 };


 render() {

     const { navigate } = this.props.navigation

     let content

     if(this.state.image === ''){
         content = <View style={{alignItems:'center'}}><Text style={{color:'#cc0000'}}>Upload Image</Text></View>
     }
     else{
         content = <Image style={{height:146}} source={{uri:this.state.image}} />
     }
     return (

         <View style={styles.container}>
             <ScrollView style={styles.content}>
                 <Header
                     centerComponent={{ text: `Add an Apple`, style: { color: '#cc0000',fontSize:30 } }}
                     // rightComponent={{ icon: 'settings', color: '#cc0000'}}
                     outerContainerStyles={{backgroundColor:'white',borderBottomWidth:0}}
                 />
                 <TouchableHighlight onPress={this._handleButtonPress} underlayColor={'#cc0000'} style={{backgroundColor:'white',borderColor:'#cc0000',borderWidth:2,marginBottom:10,height:150,justifyContent:'center'}}>
                     {content}
                 </TouchableHighlight>
                 <Text>{`Rate Apple ${this.state.rating}%`}</Text>
                 <Slider value={this.state.rating} step={1} minimumValue={0} maximumValue={100} minimumTrackTintColor={'#cc0000'} onValueChange={(e) => this.setState({rating:e})}/>
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='First Name' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='How do you know this Apple?' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='Last Name' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='Social Media Link' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='City,ST' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='Add Review' />     
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='Occupation (optional)' />
                 <SearchBar
                     round
                     lightTheme
                     onChangeText={(e) => console.log(e)}
                     onClearText={(e) => console.log(e)}
                     containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                     cancelButtonTitle={'Cancel'}
                     icon={{ type: 'font-awesome', name: 'search' }}
                     placeholder='Age (optional)' />
                 <LinearGradient colors={['red', '#cc0000']} start={{x: 1, y: 0}} end={{x: 0.2, y: 0}} style={styles.linearGradient}>
                     <Text onPress={()=> this.setState({modal:false,kings:4})} style={styles.buttonText}>
                           Add Apple
                     </Text>
                 </LinearGradient>   
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


    content:{
        flex:1,
        padding:5,
        backgroundColor:'white',
        borderColor:'transparent',
        borderWidth: 0
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    linearGradient: {
        alignSelf:'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop:15,
        borderRadius: 25,
        width: '100%',
        marginBottom:30
    }
})
