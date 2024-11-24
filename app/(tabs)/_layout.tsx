import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return(
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:"blue"
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "My app",
          tabBarIcon:({focused,color})=>{
            return(
                <Ionicons
                name={focused ?"home-sharp":"home-outline"}
                size={25}
                color={color}
             />
            );
          }
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "about",
          tabBarIcon:({focused,color})=>{
            return(
                <Ionicons
                name={focused ?"information-circle":"information-circle-outline"}
                size={25}
                color={color}
             />
            );
          }
        }}
      />
    </Tabs>
  );
}
