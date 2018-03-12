import React, { Component } from 'react'
import {
    StyleSheet,
    View,Image
} from 'react-native'
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header,SearchBar } from 'react-native-elements'



export default class Discover extends Component<Props> {
    constructor(props){
        super(props)
        this.state={
        
        }
    }
   
    render() {

        const { navigate } = this.props.navigation
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
                    rightComponent={{ icon: 'group-add', color: '#cc0000',onPress: () => navigate("Share") }}
                    outerContainerStyles={{backgroundColor:'white',borderColor:'transparent',borderBottomWidth:0}}
                />
                <SearchBar
                    round
                    lightTheme
                    onChangeText={(e) => console.log(e)}
                    onClearText={(e) => console.log(e)}
                    containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0}}
                    cancelButtonTitle={'Cancel'}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' />
                <View style={styles.countCon}> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    countCon:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },

})
