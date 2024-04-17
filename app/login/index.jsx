import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import loginbg from "../../assets/images/loginbg.png";
import colors from "../../utils/colors";

export default function LoginScreen() {
  return (
    <View>
      <Image source={loginbg} style={styles.bgImage} />
      <Text style={styles.heading}>Welcome to EquiWise</Text>
      <Text style={styles.subheading}>
        Because math is more fun when it's dividing expenses.
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.subcontainer}
          onPress={() => console.log("btn")}
        >
          <Text style={styles.text}>Login/Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },
  heading: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: 100,
    left: 50,
    color: colors.WHITE,
    fontSize: 34,
    textAlign: "center",
    marginTop: 50,
    zIndex: 999,
    fontWeight: "bold",
  },
  subheading: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: 100,
    left: 25,
    color: colors.WHITE,
    fontSize: 16,
    textAlign: "center",
    marginTop: 100,
    zIndex: 999,
  },
  container: {
    position: "absolute",
    top: 250,
    left: 50,
    right: 50,
    bottom: 200,
    backgroundColor: colors.SECONDARY,
    zIndex: 999,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
  },
  subcontainer: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    height: 70,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 99,
  },
  text: {
    color: colors.PRIMARYPURPLE2,
    fontSize: 20,
    textAlign: "center",
    zIndex: 999,
    fontWeight: "bold",
  },
});
