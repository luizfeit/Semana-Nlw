import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",

    height: 48,
    width: "100%",
  },

  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 14,
  },

  icon: {
    marginRight: 12,
  },
});
