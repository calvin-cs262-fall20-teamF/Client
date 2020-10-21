import { PropsService } from '@ui-kitten/components/devsupport';
import React, {useState} from 'react';
import { View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { CommonActions } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

export default function StatusButton(props) {
    const [isSelected, setSelected] = useState(props.selected);

    const pressHandler = () => {
        setSelected(!isSelected);
        props.reportCallback(props.buttonID);
    };

    const submitHandler = () => {
        Alert.alert('Report submitted!');
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
                    props.selected && globalStyles.statusButtonSelected
                ]}
            >
                <View style={globalStyles.cardContent}>
                    { props.children }
                </View>
            </TouchableOpacity>
        );
    }
}
