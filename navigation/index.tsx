import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../src/screen/Home';
import { Searchcreen } from '../src/screen/SearchScreen';

const stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Search" component={Searchcreen} />
    </stack.Navigator>
  );
};
