import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Splash from '../Screens/AuthScreen/Splash';

const Navig = () => {
  const [userToken, setUserToken] = useState(false);

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  if (splash) return <Splash />;
  else
    return (
      <NavigationContainer>
        {
                userToken
                    ?
                    <AuthStack /> :
                    <AppStack />
                }

      </NavigationContainer>
    );
};

export default Navig;
