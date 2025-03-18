import { router, useFocusEffect } from "expo-router";
import { SafeAreaView, Text } from "react-native";
export default function HomeScreen() {
  useFocusEffect(() => {
    router.replace("/auth");
  });
  return (
    <SafeAreaView>
      <Text>마이스크린</Text>
    </SafeAreaView>
  );
}
