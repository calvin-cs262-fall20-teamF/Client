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
import MapView, { Marker } from "react-native-maps";
import ModalImage from "react-modal-image";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  ImageBackground,
  Button,
  Modal,
} from "react-native";

// import custom functions and styles
import { globalStyles } from "../styles/global";

export default function Map({ navigation }) {
  var markers = [
    {
      latitude: 42.93, 
      longitude: -85.5875,
      title: "Commons Dining Hall",
    }
  ]

  return (
    <MapView 
      style={{flex: 1}}
      region={{latitude: 42.932, longitude: -85.5875, latitudeDelta: 0.0045, longitudeDelta: 0.0045}}
      showsUserLocation={true}
    >
      <Marker coordinate={{ latitude: 42.9314, longitude: -85.5868 }} title="Commons Dining Hall" pinColor="#a5c932" />
      <Marker coordinate={{ latitude: 42.9332, longitude: -85.5863 }} title="Knollcrest Dining Hall" />
      <Marker coordinate={{ latitude: 42.9310, longitude: -85.5875 }} title="Uppercrust" />

    </MapView>
  );
}
