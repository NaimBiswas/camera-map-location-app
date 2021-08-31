/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import { Avatar, Box, FlatList, ScrollView, Text } from 'native-base';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

const PlaceListScreen = ({ navigation }) => {
   const title = useSelector(state => state.place.title)

   const data = [
      {
         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
         title: title
      },

   ];
   useEffect(() => {
      navigation.setOptions({
         headerRight: () => (
            <Icon
               onPress={() => {
                  navigation.navigate('AddNew', {
                     title: "Add New Pleace"
                  })
               }}
               type="entypo" name={'plus'} color="#fff" size={26} />
         ),
      });

   }, [navigation])



   return (
      <ScrollView
         px={3}
         bg="#06111C"
         nestedScrollEnabled={true}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
      >
         <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            data={data}
            renderItem={({ item }) => (
               <Box px={2} py={2} my={2} mb={4} borderBottomWidth={1} borderBottomColor={'#959595'} borderRadius={null}>
                  <Box flex={1} flexDirection="row" mb={3}>
                     <Avatar
                        size="md"
                        source={{
                           uri: null,
                        }}
                     >
                        NB
                    </Avatar>
                     <Text fontSize="lg" bold px={10} py={2} color={'#fff'} >
                        {item.title}
                     </Text>
                  </Box>

               </Box>
            )}
            keyExtractor={(item) => item.id}
         />
      </ScrollView>
   );
};

export default PlaceListScreen;

const styles = StyleSheet.create({});
