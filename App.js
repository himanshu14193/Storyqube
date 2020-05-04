import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
console.log(STATUSBAR_HEIGHT)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import AuthenticationScreen from './component/authentication/Authentication'
import HomeScreen from './component/home/Home'
import ProfileScreen from './component/home/Profile'
import SearchScreen from './component/home/Search'
import ReferalScreen from './component/home/Referral'
import AboutScreen from './component/home/About'
import SubscriptionScreen from './component/home/Subscription'
import PaymentScreen from './component/home/Payment'
import CardScreen from './component/home/Card'
import AddCardScreen from './component/home/AddCard'
import StoryScreen from './component/home/Story';
import GameScreen from './component/home/Game'
import LeaderboardScreen from './component/home/Leaderboard';
import SavedCardScreen from './component/home/SavedCard';
import NotificationScreen from './component/home/Notification';
import YearlyPlanScreen from './component/home/YearlyPlan';
import MonthlyPlanScreen from './component/home/MonthlyPlan';

import Home from './component/assets/navBar/home.svg'
import Search from './component/assets/navBar/search.svg'
import Account from './component/assets/navBar/account.svg'
import HomeFocused from './component/assets/navBar/home1.svg'
import SearchFocused from './component/assets/navBar/search1.svg'
import AccountFocused from './component/assets/navBar/account1.svg'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import { AuthContext } from "./context";






const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Authentication"
      component={AuthenticationScreen}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <HomeStack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false }} />
  </HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    <ProfileStack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
    <ProfileStack.Screen name="YearlyPlan" component={YearlyPlanScreen} options={{ headerShown: false }} />
    <ProfileStack.Screen name="MonthlyPlan" component={MonthlyPlanScreen} options={{ headerShown: false }} />
    <ProfileStack.Screen name="Referral" component={ReferalScreen} options={{ headerShown: false }} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    inactiveColor='white'
    shifting={true}
    labeled={false}
    barStyle={{ backgroundColor: '#171B35' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <HomeFocused width={100} height={30} />
            :
            <Home width={24} height={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <SearchFocused width={100} height={30} />
            :
            <Search width={24} height={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <AccountFocused width={100} height={30} />
            :
            <Account width={24} height={24} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootStack = createStackNavigator();


class App extends React.Component {
  state = {
    userToken: null,
    status: null
  }
  componentDidMount() {
    this._bootstrapAsync()
  }
  componentDidUpdate() {
    this._bootstrapAsync()
  }
  _bootstrapAsync = async () => {
    try {
      const value = await AsyncStorage.multiGet(['userToken', 'status', 'role'])
      if (value[0][1] !== null) {
        this.setState({
          userToken: value[0][1]
        })
        // if (value[0][1] == this.state.userToken) {
        //   console.log('1',this.state.userToken,value[0][1])
        // }
        // else if (value[0][1] != this.state.userToken){

        //   console.log('2',this.state.userToken,value[0][1])
        // }
      }
      else {
        this.setState({ userToken: null })
      }
    } catch (e) {
      console.log('getting token error-', e)
    }
  };
  render() {
    return (
      <NavigationContainer>
        <StatusBar height={STATUSBAR_HEIGHT} barStyle='light-content' backgroundColor='#0A0A22' />
        <RootStack.Navigator >
          {
            this.state.userToken == null ?
              <RootStack.Screen
                name="Authentication"
                component={AuthStackScreen}
                options={{
                  headerShown: false,
                  animationEnabled: false
                }}
              />
              :
              <>
                <RootStack.Screen name="App" component={TabsScreen} options={{ headerShown: false, animationEnabled: false }}
                />
                <ProfileStack.Screen name="Subscription" component={SubscriptionScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="Card" component={CardScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="AddCard" component={AddCardScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="SavedCard" component={SavedCardScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="Story" component={StoryScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="Game" component={GameScreen} options={{ headerShown: false }} />
                <ProfileStack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }} />

              </>
          }
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };
};
export default App;
