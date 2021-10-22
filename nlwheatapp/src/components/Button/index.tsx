import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  backgroundColor: ColorValue;
  color: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  isLoading?: boolean;
  title: string;
};

export function Button({
  backgroundColor,
  color,
  icon,
  isLoading = false,
  title,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
