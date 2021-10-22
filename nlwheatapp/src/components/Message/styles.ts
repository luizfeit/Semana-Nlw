import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 36,
    width: "100%",
  },

  message: {
    lineHeight: 20,
    marginBottom: 12,

    fontFamily: FONTS.REGULAR,
    fontSize: 15,

    color: COLORS.WHITE,
  },

  footer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },

  userName: {
    marginLeft: 16,

    fontFamily: FONTS.REGULAR,
    fontSize: 15,

    color: COLORS.WHITE,
  },
});
