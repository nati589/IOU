import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav() {
  const navigation = useNavigation();
  const iconSize = 26;
  const iconColor = "#02115B";
  console.log(navigation)

  return (
    <View className="h-11 mt-1">
      <View className="flex flex-row items-center h-full justify-between mx-11">
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("IOU")}
            className="flex justify-center items-center p-2">
            <AntDesign name="home" size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Transactions")}
            className="flex justify-center items-center p-2">
            <MaterialCommunityIcons name="transfer" size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            className="flex items-center p-2">
            <Ionicons name="person-outline" size={iconSize} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
