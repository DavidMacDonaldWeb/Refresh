import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: "royalblue",
        ...Platform.select({
            ios: {
               fontSize: 20,
               fontFamily: "Arial", 
            },
            andoid: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    },
    
});

export default styles;