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
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="IOU">
          <Stack.Screen
            onLayout={onLayoutRootView}
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
        {/* <View className='absolute bottom-0 left-0 right-0 h-20'> */}
        <BottomNav />
        {/* </View> */}
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
