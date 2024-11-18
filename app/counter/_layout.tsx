import { Link, Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "../../theme";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Counter", headerRight: () => {
                return (//if you pass a component like pressable in link, you need to mark it asChild, specifically when there is no defined border
                    <Link href="/counter/history" asChild> 
                        <Pressable hitSlop={30}>
                            <MaterialIcons 
                                name="history" 
                                size={32}  
                                color={theme.colorGrey}/>
                        </Pressable>
                    </Link>

                )
            }}}/>
        </Stack>
    )
}