import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";

type Props = {
    // If I want to make this optional, format like: name?:string
    name: string;
    isCompleted?: boolean;
}

export function ShoppingListItem({ name, isCompleted }: Props){
    const handleDelete = () => {
        Alert.alert(`Are you sure you want to delete ${name}?`, 
        `${name} will be gone forever`,
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

    return(
        //Turning this into an array allows conditional 
        <View style={[styles.itemContainer, isCompleted ? styles.completedContainer : undefined]}>
        <Text style={[styles.itemText, isCompleted ? styles.completedText : undefined]}>{name}</Text>
        <TouchableOpacity onPress={()=>console.log("Pressed")} 
          activeOpacity={0.5} 
            style={ [styles.button, isCompleted ? styles.completedButton : undefined]} 
              onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
      borderBottomWidth: 1, //not a pixel, but a display point
      borderBottomColor: theme.colorCerulea, 
      paddingHorizontal: 8, 
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
    },
    completedButton: {
        backgroundColor: theme.colorGrey,
    }
  });