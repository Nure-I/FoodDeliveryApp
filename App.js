import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Restaurant, Home, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
	const [loaded] = useFonts({
		"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
		"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={Tabs} />
				<Stack.Screen name="Restaurant" component={Restaurant} />
				<Stack.Screen name="OrderDelivery" component={OrderDelivery} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// export default App;
