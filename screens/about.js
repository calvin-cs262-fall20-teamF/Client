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
import { StyleSheet, View, Text, ScrollView } from "react-native";
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
    position: "absolute",
    alignSelf: "center",
    bottom: "-80%",
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
    width: 300,
    padding: 20,
    position: "absolute",
    alignSelf: "center",
    bottom: "-158%",
    alignItems: "center",
  },
  imageContent: {
    width: 200,
    height: 300,
    padding: 80,
  },
  appTitle: {
    fontFamily: "nunito-bold",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 3,
    textShadowColor: "#000",
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 5,
    position: "absolute",
    alignSelf: "center",
    bottom: "86%",
  },
  vision: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#fff",
    textAlign: "justify",
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
