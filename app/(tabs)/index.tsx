import CustomButton from "@/components/CustomButton";
import { Href, router } from "expo-router";
import { SafeAreaView, Text } from "react-native";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스큰</Text>
      <CustomButton label="버튼" onPress={() => router.push("/auth" as Href)} />
    </SafeAreaView>
  );
}
