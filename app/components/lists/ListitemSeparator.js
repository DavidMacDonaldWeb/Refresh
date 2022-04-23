import React from 'react';
import { StyleSheet, View } from 'react-native';

import colours from '../config/colours';

function ListitemSeparator() {
    return (
        <View style={styles.separator} />
        
    );
}
const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: colours.light
    }
})

export default ListitemSeparator;