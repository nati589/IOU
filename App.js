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

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IOU">
          <Stack.Screen
            name="IOU"
            component={Home}
            options={{
              // title: "",
              headerShadowVisible: false,
              // headerLeft: () => (
              //   <Image source={require("./assets/iou.png")} className="w-10 h-6 pl-3 rounded-auto"/>
              // ),
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
                backgroundColor: "#4B1EA2",
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
              headerLeft: () => (<></>),
              headerStyle: {
                backgroundColor: "#4B1EA2",
                color: '#fff'
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
              headerShadowVisible: false,
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
              headerLeft: () => (<></>),
              headerStyle: {
                backgroundColor: "#4B1EA2",
                color: '#fff'
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
        <View>
          <BottomNav />
        </View>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
