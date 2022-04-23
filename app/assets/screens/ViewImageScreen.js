import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../../components/config/colours';

function ViewImageScreen(props) {
return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35}/>
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
        </View>
        <Image
         resizeMode="contain" //reduces larger images to fit the device screen
         style={styles.image} 
         source={require('../viewbackground.jpg')} 
        />
    </View>
);
       
}

const styles = StyleSheet.create({
    closeIcon: {
     position: "absolute",
     top: 40,
     left: 30,
    },
    container:{
      backgroundColor: colours.black,
      flex: 1,  
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }
    
})

export default ViewImageScreen;