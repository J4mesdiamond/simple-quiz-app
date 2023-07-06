import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;