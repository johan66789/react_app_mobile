import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);
export default function RootLayout() {
  return(
    <>
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown:false
        }}
      />
    </Stack>
    <StatusBar style="light"/>
    </>
  );
}