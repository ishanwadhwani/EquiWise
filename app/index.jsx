import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, useRouter } from "expo-router"


import services from "../utils/services";


export default function Home() {

const router = useRouter();

  useEffect (() => {
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    const result = await services.getData("login");
    if (result !== 'true') {
      router.replace('/login');
    } else {
      console.log("User is not logged in");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello Ishan</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
