/* eslint-disable prettier/prettier */
import { Formik } from 'formik';
import { Box, Button, Heading, Input, ScrollView, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPlace } from '../store/Slicer/PlaceSlicer';
const AddNewScreen = ({ route, navigation }) => {
   const [isLoading, setisLoading] = useState(false);
   const { title } = route.params;
   const dispatch = useDispatch();

   useEffect(() => {
      navigation.setOptions({
         title: title,
      });
   }, [title, navigation]);



   return (
      <ScrollView
         px={3}
         bg="#06111C"
         nestedScrollEnabled={true}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
      >


         <Box >

            <Formik
               initialValues={{ title: '' }}

               validate={value => {

                  const errors = {};

                  if (!value.title) {
                     errors.title = 'This field is required!';
                  }

                  return errors;
               }}
               onSubmit={values => {
                  setisLoading(true);
                  dispatch(setPlace(values.title));
                  setisLoading(false);
                  navigation.goBack()
               }}
            >
               {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                  <Box width={'100%'} alignItems={'center'}>
                     <Input
                        value={values.title}
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        width="95%"
                        variant="underlined"
                        placeholder="Enter Place Name"
                        _light={{
                           placeholderTextColor: 'blueGray.400',
                        }}
                        _dark={{
                           placeholderTextColor: 'blueGray.50',
                        }}
                        color={'#f5f5f5'}
                     />
                     <Text color="#FF0005" fontStyle="italic" fontSize={16} textAlign="left" mt={3}  >
                        {touched.title && errors.title}
                     </Text>

                     <Button
                        onPress={handleSubmit}
                        colorScheme="danger"
                        color={'#fff'}
                        isLoading={isLoading}
                        size={'lg'}
                        my={5}
                        mt={1}

                        isLoadingText="Saving...">
                        <Text
                           fontSize={16}
                           color={'#fff'}>
                           Save Place
                         </Text>
                     </Button>

                  </Box>
               )}
            </Formik>
         </Box>


      </ScrollView >
   );
};

export default AddNewScreen;

const styles = StyleSheet.create({});
