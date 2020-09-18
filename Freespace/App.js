import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import * as eva from '@eva-design/eva';
// import { Divider, List, ListItem } from '@ui-kitten/components';

const data = new Array(2).fill({
  title: 'Hoogenboom',
});

export default function App() {
  const [locations, addLocation] = useState([
    { name: 'KE Basketball Court', capacity: '100', key: '1' },
    { name: 'KE Volleyball Court', capacity: '200', key: '2' },
    { name: 'Commons Dining Hall', capacity: '300', key: '3' },
    { name: 'Knollcrest Dining Hall', capacity: '400', key: '4' },
    { name: 'Johnny\'s', capacity: '500', key: '5' },
    { name: 'Main Dance Studio', capacity: '600', key: '6' },
    { name: 'Dance Loft', capacity: '700', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FreeSpace</Text>
      <StatusBar style="auto" />
      <FlatList
        contentContainerStyle={styles.locationList}
        data={locations}
        renderItem={({ item }) => (
            <Text style={styles.locationText}>{item.name} {item.capacity}</Text>
        )}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginTop: 20,
    fontSize: 20
  },
  locationList: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0fff0'
  },
  locationText: {
    marginTop: 10,
    padding: 10,
    width: 290,
    backgroundColor: '#ffd700',
    fontSize: 20,
    textAlign: 'left'
  }
});
