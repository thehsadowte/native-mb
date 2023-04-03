import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { gStyle } from './Style/style';
import HomepageStack from './navigate';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userData, setUserData] = useState([]);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={gStyle.main} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 28 }}>
        Here's our font
      </Text>
      <HomepageStack userData={userData} setUserData={setUserData} />
    </View>
  );
}
