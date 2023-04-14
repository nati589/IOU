import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { Octicons } from "@expo/vector-icons";

export default function TransactionCard() {
  const navigation = useNavigation();
  const priorities = [
    "my-2 rounded-md h-18 bg-white border-l-3 border-low",
    "my-2 rounded-md h-18 bg-white border-l-3 border-mid",
    "my-2 rounded-md h-18 bg-white border-l-3 border-high",
  ];
  const type = ['text-success font-semibold text-lg', 'text-error font-semibold text-lg']
  let x = Math.floor(Math.random() * 3);
  let y = Math.floor(Math.random() * 2);
  return (
    <TouchableOpacity className={priorities[x]} onPress={() => navigation.navigate("ViewTransaction")}>
      <View className="mx-4 my-2 h-14">
        <View className="flex-row justify-between h-full items-center">
          <View className="flex-row">
            <View className="w-11 bg-black/5 rounded-full mr-2 justify-center items-center">
              {/* <Octicons name="person" size={24} color="white" /> */}
              <Text className="text-lg">J</Text>
            </View>
            <View>
              <Text className="font-semibold text-md">John Doe</Text>
              <Text className="text-sm text-black/20">Tue Mar 14</Text>
            </View>
          </View>
          <Text className={type[y]}>$145</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
