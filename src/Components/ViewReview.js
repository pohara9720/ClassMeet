import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,Image,ScrollView,TouchableOpacity
} from 'react-native'
// npm i react-native-vector-icons --save && rnpm link react-native-vector-icons

import { Header,ListItem,Icon,Badge,SearchBar,List } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'


export default class ViewReview extends Component<Props> {
    constructor(props){
        console.log('Review  Props',props)
        super(props)
        this.state ={

        }

    }

  
  render() {
    const comments = [{
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    },
    {
      name:'Amy',
      image: 'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831e53e3df288f28988d55/585da8913e00be46604a4204/1482533029989/female+lawyer+headshot.jpg?format=500w',
      comment:'This is a very nice review turn up stay true and keep it one hunnid'
    }]

        const { navigate } = this.props.navigation
        const backAction = NavigationActions.back({})
        return (

            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#cc0000',onPress: () => this.props.navigation.dispatch(backAction)}}
                    centerComponent={{ text: 'Review', style: { color: '#cc0000',fontSize:30 } }}
                    rightComponent={{ icon: 'share',type:'material-community', color: '#cc0000' }}
                    outerContainerStyles={{backgroundColor:'white',borderColor:'transparent',borderBottomWidth:0}}
                />
                <ScrollView>
                    <View style={{borderBottomColor:'#cc0000',borderBottomWidth:1}}>
                        <ListItem 
                            roundAvatar
                            title={this.props.navigation.state.params.item.name}
                            avatar={{uri: this.props.navigation.state.params.item.image}}
                            subtitle={this.props.navigation.state.params.item.subtitle}
                            badge={{ value: `${this.props.navigation.state.params.item.score}`, textStyle: { color: 'white' }, containerStyle: { backgroundColor:'#cc0000' } }}
                        />
                        <View style={{flex:1,padding:10}}>
                            <Text style={{padding:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </View>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',padding:5,justifyContent:'space-between'}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <Icon iconStyle={{paddingRight:15}} color={'#cc0000'} name='thumb-up'/>
                            <Icon iconStyle={{}} color={'#cc0000'} name='thumb-down' />
                        </View>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <Badge containerStyle={{ backgroundColor: '#cc0000'}} wrapperStyle={{paddingRight:15}}>
                                <Text style={{color:'white'}}>6 Agree</Text>
                            </Badge>
                            <Badge containerStyle={{ backgroundColor: '#cc0000'}}>
                                <Text style={{color:'white'}}>6 Disagree</Text>
                            </Badge>
                        </View>
                    </View>
                    <List>
                        {
                            comments.map((item,index) => 
                                <ListItem 
                                    key={index}
                                    roundAvatar
                                    textInputMultiline={true}
                                    titleNumberOfLines={10}
                                    title={item.comment}
                                    avatar={{uri: item.image}}
                                    subtitle={item.name}
                                    hideChevron={true}
                                    badge={{ value: `7 min ago`, textStyle: { color: 'white',fontSize:10 }, containerStyle: { backgroundColor:'#cc0000' } }}
                                />)
                        }
                    </List>
            
         
                </ScrollView>
                <SearchBar
                    round
                    lightTheme
                    onChangeText={(e) => console.log(e)}
                    onClearText={(e) => console.log(e)}
                    containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0,justifyContent:'flex-end'}}
                    cancelButtonTitle={'Cancel'}
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Add Comment...' />
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    linearGradient: {
        marginTop:15,
        alignSelf:'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        width: '70%',
    },
    buttonText: {
        fontSize: 12,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    ratings:{
        paddingLeft:10,
        fontFamily:'Chalkduster',
        fontSize:15,
        color:'#cc0000'
    }
})
