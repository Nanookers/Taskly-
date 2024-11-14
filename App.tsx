import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { ShoppingListItem } from "./components/ShopingListItem";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name= "Coffee" />
      <ShoppingListItem name= "Milk" isCompleted />
      <ShoppingListItem name= "Sugar" isCompleted/>
    </View>
  );
}
// This just creates an object of styles.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  }
});
