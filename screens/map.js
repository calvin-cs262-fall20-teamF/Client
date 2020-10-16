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
import { StyleSheet, View, Text, ActivityIndicator, Image, ImageBackground, Button } from 'react-native';

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
      title="campus activity map"
      contentPosition="center">

      <View>
        <div onClick={() => alert('The red means that it is crowded')}>
          <Image style={styles.redmarker} source={{ uri: "https://cdn1.iconfinder.com/data/icons/travel-and-tourism-1/65/11-512.png" }} />
        </div>
        <Image style={styles.bluemarker} source={{ uri: "https://cdn4.iconfinder.com/data/icons/location-map-1/64/x-18-256.png" }} />
        <Image style={styles.yellowmarker} source={{ uri: "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-256.png" }} />
        <Image style={styles.greenmarker} source={{ uri: "https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-green-256.png" }} />
        <Image style={styles.orangemarker} source={{ uri: "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/location-256.png" }} />

      </View>
    </ImageOverlay>


    // <View style={styles.container}>
    //   <ImageOverlay style={
    //   styles.image
    //   }

    //     source={{ uri: 'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/' }} />
    //     {/* <Image style={styles.marker} source={{uri: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png"}} />
    //     <Text style={styles.name}>Amelia Edwards</Text> */}
    // </View >


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
