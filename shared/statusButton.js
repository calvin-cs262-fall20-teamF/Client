import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { CommonActions } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

export default function StatusButton(props) {
    const [isSelected, setSelected] = useState(false);

    const pressHandler = () => {
        setSelected(!isSelected);
    };

    const submitHandler = () => {
        alert('Report is submitted!');
    };

    if(props.name == 'SUBMIT'){
        return (
            <TouchableOpacity
                onPress={submitHandler}
                style={[
                    props.buttonColor,
                    globalStyles.statusButton,
                ]}
            >
                <View style={globalStyles.cardContent}>
                    { props.children }
                </View>
            </TouchableOpacity>
        );
    } 
    else {
        return (
            <TouchableOpacity
                onPress={pressHandler}
                style={[
                    props.buttonColor,
                    globalStyles.statusButton,
                    isSelected && globalStyles.statusButtonSelected
                ]}
            >
                <View style={globalStyles.cardContent}>
                    { props.children }
                </View>
            </TouchableOpacity>
        );
    }
}
