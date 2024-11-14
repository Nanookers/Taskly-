import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete this?", 
    "It will be gone forever",
    [
      {
        text: "Yes",
        onPress: () => console.log("Deleting"),
        style:"destructive"
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel"
      }
    ]
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity onPress={()=>console.log("Pressed")} 
          activeOpacity={0.5} 
            style={styles.button} 
              onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1, //not a pixel, but a display point
    borderBottomColor: "#1a759f", 
    paddingHorizontal: 8, 
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center", //This literally aligns the items 
    justifyContent: "space-between" //adds space between the buttons
    },
  itemText: { 
    fontSize: 18, 
    fontWeight: 200
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6, 
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  }
});
