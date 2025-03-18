import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

interface PasswordConfirmInputProps {}

const PasswordConfirmInput = ({}: PasswordConfirmInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="passwordConfirm"
      render={({ field: { onChange, value } }) => (
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          value={value}
          onChangeText={onChange}
        />
      )}
    />
  );
};

export default PasswordConfirmInput;
