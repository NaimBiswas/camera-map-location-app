/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceListScreen from '../screen/PlaceListScreen';
import PlaceDetailsScreen from '../screen/PlaceDetailsScreen';
import AddNewScreen from '../screen/AddNewScreen';
import MapScreen from '../screen/MapScreen';

const MainNav = () => {
   const StackNav = createNativeStackNavigator();
   return (
      <NavigationContainer>
         <StackNav.Navigator

            screenOptions={{
               headerStyle: {
                  backgroundColor: '#202731',
               },
               headerTitleStyle: {
                  color: '#f5f5f5',
                  fontSize: 17,
               },
               headerTintColor: "#fff",

            }}


            initialRouteName="Home">
            <StackNav.Screen
               options={{
                  animation: 'flip'
               }}
               name="Home" component={PlaceListScreen} />


            <StackNav.Screen
               options={{
                  animation: 'fade'
               }}
               name="PlaceDetails" component={PlaceDetailsScreen} />
            <StackNav.Screen name="AddNew" component={AddNewScreen} />
            <StackNav.Screen name="Map" component={MapScreen} />
         </StackNav.Navigator>
      </NavigationContainer>

   );
};

export default MainNav;

const styles = StyleSheet.create({});
