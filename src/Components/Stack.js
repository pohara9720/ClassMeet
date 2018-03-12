
import React from 'react'
import { StackNavigator } from 'react-navigation'
import MainFeed from './MainFeed'
import Profile from './Profile'
import Share from './Share'
import Settings from './Settings'
import ImageView from './ImageView'
import ViewReview from './ViewReview'


const Routes = StackNavigator({
    MainFeed: { screen: props => <MainFeed {...props} />},
    Profile: { screen: props => <Profile {...props} />  },
    Share: { screen : props => <Share {...props} /> },
    Settings: { screen : props => <Settings {...props} /> },
    ImageView: { screen : props => <ImageView {...props} /> },
    ViewReview: { screen : props => <ViewReview {...props} /> }

},
{
    headerMode: 'none',
})



  
module.exports = Routes


