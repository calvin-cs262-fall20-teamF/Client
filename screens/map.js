/***************************************************************
 * map.js
 *
 * Last modified: September 29, 2020
 *
 * map.js displays campus map with clickable buildings
 * (see home.js).
 ***************************************************************/

// import functions and libraries
import React, { Component } from "react";
import ImageOverlay from "react-native-image-overlay";

// import custom functions and styles
import { globalStyles } from "../styles/global";

export default function Map({ navigation }) {
  return (
    <ImageOverlay
      source={{
        uri:
          "https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/",
      }}
      height={700}
      overlayAlpha={0.4}
      overlayColor="white"
      blurRadius={0}
      contentPosition="center"
    ></ImageOverlay>
  );
}
