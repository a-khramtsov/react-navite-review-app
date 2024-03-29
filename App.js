import * as Font from 'expo-font'
import React, { useState } from 'react';

import { AppLoading } from 'expo'
import { AppNavigator } from "./routes/AppNavigator";
import { MyDrawer } from "./routes/drawer";

const getFonts = () => {
	return Font.loadAsync({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	})
}


export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	if (fontsLoaded) {
		return <MyDrawer />
	} else {
		return <AppLoading
			startAsync={getFonts}
			onFinish={() => setFontsLoaded(true)}
		/>
	}
}