import CustomButton from "@/components/CustomButton";
import { SafeAreaView, Text } from "react-native";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스큰</Text>
      <CustomButton label="버튼" onPress={() => {}} />
    </SafeAreaView>
  );
}
