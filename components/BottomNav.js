import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav() {
  const navigation = useNavigation();
  return (
    <View className="h-14 mt-1">
      <View className="flex flex-row items-center h-full justify-between mx-11">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("IOU")} className="flex justify-center items-center p-2">
            <AntDesign name="home" size={24} color="#4B1EA2" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Transactions")} className="flex justify-center items-center p-2">
            <MaterialCommunityIcons name="transfer" size={24} color="#4B1EA2" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="flex items-center p-2">
            <Ionicons name="person-outline" size={24} color="#4B1EA2" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
