import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';

//import {getItemFromAsyncStorage, mergeItemInAsyncStorage, deleteItemFromAsyncStorage} from './AsyncStorageMethods'

export default function Homepage({ userData, setUserData}) {

    /// main navigation usage
    const navigation = useNavigation();
 
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
              <View style={styles.homeView}>
                <Text>MB testing</Text>
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
    homeView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'left',
    },
});