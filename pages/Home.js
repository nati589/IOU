import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import TransactionCard from "../components/TransactionCard";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Octicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Credit", value: "credit" },
    { label: "Debit", value: "debit" },
  ]);
  return (
    <SafeAreaView className="bg-accent/60">
      <View className="flex h-full mx-6">
        {/* Top Card  */}
        <View className="w-full p-6 flex h-auto bg-primary rounded-2xl">
          <View className="self-center">
            <Text className="text-center text-white/60">Balance</Text>
            <View className="flex-row mt-6 gap-x-2">
              <Text className="font-bold text-white text-3xl">
                2,456,321.00
              </Text>
              <Text className="text-white">ETB</Text>
            </View>
          </View>
          <View className="mt-9">
            <View className="flex-row justify-between">
              <Text className="text-white/70">Debit Amount</Text>
              <Text className="text-sm text-error/100">2,311 ETB</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-white/70">Credit Amount</Text>
              <Text className="text-sm text-low">1,453 ETB</Text>
            </View>
          </View>
        </View>
        <View className="flex-row z-10 mt-4 w-full justify-between items-end">
          <Text className="">Transactions</Text>
          <View className="w-12">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                borderColor: '#ccc',
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
              }}
              dropDownContainerStyle={{
                borderColor: '#ccc',
                marginTop: 12,
                borderRadius: 10,
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                shadowRadius: 3,
                shadowColor: '#f00',
                width: 100,
                alignContent: 'flex-start', 
              }}
              placeholder=""
              // showArrowIcon={false}
              ArrowDownIconComponent={({style}) => <Octicons name="filter" size={24} color="black" style={style} />}
              ArrowUpIconComponent={({style}) => <Octicons name="filter" size={24} color="black" style={style} />}
              // arrowIconStyle={{
              //   marginRight: 100
              // }}
              onChangeValue={(item) => {
                console.log(value);
              }}
              // className="w-12"
            />
          </View>
        </View>

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }) => <TransactionCard />}
          keyExtractor={(item) => item}
          className="mt-4"
        />
        {/* </View> */}
        <TouchableOpacity
          className="flex-row absolute items-center justify-center p-4 w-auto bottom-2 right-0 rounded-full bg-primary"
          onPress={() => navigation.navigate("NewTransaction")}>
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
