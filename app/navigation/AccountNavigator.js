import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountsScreen from '../assets/screens/AccountsScreen';
import MessagesScreen from '../assets/screens/MessagesScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountsScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;