import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Alert} from "react-native";
import { ShoppingListItem } from "../components/ShopingListItem";
import { theme } from "../theme";

type ShoppingListItemType = {
  id: string;
  name: string;
}
const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
]

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>(initialList)
  const [ value, setValue ] = useState("")

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name:value},
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput} 
        placeholder="E.g Coffee"
        value={value}
        //this allows a text string specifically
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        /> 
      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id}/>
      ))}
    </View>
  );
}
// This just creates an object of styles.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth:2,
    padding: 12,
    marginHorizontal:12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50
  }
});
