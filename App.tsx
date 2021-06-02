import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VerticalCards from './src/components/VerticalCards';
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import Home from './src/screens/home';


export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <Text>Loading...</Text>
  }

  return (
    <Home/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
