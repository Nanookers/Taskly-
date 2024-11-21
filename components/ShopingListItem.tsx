import { Text, TouchableOpacity, View, StyleSheet, Alert, Pressable } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign"

type Props = {
    // If I want to make this optional, format like: name?:string
    name: string;
    isCompleted?: boolean;
    onDelete: () => void; //mandatory function ()=> means "give me any function."
    onToggleComplete: () => void;
}

export function ShoppingListItem({ name, isCompleted, onDelete, onToggleComplete }: Props){
    const handleDelete = () => {
        Alert.alert(`Are you sure you want to delete ${name}?`, 
        `${name} will be gone forever`,
        [
          {
            text: "Yes",
            onPress: () => onDelete(),
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

    return(
        //Turning this into an array allows conditional 
        <Pressable style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]} onPress={onToggleComplete}>
        <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
        <TouchableOpacity onPress={()=>console.log("Pressed")} 
          activeOpacity={0.5} 
            onPress={handleDelete}>
            <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
        </TouchableOpacity>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
      borderBottomWidth: 1, //not a pixel, but a display point
      borderBottomColor: theme.colorCerulea, 
      paddingHorizontal: 18, 
      paddingVertical: 16,
      flexDirection: "row",
      alignItems: "center", //This literally aligns the items 
      justifyContent: "space-between" //adds space between the buttons
      },
    completedContainer: {
        backgroundColor: theme.colorLightGrey,
        borderBottomColor: theme.colorLightGrey
    },
    itemText: { 
      fontSize: 18, 
      fontWeight: 200
    },
    completedText: {
        textDecorationLine: "line-through",
        textDecorationColor: theme.colorGrey,
        color: theme.colorGrey
    }
  });