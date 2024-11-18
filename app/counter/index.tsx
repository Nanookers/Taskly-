import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function CounterScreen() {
    const router = useRouter(); //router navigate, push, replace are most common. 
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Counter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
