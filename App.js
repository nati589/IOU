import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import NewTransaction from "./pages/NewTransaction";
import ViewUser from "./pages/ViewUser";
import { EvilIcons } from "@expo/vector-icons";
import BottomNav from "./components/BottomNav";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { color } from "@rneui/base";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IOU">
          <Stack.Screen
            name="IOU"
            component={Home}
            options={{
              headerShadowVisible: false,
              headerRight: () => (
                <TouchableOpacity>
                  <EvilIcons name="search" size={24} color="#4B1EA2" />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#4B1EA2",
              },
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#02115B",
              },
              headerLeft: () => <></>,
              headerStyle: {
                backgroundColor: "#fff",
                color: "white",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <EvilIcons name="search" size={24} color="#02115B" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="NewTransaction"
            component={NewTransaction}
            options={{
              title: 'New Transaction',
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#02115B",
              },
              headerStyle: {
                backgroundColor: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#fff",
              },
              headerLeft: () => <></>,
              headerStyle: {
                backgroundColor: "#4B1EA2",
                color: "#fff",
              },
            }}
          />
          <Stack.Screen
            name="ViewUser"
            component={ViewUser}
            options={{
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      {/* <BottomNav /> */}
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider>
  );
}
