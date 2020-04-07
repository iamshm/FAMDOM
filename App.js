import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import NotificationScreen from './screens/NotificationScreen'

import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import FirebaseKeys from "./config"

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

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => <TouchableOpacity><Ionicons name='md-home' size={28} color={tintcolor} /></TouchableOpacity>

      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => <TouchableOpacity><Ionicons name='md-chatboxes' size={28} color={tintcolor} /></TouchableOpacity>
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => <TouchableOpacity><Ionicons name='md-add-circle' size={36} color="#fff" /></TouchableOpacity>
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => <TouchableOpacity><Ionicons name='md-notifications' size={28} color={tintcolor} /></TouchableOpacity>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintcolor }) => <TouchableOpacity><Ionicons name='md-person' size={28} color={tintcolor} /></TouchableOpacity>
      }
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#FFF",
      style: {
        position: "absolute",
        bottom: 15,
        backgroundColor: "rgb(72,124,221)",
        height: 70,
        width: "95%",
        borderColor: "#fff",
        borderRadius: 25,
        // borderTopRightRadius: 25,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,

      }

    }
  }
);
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
},

  { headerMode: 'none' }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    }, {
    initialRouteName: "Loading"
  }
  )
)