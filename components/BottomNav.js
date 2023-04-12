import { Link, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function BottomNav() {
  const navigation = useNavigation();
  return (
    <View className="h-12 mt-1">
      <View className="flex flex-row items-center h-full justify-between mx-10">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("IOU")} className="flex justify-center items-center">
            <AntDesign name="home" size={24} color="#31C48D" />
            <Text className="color-logogreen">Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Transactions")} className="flex justify-center items-center">
            <MaterialIcons name="attach-money" size={24} color="#31C48D" />
            <Text className="color-logogreen">Transactions</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="flex items-center">
            <Octicons name="person" size={24} color="#31C48D" />
            <Text className="color-logogreen">Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
