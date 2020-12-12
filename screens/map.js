/***************************************************************
 * map.js
 *
 * Last modified: December 10, 2020
 *
 * map.js displays the campus map with pins representing each
 * location. The pins change color based on the current activity
 * levels the specific location.
 ***************************************************************/

// Import components and libraries
import React, { useState, Component, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { ActivityIndicator } from "react-native";

// import custom functions and styles
import { globalStyles } from "../styles/global";

/**
 * Map
 * @param {navigation} - navigation object
 * @return JSX to display Apple or Google Map, along
 *          with the pins at each dining hall.
 */
export default function Map({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch data from database to update colors
  useEffect(() => {
    fetch("https://calvinfreespace.herokuapp.com/locationstatus")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);

  /**
   * getActivityStyle
   * @param {number} - average of report values
   * @return {string} - string that specifies color
   *                      based on activity status
   * @note Since Google Map marker colors are more restrictive than Apple
   *        Map marker colors, we return colors that can render on both. 
   *        Future work includes distinguishing between different operating 
   *        systems, and returning different values based on the OS.
   */
  function getActivityStyle(value) {
    if (value > 0 && value < 1.0)
      return "green";
    else if (value >= 1.0 && value < 2.0)
      return "#008000";
    else if (value >= 2.0 && value < 3.0)
      return "gold";
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
      region={{latitude: 42.9315, longitude: -85.5875, latitudeDelta: 0.0049, longitudeDelta: 0.0049}}
      showsUserLocation={true}
    >
      <Marker coordinate={{ latitude: 42.9314, longitude: -85.5868 }} title="Commons Dining Hall" pinColor={getActivityStyle(data[0].statusaverage)} setOpacity={getActivityStyle(data[0].statusaverage) === "#008000" ? 0.1 : 1}/>
      <Marker coordinate={{ latitude: 42.9332, longitude: -85.5863 }} title="Knollcrest Dining Hall" pinColor={getActivityStyle(data[1].statusaverage)} setOpacity={getActivityStyle(data[0].statusaverage) === "#008000" ? 0.1 : 1}/>
      <Marker coordinate={{ latitude: 42.9311, longitude: -85.5871 }} title="Uppercrust" pinColor={getActivityStyle(data[2].statusaverage)} setOpacity={getActivityStyle(data[0].statusaverage) === "#008000" ? 0.1 : 1}/>
      <Marker coordinate={{ latitude: 42.9310, longitude: -85.5875 }} title="Johnny's" pinColor={getActivityStyle(data[3].statusaverage)} setOpacity={getActivityStyle(data[0].statusaverage) === "#008000" ? 0.1 : 1}/>
      <Marker coordinate={{ latitude: 42.9301, longitude: -85.5877 }} title="Peet's" pinColor={getActivityStyle(data[4].statusaverage)} setOpacity={getActivityStyle(data[0].statusaverage) === "#008000" ? 0.1 : 1}/>

    </MapView>)
  );
}
