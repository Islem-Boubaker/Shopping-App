// Required at the top to make gesture-handler work on native (Android/iOS)
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import ShoppingCart from "./src/screens/ShoppingCart";


enableScreens();
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
