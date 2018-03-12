import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Notifications from './Notifications'
import Account from './Account'
import AddReview from './AddReview'
import Discover from './Discover'
import Routes from './Stack.js'

const Tabs = TabNavigator({
    Home: { screen: Routes },
  // Discover: {screen: Discover},
    AddReview: { screen : AddReview},
    Notifications: { screen: Notifications },
    Account: { screen: Account },
},{
	
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state
            let iconName
            if (routeName === 'Home') {
                iconName = `${focused ? 'ios-home' : 'ios-home-outline'}`
            } else if (routeName === 'Notifications') {
                iconName = `${focused ? 'ios-heart' : 'ios-heart-outline'}`
            }
            else if (routeName === 'Account') {
                iconName = `${focused ? 'ios-contact' : 'ios-contact-outline'}`
            }
            else {
                iconName = `${focused ? 'ios-add-circle' : 'ios-add-outline'}`
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />
        },
    }),
    tabBarPosition:'bottom',
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor:'red',
        activeBackgroundColor:'white',
        inactiveTintColor:'grey',
        inactiveBackgroundColor:'white',
        labelStyle:{
            display:'none'
        }
    }
})

Tabs.navigationOptions ={
  title:'Example'
}

export default Tabs