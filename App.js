import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import { gStyle } from "./Style/style";
import HomepageStack from './navigate';
//import TabNavigation from './navigate';

//import {getItemFromAsyncStorage, storeItemToAsyncStorage} from './components/AsyncStorageMethods'
// export function
export default function App() {
  /// add default constatnts
  /// user sign in trgger
  /// поиграйся с констнтой - поменяй ее по очереди на false и true что бы понять как это устроено
  const [userData, setUserData] = useState([]);
  /// trigger changes in userData
  //useEffect(() => {
    /// if changes registered in userData
   //console.log(userData)

  //}, [userData]);
  /// STORE USER TO ASYNC STORAGE EXAMPLE
  /*
  const userArrayData = 
    {
        _id: data._id,
        email: data.email,
        name: data.name,
        emailNotifications: data.emailNotifications,
        appNotifications: data.appNotifications,
        secret: data.secret,
        userAvatar: data.userAvatar,
    };
    /// store user to Async Storage                  
    storeItemToAsyncStorage("user", userArrayData);
  */


  /// on app load check if user exist in asyncStorage
  // GET THE USER ARRAY FROM ASYNC STORAGE EXAMPLE
  /*const getNewData = async () => {
    const newItem = await getItemFromAsyncStorage('user')
    /// wait until loaded
    //console.log(newItem)
      if(newItem) {
        // set state
        setUserData(newItem)
      }
    
  } */
  /// hit the function
  useEffect(() => {
    /// call it once by this method
    //getNewData()
  }, []);
  return (
    <View style={gStyle.main}>
      <HomepageStack userData={userData} setUserData={setUserData}/>
    </View>
  );
}

