import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


import AppText from '../AppText';
import colours from '../config/colours';


function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
      <Swipeable renderRightActions={renderRightActions}>
       <TouchableHighlight underlayColor={colours.light} onPress={onPress}>
         <View style={styles.container}>
           {IconComponent}
           {image && <Image style={styles.image} source={image} />}
           <View style={styles.detailsContainer}>
               <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
               {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
           </View>
           <MaterialCommunityIcons
           color={colours.light} 
           name='chevron-right' 
           size={25}/>
         </View>
       </TouchableHighlight>
     </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: colours.white,
    },
    detailsContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle:{
        color: colours.medium,

    },
    title: {
       fontWeight: "600",
       marginBottom: 8, 
    }
})

export default ListItem;