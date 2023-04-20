import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import TransactionCard from "../components/TransactionCard";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Link } from "@react-navigation/native";
import PriorityCard from "../components/PriorityCard";
import BottomNav from "../components/BottomNav";

export default function Home({ navigation }) {
  const total = useSelector((state) => state.home.total);
  const debit = useSelector((state) => state.home.debit);
  const credit = useSelector((state) => state.home.credit);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Credit", value: "credit" },
    { label: "Debit", value: "debit" },
  ]);
  return (
    <SafeAreaView className="bg-white">
      <View className="flex h-full mx-6">
        {/* Top Card  */}
        <View className="w-full p-6 flex h-auto bg-primary rounded-2xl">
          <View>
            <Text className="text-white/60">Balance</Text>
            <View className="flex-row mt-2 mb-1 gap-x-2">
              <Text className="font-bold text-white text-4xl">{total}</Text>
              <Text className="text-white">ETB</Text>
            </View>
          </View>
          <View className="mt-2 flex-row items-center justify-between px-3 bg-accent/10 rounded-lg py-2">
            <View>
              <Text className="text-sm/10 text-white/60">Credit</Text>
              <View className="flex-row gap-x-2 mr-2 items-center">
                <AntDesign name="arrowup" size={15} color="red" />
                <Text className="text-lg text-white">{credit}.00</Text>
              </View>
            </View>
            <View>
              <Text className="text-sm/10 text-white/60">Debit</Text>
              <View className="flex-row gap-x-2 mr-2 items-center">
                <AntDesign name="arrowdown" size={15} color="green" />
                <Text className="text-lg text-white">{credit}.00</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Priorities */}
        <View className="flex flex-row justify-between items-center my-4">
          {/* {[0, 1, 2].map((item) => {
            return <PriorityCard level={item} key={item} />;
          })} */}
          <View className="bg-low/10 rounded-lg py-4 px-2">
            <View className="w-14 rounded-md justify-center items-center py-1 mx-4 bg-low/20">
              <Text className="text-2xl text-low" numberOfLines={1}>
                {21}
              </Text>
            </View>
            <Text className="text-center text-low pt-1">Low</Text>
          </View>
          <View className="bg-mid/10 rounded-lg py-4 px-2">
            <View className="w-14 rounded-md justify-center items-center py-1 mx-4 bg-mid/20">
              <Text className="text-2xl text-mid" numberOfLines={1}>
                {12}
              </Text>
            </View>
            <Text className="text-center text-mid pt-1">Medium</Text>
          </View>
          <View className="bg-high/10 rounded-lg py-4 px-2">
            <View className="w-14 rounded-md justify-center items-center py-1 mx-4 bg-high/20">
              <Text className="text-2xl text-high" numberOfLines={1}>
                {13}
              </Text>
            </View>
            <Text className="text-center text-high pt-1">High</Text>
          </View>
        </View>
        {/* Recents */}
        <View className="flex-row mt-4 w-full justify-between items-end">
          <Text className="">Transactions</Text>
          <TouchableOpacity
            className="flex-row gap-x-2 items-center"
            onPress={() => navigation.navigate("Transactions")}>
            <Text className="text-primary">View All</Text>
            <AntDesign name="right" size={18} color="#02115B" />
          </TouchableOpacity>
        </View>
        {/* Cards  */}
        <ScrollView className='mt-4'>
          {/* <View> */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (<TransactionCard key={item}/>)
          })}
        {/* <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => <TransactionCard />}
          keyExtractor={(item) => item}
          className="mt-4"
        /> */}
          {/* </View> */}

        </ScrollView>

        {/* </View> */}
        <TouchableOpacity
          className="flex-row absolute items-center justify-center p-4 w-auto bottom-14 right-0 rounded-full bg-primary"
          onPress={() => navigation.navigate("NewTransaction")}>
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      <BottomNav />
      </View>
    </SafeAreaView>
  );
}
