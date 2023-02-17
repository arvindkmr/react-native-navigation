import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Photo = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Photo</Text>
      <Button
        title="Home"
        width={'80%'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Photo