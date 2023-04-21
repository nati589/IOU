import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import NewTransaction from "./pages/NewTransaction";
import ViewTransaction from "./pages/ViewTransaction";
// import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import BottomNav from "./components/BottomNav";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import { store } from "./store";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

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
                  <EvilIcons name="search" size={24} color="white" />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#fff",
              },
              headerStyle: {
                backgroundColor: "#02115B",
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
                color: "#fff",
              },
              headerLeft: () => <></>,
              headerStyle: {
                backgroundColor: "#4B1EA2",
                color: "#fff",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <EvilIcons name="search" size={24} color="white" />
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
                color: "#fff",
              },
              headerStyle: {
                backgroundColor: "#02115B",
              },
              disable
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
            name="ViewTransaction"
            component={ViewTransaction}
            options={{
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      {/* <BottomNav /> */}
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
