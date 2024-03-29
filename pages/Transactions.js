import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionCard from "../components/TransactionCard";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { Chip } from "@rneui/themed";
import BottomNav from "../components/BottomNav";

export default function Transactions() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Credit", value: "credit" },
    { label: "Debit", value: "debit" },
    { label: "Complete", value: "complete" },
  ]);
  return (
    <View className="bg-white">
      <View className="flex h-full mx-6">
        {/* <View className="flex-row z-10 w-full justify-between items-end mb-2">
          <TouchableOpacity>
            <Text className="">Transactions</Text>
          </TouchableOpacity>
        </View> */}
        <View>
          {/* <View className="w-24">
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                  borderColor: "#ccc",
                  borderBottomEndRadius: 10,
                  borderBottomStartRadius: 10,
                }}
                dropDownContainerStyle={{
                  borderColor: "#ccc",
                  marginTop: 12,
                  borderRadius: 10,
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  shadowRadius: 3,
                  shadowColor: "#f00",
                  width: 100,
                  alignContent: "flex-start",
                }}
                placeholder="Filter"
                ArrowDownIconComponent={({ style }) => (
                  <Octicons
                    name="filter"
                    size={24}
                    color="black"
                    style={style}
                  />
                )}
                ArrowUpIconComponent={({ style }) => (
                  <Octicons
                    name="filter"
                    size={24}
                    color="black"
                    style={style}
                  />
                )}
                onChangeValue={(item) => {
                  console.log(value);
                }}
              />
            </View> */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-x-2 ">
            {["Credit", "Debit", "Complete", "Overdue", "Deleted"].map(
              (item, index) => {
                return (
                  <Chip
                    title={item}
                    type="outline"
                    containerStyle={{ marginVertical: 5 }}
                    key={index}
                    titleStyle={{
                      color: "#4B1EA2",
                    }}
                    buttonStyle={{
                      borderColor: "#4B1EA2",
                      marginRight: 10,
                    }}
                  />
                );
              }
            )}
          </ScrollView>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
          renderItem={({ item }) => <TransactionCard />}
          keyExtractor={(item) => item}
          className="mt-2"
        />
        <BottomNav />
      </View>
    </View>
  );
}
