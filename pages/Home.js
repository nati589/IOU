import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import TransactionCard from "../components/TransactionCard";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View className="flex h-full mx-6">
        <View className="w-full p-6 flex h-auto bg-accent rounded-2xl">
          <View className="self-center">
            <Text className="text-center text-secondary">Balance</Text>
            <View className="flex-row mt-6 gap-x-2">
              <Text className="font-bold text-primary text-3xl">
                2,456,321.00
              </Text>
              <Text className="text-secondary">ETB</Text>
            </View>
          </View>
          <View className="mt-9">
            <View className="flex-row justify-between">
              <Text>Credit Amount</Text>
              <Text className="text-lg text-success">1,453</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Debit Amount</Text>
              <Text className="text-lg text-error">2,311</Text>
            </View>
          </View>
        </View>
        {/* <View> */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6,7,8,9,10]}
          renderItem={({ item }) => (
              <TransactionCard />
          )}
          keyExtractor={(item) => item}
          className='mt-4'
        />
        {/* </View> */}
        <TouchableOpacity
          className="flex-row absolute items-center justify-center p-4 w-auto bottom-5 right-0 rounded-full bg-primary"
          onPress={() => navigation.navigate("NewTransaction")}>
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
