import { useEffect, useState, useRef } from "react";
import * as Notifications from 'expo-notifications';
import expoPushTokens from "../api/expoPushTokens";
import navigation from '../navigation/rootNavigation';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default useNotifications = () => {
    const [expoPushToken, setExpoPoshToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

useEffect(() => {
    registerForPushNotifications();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response.notification.request.content.body);
        navigation.navigate('AccountNavigator');
    });

    return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
    };
},[]);


const registerForPushNotifications = async () => {
    try {
        const permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            const finalPermissions = await Notifications.getPermissionsAsync();
            if (!finalPermissions.granted) {
                console.log("Permissons NOT granted!");
                return;
            }
        }
    console.log("permissions granted!");

    const token = await Notifications.getExpoPushTokenAsync();
    expoPushTokens.register(token.data);

    }catch (error) {
        console.log("Error getting a push token", error);
    }
};
}
