import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/public/SignupScreen';
import LoginScreen from '../screens/public/LoginScreen';
import AppIntro from '../screens/public/AppIntro';
import TipsScreen from '../screens/public/TipsScreen';
import TipsDetailScreen from '../screens/public/TipsDetailScreen';
import WebsiteScreen from '../screens/public/WebsiteScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Intro" headerMode="none">
      <Stack.Screen name="Intro" component={AppIntro} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Tips" component={TipsScreen} />
      <Stack.Screen name="TipsDetail" component={TipsDetailScreen} />
      <Stack.Screen name="Website" component={WebsiteScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
