import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import defaultStyles from './config/styles';
import Screen from './Screen';
import AppText from './AppText';
import { FlatList } from 'react-native';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, numberOfColumns = 1, onSelectItem, placeholder, PickerItemComponent = PickerItem, selectedItem, width = "100%" }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <> 
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
            { icon && 
            <MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyles.colours.white} 
            style={styles.icon}
            />
            } 

            { selectedItem ? <AppText style={styles.text}>{selectedItem.label}
            </AppText> : 
            <AppText style={styles.placeholder}>{placeholder}</AppText>}

            <MaterialCommunityIcons 
            name="chevron-down" 
            size={20} 
            color={defaultStyles.colours.white} 
            
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
             <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => 
                    <PickerItemComponent 
                    item={item}
                    label={item.label}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);  
                    }} 
                    /> 
                  } 
                />
            </Screen>

        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colours.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colours.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    },
    
})

export default AppPicker;