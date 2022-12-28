import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Login from './pages/Login';
import FirstQ from './pages/FirstQ';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'HappyGoheungB': require('./assets/fonts/HappyGoheungB.ttf'),
    'HappyGoheungL': require('./assets/fonts/HappyGoheungL.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="FirstQ"
        component={FirstQ}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
