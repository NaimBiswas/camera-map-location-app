/* eslint-disable prettier/prettier */
import { Box, Center, NativeBaseProvider, ScrollView, VStack } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PlaceListScreen = () => {
   return (
      <ScrollView
         px={3}
         bg="#06111C"
      >

         <Box _text={{
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
         }} > Hello</Box>

      </ScrollView>
   )
}

export default PlaceListScreen

const styles = StyleSheet.create({})
