import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../../components/lists/ListItem';
import ListitemDeleteAction from '../../components/lists/ListitemDeleteAction';
import ListitemSeparator from '../../components/lists/ListitemSeparator';
import Screen from '../../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'David MacDonald',
        description: 'What size is this item exaclty?',
        image: require('../clock.jpg')
    },
    {
        id: 2,
        title: 'David MacDonald',
        description: 'Hi are these still available?',
        image: require('../clock.jpg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    
    const handleDelete = (message) => {
 
       setMessages(messages.filter(m => m.id !== message.id));

    }

    return (
     <Screen>
        <FlatList 
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
         <ListItem 
             title={item.title}
             subTitle={item.description}
             image={item.image}
             onPress={() => console.log("Message selected", item)}
             renderRightActions={() => 
                <ListitemDeleteAction onPress={() => handleDelete(item)} />
                }
             
           />  
        )} 
        ItemSeparatorComponent={ListitemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                    id: 2,
                    title: 'T2',
                    description: 'D2',
                    image: require('../clock.jpg')
                },  
            ]);
        }}
        />
        
      </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;