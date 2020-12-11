/***************************************************************
 * map.js
 *
 * Last modified: September 29, 2020
 *
 * map.js displays campus map with clickable buildings
 * (see home.js).
 ***************************************************************/

// Import components and libraries
import React, { useState, Component, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native";

// import custom functions and styles
import { globalStyles } from "../styles/global";

export default function Map({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://calvinfreespace.herokuapp.com/locationstatus")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function getActivityStyle(value) {
    if (value > 0 && value < 1.0)
      return "green";
    else if (value >= 1.0 && value < 2.0)
      return "tan";
    else if (value >= 2.0 && value < 3.0)
      return "yellow";
    else if (value >= 3.0 && value < 4.0)
      return "orange";
    else if (value >= 4.0)
      return "red";
    else
      return "indigo";
  }

  return (
  isLoading? ( <ActivityIndicator/> ) :
    (
    <MapView 
      style={{flex: 1}}
      region={{latitude: 42.932, longitude: -85.5875, latitudeDelta: 0.0045, longitudeDelta: 0.0045}}
      showsUserLocation={true}
    >
      <Marker coordinate={{ latitude: 42.9314, longitude: -85.5868 }} title="Commons Dining Hall" pinColor={getActivityStyle(data[0].statusaverage)}/>
      <Marker coordinate={{ latitude: 42.9332, longitude: -85.5863 }} title="Knollcrest Dining Hall" pinColor={getActivityStyle(data[1].statusaverage)}/>
      <Marker coordinate={{ latitude: 42.9310, longitude: -85.5875 }} title="Uppercrust" pinColor={getActivityStyle(data[2].statusaverage)}/>

    </MapView>)
  );
}
