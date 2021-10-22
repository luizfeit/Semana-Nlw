import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 184,
    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 24,
    paddingTop: 16,
    width: "100%",

    backgroundColor: COLORS.BLACK_TERTIARY,
  },

  input: {
    height: 88,
    width: "100%",

    textAlignVertical: "top",

    color: COLORS.WHITE,
  },
});
