import { HTMLInputTypeAttribute } from "react";

export interface CustomInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  inputStyle?: string;
  containerStyle?: string;
  disabled?: boolean;
}
