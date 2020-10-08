import { Platform } from "react-native";
import colors from "./colors";
export default {
  colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
