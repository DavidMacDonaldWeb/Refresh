import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../../components/lists/ListItem';
import ListitemSeparator from '../../components/lists/ListitemSeparator';
import Icon from '../../components/Icon';
import Screen from '../../components/Screen';
import colours from '../../components/config/colours';
import routes from '../../navigation/routes';
import useAuth from '../../auth/useAuth';


const menuItems = [
    {
        title: "Add Listing",
        icon: {
            name: "plus",
            backgroundColor: colours.primary
        },
        targetScreen: routes.LISTING_EDIT,
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colours.secondary,
        },
        targetScreen: routes.MESSAGES,
    },
];

function AccountsScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                title={user.name}
                subTitle={user.email}
                image={require('../clock.jpg')}
            />
            </View>
            <View style={styles.container}>
              <FlatList
              data={menuItems}
              keyExtractor={(menuItem) => menuItem.title}
              ItemSeparatorComponent={ListitemSeparator}
              renderItem={({ item }) => (
                <ListItem 
                title={item.title}
                IconComponent={
                    <Icon 
                    name={item.icon.name} 
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
            onPress={() => navigation.navigate(item.targetScreen)}
                />
               )}
             />
            </View>
            <ListItem 
             title="Log Out"
             IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
             onPress={() => logOut()}
             />           
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colours.light,
    }
})

export default AccountsScreen;

//Account screen 

//David MacDonald