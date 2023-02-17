import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import Home from '../Screens/AppScreen/Home';
import Photo from '../Screens/AppScreen/Photo';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  const {isFirstLaunch, setIsFirstLaunch} = useState(true);

  return (
    <Stack.Navigator initialRouteName={'Home'}>
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
