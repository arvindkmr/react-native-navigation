import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/AuthScreen/Login';
import Welcome from '../Screens/AuthScreen/Welcome';
import Register from '../Screens/AuthScreen/Register';
import Forgot from '../Screens/AuthScreen/Forgot';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const {isFirstLaunch, setIsFirstLaunch} = useState(true);
  
  return (
    <Stack.Navigator initialRouteName={'Welcome'}>
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
