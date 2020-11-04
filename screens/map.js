/***************************************************************
 * map.js
 *
 * Last modified: September 29, 2020
 *
 * map.js displays campus map with clickable buildings
 * (see home.js).
 ***************************************************************/

// import functions and libraries
import React, { Component } from 'react';
import ImageOverlay from "react-native-image-overlay";
import ModalImage from "react-modal-image";
import { StyleSheet, View, Text, ActivityIndicator, Image, ImageBackground, Button, Modal } from 'react-native';

// import custom functions and styles
import { globalStyles } from '../styles/global';

export default function Map({ navigation }) {

  return (

    <ImageOverlay
      source={{ uri: "https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/" }}
      height={700}
      overlayAlpha={0.4}
      overlayColor="white"
      blurRadius={0}
      contentPosition="center">
    </ImageOverlay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redmarker: {
    height: 50,
    width: 50,
    left: 100,
  },

  bluemarker: {
    height: 50,
    width: 50,
    left: 100,
  },
  yellowmarker: {
    height: 50,
    width: 50,
    left: 100,
  },
  orangemarker: {
    height: 50,
    width: 50,
    left: 100,

  },
  greenmarker: {
    height: 50,
    width: 50,
    left: 100,
  },

});
