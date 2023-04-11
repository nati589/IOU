import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/NewTransaction';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="NewTransaction" component={NewTransaction} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

