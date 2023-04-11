import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View className="flex">
        <Text>Home</Text>
        <TouchableOpacity 
            className="flex-row bg-green-500 mx-12 my-3 items-center justify-center py-2 px-2 w-auto "
            onPress={() => navigation.navigate("Transactions")}
        >
            <Text>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            className="flex-row bg-green-500 mx-12 items-center justify-center py-2 px-2 w-auto "
            onPress={() => navigation.navigate("NewTransaction")}
        >
            <Text>NewTransaction</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
