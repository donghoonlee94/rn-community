import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

interface EmailInputProps {}

const EmailInput = ({}: EmailInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="email"
      render={({ field: { onChange, value } }) => (
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요"
          value={value}
          onChangeText={onChange}
        />
      )}
    />
  );
};

export default EmailInput;
