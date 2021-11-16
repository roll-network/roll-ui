import { StyleSheet } from "react-native";

export const containers = StyleSheet.create({
  redBorder: {
    borderWidth: 1,
    borderColor: "red",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  halfWidth: {
    width: "50%",
  },
  fullHeight: {
    height: "100%",
  },
  flex1: {
    flex: 1,
  },
  inputRadius: {
    borderRadius: 3,
  },
  buttonRadius: {
    borderRadius: 3,
  },
  row: {
    flexDirection: "row",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  positionAbsolute: {
    position: "absolute",
  },
  borderRadius: {
    borderRadius: 5,
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
});

export const text = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  body: {
    fontFamily: "",
  },
  bold: {
    fontFamily: "",
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 24,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },
  subCaption: {
    fontSize: 8,
  },
  heading: {
    fontSize: 18,
  },
  display: {
    color: "#1AF4FF",
  },
  faded: {
    color: "gray",
  },
  warning: {
    color: "red",
  },
});
