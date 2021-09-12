/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BoxOffice from './pages/BoxOffice';
import MovieDetail from './pages/MovieDetail';
import styles from './Style/styles';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


function App(){

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "BoxOffice" component = {BoxOffice} options = {{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



export default App;
