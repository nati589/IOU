import { Input } from "@rneui/base";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function NewTransaction() {
  return (
    <SafeAreaView>
      <ScrollView className='mx-6'>
        <View>
          <Input placeholder="Reason for Transaction" label='Title' />
        </View>
        <View>
          <Input placeholder="Transaction Description" label='Description' multiline numberOfLines={2} />
        </View>
        <View>
          <Input placeholder="Payment Amount" label='Amount' />
        </View>
        <View>
          <Input placeholder="Recepient" label='Name here' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewTransaction;
