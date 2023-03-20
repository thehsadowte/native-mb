/// make import
import AsyncStorage from '@react-native-async-storage/async-storage';
// methods with AsyncStorage
const storeItemToAsyncStorage = async (whatToStore, arrayToStore) => {
    try {
        await AsyncStorage.setItem(whatToStore, JSON.stringify(arrayToStore));
    } catch (error) {
        console.log(error);
    }
};
const getItemFromAsyncStorage = async (whatToGet) => {
    try {
        const returnedData = await AsyncStorage.getItem(whatToGet);
        return returnedData != null ? JSON.parse(returnedData) : null;
    } catch (error) {
        console.log(error);
    }
};
const mergeItemInAsyncStorage = async (whatToMerge, arrayToMerge) => {
    try {
        await AsyncStorage.mergeItem(whatToMerge, JSON.stringify(arrayToMerge));
    } catch (error) {
        console.log(error);
    }
};
const deleteItemFromAsyncStorage = async (whatToDelete) => {
    try {
        await AsyncStorage.removeItem(whatToDelete);
    } catch (error) {
        console.log(error);
    }
    //console.log('Done.')
};
export {storeItemToAsyncStorage, getItemFromAsyncStorage, mergeItemInAsyncStorage, deleteItemFromAsyncStorage};