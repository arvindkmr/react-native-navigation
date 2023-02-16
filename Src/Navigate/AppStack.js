import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import Home from '../Screens/AppScreen/Home';

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
const Stack = createNativeStackNavigator();
const AppStack = () => {
  const {isFirstLaunch, setIsFirstLaunch} = useState(true);

  return (
    <Stack.Navigator initialRouteName={'Photo'}>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Photo"
        component={Photo}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
