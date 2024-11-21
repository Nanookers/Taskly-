import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, Text, FlatList, View} from "react-native";
import { ShoppingListItem } from "../components/ShopingListItem";
import { theme } from "../theme";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
}

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([])
  const [ value, setValue ] = useState("")

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name:value},
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      console.log(newShoppingList)
      setValue("")
    }
  }

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id)
    console.log(newShoppingList)
    setShoppingList(newShoppingList)
  }

  return (
    <FlatList //use FlatList, as opposed to scroll view, especially when mapping through data
      data={shoppingList}
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmpty}>
          <Text>Your List Is Empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput 
        style={styles.textInput} 
        placeholder="E.g Coffee"
        value={value}
        //this allows a text string specifically
        onChangeText={setValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
        /> 
      } //this handles the mapping as we add new lines
      renderItem={({ item }) => (
         <ShoppingListItem 
         name={item.name} 
         onDelete={ () => handleDelete(item.id)}/>
      )}
    />
  );
}
// This just creates an object of styles.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12
  },
  contentContainer: {
    paddingTop: 24
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth:2,
    padding: 12,
    marginHorizontal:12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite //This is what makes the input not see through
  },
  listEmpty:{
    justifyContent:"center",
    alignItems: "center",
    marginVertical: 18
  }
});
