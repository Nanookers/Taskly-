import { Tabs } from "expo-router";
import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../theme";

export default function Layout(){
    // I'm using this page as a router, essentially. this is setting values like presentation/animation of modals.
    // when swapping between Stacks or tabs, all navigation remains the same. 
    return(
        <Tabs screenOptions={{tabBarActiveTintColor: theme.colorCerulea}}>
            <Tabs.Screen 
            name="index"  
                options={{
                title: "Shopping List", 
                tabBarIcon: ({color, size}) => (//you use pased in colors like this because you can define them at a global level.
                    <Feather name="list" size={size} color={color}/> //THis is a return statement, the parenthesis around it indicate that
                ),
            }}/>
            <Tabs.Screen name="counter"  
                options={{
                    title: "Counter",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="clockcircleo" size={size} color={color}/>
                    ),
                    }}/>
            <Tabs.Screen name="idea"  
            options={{
                title: "Idea",
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="lightbulb" size={size} color={color }/>
                )
                }}/>
        </Tabs>
    )
}