import React, { useState, useEffect, useCallback } from 'react';
import {  View } from 'react-native';
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
			<HomepageStack userData={userData} setUserData={setUserData} />
		</View>
	);
}
