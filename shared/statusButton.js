import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function StatusButton(props) {
    const [isSelected, setSelected] = useState(props.selected);

    const pressHandler = () => {
        setSelected(!isSelected);
        props.reportCallback(props.buttonID);
    };

    return (
        <TouchableOpacity
            onPress={pressHandler}
            style={[
                props.buttonColor,
                globalStyles.statusButton,
                props.selected && globalStyles.statusButtonSelected
            ]}
        >
            <View style={globalStyles.cardContent}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}