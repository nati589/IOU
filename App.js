import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/NewTransaction';
// import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import BottomNav from './components/BottomNav';
import Profile from './pages/Profile';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='IOU'>
        <Stack.Screen name="IOU" component={Home} options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <Image source={require("./assets/iou.png")} className="w-10 h-6 pl-3 rounded-auto"/>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <EvilIcons name="search" size={24} color="black" />
            </TouchableOpacity>
          )
        }}/>
        <Stack.Screen name="Transactions" component={Transactions} options={{
          headerShadowVisible: false,
        }}/>
        <Stack.Screen name="NewTransaction" component={NewTransaction} options={{
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerShadowVisible: false,
        }} />
      </Stack.Navigator>
      <View>
        <BottomNav />
      </View>
      </NavigationContainer>
  );
}

