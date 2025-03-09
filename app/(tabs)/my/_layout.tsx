import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function MyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "마이", headerShown: false }}
      />
    </Stack>
  );
}
