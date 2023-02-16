import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Screens/AuthScreen/Welcome';
import Login from './Screens/AuthScreen/Login';
import Register from './Screens/AuthScreen/Register';
import Forgot from './Screens/AuthScreen/Forgot';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        >
        <Stack.Screen
          name="Home"
          component={Welcome}
          // options={{title: 'Header- Title'}}
          options={{headerShown: false}}
        />
         <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
