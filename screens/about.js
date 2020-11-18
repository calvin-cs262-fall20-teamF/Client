/***************************************************************
 * about.js
 *
 * Last modified: September 29, 2020
 *
 * about.js creates the stack that will be used for the app's description
 * user report feature(scale, submit, etc),
 * and the software developers
 ***************************************************************/

// import functions and libraries
import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import ImageOverlay from "react-native-image-overlay";
import Background from "../assets/background.jpg";

// import custom functions and styles
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
  return (
    <ScrollView>
      <ImageOverlay
        source={Background}
        height={250}
        overlayAlpha={0.3}
        blurRadius={0.8}
      ></ImageOverlay>

      <View style={styles.contentCard}>
        <Text style={styles.appTitle}>FreeSpace{"\n"}</Text>
        <Text style={styles.vision}>
          FreeSpace, our user-driven mobile app is tailored specifically towards
          Calvin University students in search of an available area on campus.
          To have less wasted time and more productive time, Freespace utilizes
          a listing of the dining halls on campus, alongside an estimate of
          their availability to provide real-time data on public space usage.
        </Text>
      </View>
      <View style={styles.devCard}>
        <Text style={styles.developers}>Developers: {"\n"}</Text>
        <Text style={styles.people}>
          Esther Cha {"\n"}Zachary Chin{"\n"}Seongil (Leo) Kim{"\n"}YoungIn Kim
          {"\n"}Sinai Park{"\n"}Benjamin Westerhof
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  devCard: {
    position: "absolute", // child
    bottom: -250, // position where you want
    left: 50,
  },
  // Location card element
  contentCard: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 400,
    padding: 20,
    position: "absolute", // child
    bottom: -190, // position where you want
    left: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  devCard: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.4)",

    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 400,
    padding: 20,
    position: "absolute", // child
    bottom: -380, // position where you want
    left: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContent: {
    width: 200,
    height: 300,
    padding: 80,
  },
  appTitle: {
    fontFamily: "nunito-bold",
    fontSize: 38,
    fontWeight: 500,
    color: "#fff",
    letterSpacing: 3.9,
    position: "absolute", // child
    bottom: 240, // position where you want
    justifyContent: "center",
  },
  vision: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#fff",
  },
  developers: {
    fontFamily: "nunito-bold",
    fontSize: 15,
    color: "#fff",
  },
  people: {
    fontFamily: "nunito-bold",
    fontSize: 13,
    color: "#fff",
  },
});
