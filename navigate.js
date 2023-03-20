import React, { useState } from "react";
import { Image } from 'react-native';
import Homepage from './components/Homepage';
import Account from './components/Account';
/// Create here your own component
//import Settings from './components/Settings';

/// what libraries should you use
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
function LogoTitle() {
    return (
      <Image
        style={{ 
            width: 128,
            height: 32,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 8
        }}
        source={require('./assets/mainicon.png')}
      />
    );
}
function StackScreen({userData, setUserData}) {

    return (
   
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#fff',
                },
              }}
            >
                <Stack.Screen
                    name='Homepage'
                    //component={Homepage}
                    children={()=><Homepage userData={userData} setUserData={setUserData}/>}
                    options={{ 
                      headerTitle: (props) => <LogoTitle />,
                      headerStyle: {
                        backgroundColor: '#fff',
                      },
                      headerShadowVisible: false, // applied here
                      headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
           
    )
}

//const AccountStack = createNativeStackNavigator();

function AccountStackScreen({userData, setUserData}) {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name='Account'
                component={MyAccount}
                options={
                  { 
                    title: 'Акаунт',
                  }
                }
                
            />
        </AccountStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function TabNavigation({userData, setUserData}) {
    return <NavigationContainer>
        <Tab.Navigator
            
            screenOptions={{
                // прячет двойной хедер
                headerShown: false,
                /// цвет шрифта активный
                tabBarActiveTintColor: '#141414',
                // цвет шрифта неактивный
                tabBarInactiveTintColor: '#787878',
                // лейбл - этикетка, а в нашем случае слово под иконкой (Головна, Налаштування)
                tabBarShowLabel: true,
                tabBarStyle: {
                  //paddingVertical: Platform.OS === 'ios' ? 0 : 0,
                  //height: 92,
                  backgroundColor: '#fff',
                  elevation: 0,
                  borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                },
              }}
             
        >

            <Tab.Screen 
                // это плохая практика давать имена на укр./рус.
                name="Home" 
                tabBarOptions = {{ showIcon: true }} 
                options={{
                    /// leaveit blank to display tabs 
                    //tabBarStyle: {display:  ""},
                    tabBarLabel: 'Головна',
                    tabBarIcon: ({ focused, color, size }) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/hometablogoactive.png')
                            : require('./assets/hometablogoinactive.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
                }}
                //component={StackScreen} 
                children={()=><StackScreen userData={userData} setUserData={setUserData}/>}
            />
            
            <Tab.Screen 
                name="My account" 
                tabBarOptions = {{ showIcon: true }} 
                options={{
                    tabBarLabel: 'Акаунт',
                    tabBarIcon: ({ focused, color, size }) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/accounttablogoactive.png')
                            : require('./assets/accounttablogoinactive.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
                }}
                //component={AccountStackScreen} 
                children={()=><NotAccountStackScreen userData={userData} setUserData={setUserData}/>}
            />
        </Tab.Navigator>
    </NavigationContainer>
}
        