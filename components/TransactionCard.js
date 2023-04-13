import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function TransactionCard() {
  return (
    <TouchableOpacity className="flex mb-4 border-success rounded-md  px-4 py-2 shadow-lg shadow-success">
      <View className="h-14">
        <View className="flex-row justify-between">
          <Text>hi</Text>
          <Text>hi</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
