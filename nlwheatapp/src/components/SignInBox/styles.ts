import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    paddingBottom: getBottomSpace() + 32,
    paddingHorizontal: 20,
  },
});
