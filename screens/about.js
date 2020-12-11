/***************************************************************
 * about.js
 *
 * Last modified: December 10, 2020
 *
 * about.js displays the Freespace vision as well as the names
 * of the Freespace team members.
 ***************************************************************/

// Import components and libraries
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageOverlay from "react-native-image-overlay";

// Import custom components and styles
import Background from "../assets/background.jpg";

/**
 * About
 * @param {navigation} - navigation object
 * @return JSX for displaying About page
 */
export default function About({ navigation }) {
  return (
    <View>
      <View style={{ marginTop: -20 }}>
        <ImageOverlay
          source={Background}
          height={250}
          overlayAlpha={0.3}
          blurRadius={0.8}
        ></ImageOverlay>
        <View style={styles.contentCard}>
          <Text style={styles.appTitle}>Freespace{"\n"}</Text>
          <Text style={styles.vision}>
            Freespace is a user-driven productivity app tailored specifically
            towards Calvin University students in search of an available area on
            campus. To diminish wasted time and boost productivity, Freespace
            utilizes a listing of the dining halls on campus and an
            estimate of their availability to provide real-time data on public
            space usage.
          </Text>
        </View>
        <View style={styles.devCard}>
          <Text style={styles.developers}>Developers: {"\n"}</Text>
          <Text style={styles.people}>
            Esther Cha {"\n"}
            Zachary Chin {"\n"}
            Seongil (Leo) Kim {"\n"}
            YoungIn Kim {"\n"}
            Sinai Park {"\n"}
            Benjamin Westerhof
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Vision statement card  */
  contentCard: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333", // dark gray
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: 350,
    padding: 20,
    position: "absolute",
    alignSelf: "center",
    bottom: "-60%",
  },
  /** Developer names card */
  devCard: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
    width: 200,
    position: "absolute",
    alignSelf: "center",
    bottom: "-129%",
    alignItems: "center",
  },
  /** Image at the top of the page */
  imageContent: {
    width: 200,
    height: 300,
    padding: 80,
  },
  /** Text for "Freespace" */
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
  /** Vision statement Text */
  vision: {
    fontFamily: "nunito-bold",
    fontSize: 16,
    color: "#fff",
    textAlign: "justify",
  },
  /** Developer header text */
  developers: {
    fontFamily: "nunito-regular",
    fontSize: 15,
    color: "#fff",
  },
  /** Developer names text */
  people: {
    fontFamily: "nunito-regular",
    fontSize: 12,
    color: "#fff",
  },
});
