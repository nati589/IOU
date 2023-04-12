import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View className="flex h-full">
        <Text>Home</Text>
        <TouchableOpacity
          className="flex-row absolute mr-7 items-center justify-center p-4 w-auto bottom-5 right-0 rounded-full bg-logogreen"
          onPress={() => navigation.navigate("NewTransaction")}>
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
