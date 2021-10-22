import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,

    width: "100%",
  },

  logoutButton: {
    alignItems: "center",
    flexDirection: "row",
  },

  logoutText: {
    color: COLORS.WHITE,

    fontFamily: FONTS.REGULAR,
    fontSize: 15,
    marginRight: -50,
  },
});
