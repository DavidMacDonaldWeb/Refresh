import React from 'react';
import { TextInput, View, StyleSheet, Platform, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import defaultStyles from './config/styles';

function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colours.white} style={styles.icon}
            />
            } 
            <TextInput
            placeholderTextColor={defaultStyles.colours.medium} 
            style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colours.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    
})

export default AppTextInput;