/* eslint-disable prettier/prettier */
import { Formik } from 'formik';
import { Actionsheet, Box, Button, Center, Divider, Heading, Image, Input, Popover, ScrollView, Text, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPlace } from '../store/Slicer/PlaceSlicer';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'react-native-elements';

const AddNewScreen = ({ route, navigation }) => {
   const [isLoading, setisLoading] = useState(false);
   const { isOpen, onOpen, onClose } = useDisclose();
   const [image, setImage] = useState('https://wallpaperaccess.com/full/317501.jpg');
   const { title } = route.params;
   const dispatch = useDispatch();

   useEffect(() => {
      navigation.setOptions({
         title: title,
      });
   }, [title, navigation]);
   const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
         width: 300,
         height: 400,
         cropping: true,
      }).then(image => {
         setImage(image.path);
         onClose
      });
   };
   const takePhotoFromGallery = () => {
      ImagePicker.openPicker({
         width: 300,
         height: 400,
         cropping: true,
      }).then(image => {
         setImage(image.path);
         onClose
      });
   };
   return (
      <ScrollView
         px={3}
         bg="#06111C"
         nestedScrollEnabled={true}
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
      >
         {/* image Picker  */}
         <Center my={2}>
            <Image

               height={300}
               width={'100%'}
               resizeMode="contain"
               source={{
                  uri: image,
               }}
               alt={'Alternate Text'}
            />

         </Center>


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
                  const id = new Date().toISOString();
                  setisLoading(true);
                  dispatch(setPlace({ id: id, title: values.title, image: image }));
                  setisLoading(false);
                  navigation.goBack();
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
                        width={'100%'}
                        isLoading={isLoading}
                        size={'lg'}
                        my={2}
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


         <Button mt={4} onPress={onOpen}>Change Photo</Button>


         <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content alignContent="center" alignItems={'center'} >
               <View>
                  <Text fontSize={26} bold mb={4}>Choose Photo</Text>
               </View>
               <Divider borderColor="gray.500" />
               <Actionsheet.Item mb={3}
                  _text={{
                     color: '#191919',
                  }}
                  backgroundColor={'red.300'}
                  alignItems={'center'}
                  width={'100%'}
                  onPress={takePhotoFromCamera}
                  startIcon={

                     <Icon style={{ marginRight: 25 }} type="entypo" name="camera" color="#000" size={28} />
                  }
               >

                  Pick From Camera
               </Actionsheet.Item>
               <Divider borderColor="gray.300" />
               <Actionsheet.Item
                  mb={3}

                  _text={{
                     color: '#191919',

                  }}
                  backgroundColor={'red.300'}
                  onPress={takePhotoFromGallery}
                  startIcon={
                     <Icon style={{ marginRight: 25 }} type="entypo" name="image" color="#000" size={28} />
                  }
               >
                  Pick From Gallery
               </Actionsheet.Item>
            </Actionsheet.Content>
         </Actionsheet>




      </ScrollView >
   );
};

export default AddNewScreen;

const styles = StyleSheet.create({});
