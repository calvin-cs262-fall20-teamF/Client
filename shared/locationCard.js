import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LocationCard(props) {
    return (
        <View style={globalStyles.locationCard}>
            <View style={globalStyles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}
