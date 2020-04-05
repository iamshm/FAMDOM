import { createAppNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'
import { Header } from 'react-native/Libraries/NewAppScreen'

var firebaseConfig = {
  apiKey: "AIzaSyA-hmNhAYA8aHqOXnhOezqXQQRzTbuSc0E",
  authDomain: "socialapp-01.firebaseapp.com",
  databaseURL: "https://socialapp-01.firebaseio.com",
  projectId: "socialapp-01",
  storageBucket: "socialapp-01.appspot.com",
  messagingSenderId: "1068059016826",
  appId: "1:1068059016826:web:0dcd8e7f9ac60939c085c3",
  measurementId: "G-M1T4HP5YL6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen
},
  { headerMode: 'none' }
)
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
},

  { headerMode: 'none' }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    }, {
    initialRouteName: "Loading"
  }
  )
)