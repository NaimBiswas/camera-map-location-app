/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNav from './navigation/MainNav';
import { NativeBaseProvider, Box } from 'native-base';


const Stack = createNativeStackNavigator();

function App() {
   return (
      <NativeBaseProvider>
         <MainNav />
      </NativeBaseProvider>
   );
}

export default App;