import React from 'react';
import {   
        StyleSheet, 
        TouchableWithoutFeedback, 
        View, 
    } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import colours from '../components/config/colours';
import AppText from '../components/AppText/AppText';

function Card({title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
    <TouchableWithoutFeedback onPress={onPress}>
     <View style={styles.card}>
         <Image 
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl}} 
          uri={imageUrl} 
          />
         <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
         </View>
         
     </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 15,
      backgroundColor: colours.white,
      marginBottom: 20,
      overflow: "hidden",
    },
    detailsContainer:{
        padding: 20,
    },
    image:{
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colours.secondary,
        fontWeight: "bold",
    },
    title:{
        marginBottom: 7,
    },
    
})

export default Card;