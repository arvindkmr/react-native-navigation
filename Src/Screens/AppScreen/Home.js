import React from 'react';
import {View, Text,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Touchable } from 'react-native/Libraries/Components/Touchable/Touchable';

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home</Text>
      <Button
        title="Photo"
        width={'80%'}
        onPress={() => navigation.navigate('Photo')}
      />
      <TouchableOpacity style={{backgroundColor:'pink'}}>
        <Text>
          Hello
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
