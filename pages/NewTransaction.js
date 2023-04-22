import { Input } from "@rneui/base";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

function NewTransaction() {
  const [myContacts, setMyContacts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName],
        });

        // if (data.length > 0) {
        // const contact = data[0];
        setMyContacts(
          data
            .map((item) => item.name)
            .filter((contact) => !contact.includes("null"))
        );
        // }
      }
    })();
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="mx-6">
        <View className="z-10">
          <Text>Recepient</Text>
          <AutocompleteDropdown
            // clearOnFocus={false}
            // closeOnBlur={true}
            // closeOnSubmit={false}
            // initialValue={{}}
            // onSelectItem={(item) => setSelectedItem(item.id)}
            dataSet={myContacts.map((item, index) => {
              return { id: index, title: item };
            })}
            // suggestionsListContainerStyle={{
              // backgroundColor: "#fff",
            // }}
            // { id: "3", title: "Gamma" },
          />
        </View>
        <View>
          <Input
            placeholder="Reason for Transaction"
            label="Title"
            labelStyle={{
              color: "#02115B",
            }}
          />
        </View>
        <View>
          <Input
            placeholder="Transaction Description"
            label="Description"
            multiline
            numberOfLines={2}
          />
        </View>
        <View>
          <Input placeholder="Payment Amount" label="Amount" />
        </View>
        <View>
          <Input placeholder="Recepient" label="Name here" />
        </View>
        <View>
          <Input placeholder="Recepient" label="Name here" />
        </View>
        {/* <View>
          {myContacts.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewTransaction;
