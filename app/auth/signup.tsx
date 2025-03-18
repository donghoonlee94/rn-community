import InputField from "@/components/InputField";
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import FixedBottomCTA from "@/components/FixedBottomCTA";

export default function SignupScreen() {
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangeInput = (key: keyof typeof signupValues, value: string) => {
    setSignupValues({ ...signupValues, [key]: value });
  };

  const handleSubmit = () => {
    if (signupValues.password !== signupValues.passwordConfirm) {
      setError({ ...error, passwordConfirm: "비밀번호가 일치하지 않습니다." });
      return;
    }
    console.log(signupValues);
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={signupValues.email}
          onChangeText={(text) => handleChangeInput("email", text)}
          error={error.email}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={signupValues.password}
          onChangeText={(text) => handleChangeInput("password", text)}
        />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          value={signupValues.passwordConfirm}
          onChangeText={(text) => handleChangeInput("passwordConfirm", text)}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={() => {}} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
