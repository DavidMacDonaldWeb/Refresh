import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colours from '../components/config/colours';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons 
                name='plus-circle' 
                color={colours.white} 
                size={40}
            />
        </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   container: {
       alignItems: 'center',
       backgroundColor: colours.primary,
       borderColor: colours.white,
       borderRadius: 40,
       borderWidth: 10,
       bottom: 20,
       height: 80,
       justifyContent: 'center',
       width: 80,
   }
});

export default NewListingButton;