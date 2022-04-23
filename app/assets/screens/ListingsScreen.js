import React, { useEffect, useState } from "react";

import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import AppButton from "../../components/AppButton"; 
import Card from '../../components/Card';
import colours from '../../components/config/colours';
import listingsAPI from '../../api/listings';
import routes from '../../navigation/routes';
import Screen from '../../components/Screen';
import AppText from "../../components/AppText";
import useApi from "../../hooks/useApi";


function ListingsScreen({ navigation }) {
   const getListingsApi = useApi(listingsAPI.getListings);

   useEffect(() => {
       getListingsApi.request();
   }, []);
 
    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't display the list items.</AppText>
                <AppButton title="Retry" onPress={loadListings}/>
            </>}
            <ActivityIndicator animating={getListingsApi.loading} size="large" color="#0000ff" />
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"£" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />    
                )}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colours.light,
    }
})

export default ListingsScreen;