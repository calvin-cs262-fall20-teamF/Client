import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function StatusButton(props) {
    const [isSelected, setSelected] = useState(false);

    const pressHandler = () => {
        setSelected(!isSelected);
    };

    return (
        <TouchableOpacity
            onPress={pressHandler}
            style={[
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
