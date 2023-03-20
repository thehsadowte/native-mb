import React, { useState, useEffect} from "react";
import { StyleSheet, View, ScrollView, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';

//import {getItemFromAsyncStorage, mergeItemInAsyncStorage, deleteItemFromAsyncStorage} from './AsyncStorageMethods'

export default function Account({ userData, setUserData }) {

    /// main navigation usage
    const navigation = useNavigation();
    //const [userData, setUserData] = useState([]);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <View style={styles.imageView}>
                    <Text>Account</Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 0,
        paddingTop: 44,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
