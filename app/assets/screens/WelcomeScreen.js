import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';

function WelcomeScreen({navigation}) {
    return (
      <ImageBackground 
      blurRadius={10}
      style={styles.background}
      source={require('../background.jpg')}>

          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../logo.png')} />
            <Text style={styles.tagline}>Sell second hand items</Text>   
          </View>

        <View style={styles.buttonsContainer}>
            <AppButton title="login" onPress={() => navigation.navigate(routes.LOGIN)}/>
            <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
        
        </View>
        
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
       width: 100,
       height: 100, 
       
    },
    logoContainer: {
        position: 'absolute',
        top: 120,
        alignItems: "center",
        //backgroundColor: "black",
    },
    tagline: {
        fontSize: 30,
        fontWeight: "800",
        color: "black",
        backgroundColor: "lightgray",
        //paddingVertical: 20,
    },
})

export default WelcomeScreen;