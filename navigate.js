import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import Homepage from './components/Homepage';
import Account from './components/Account';

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
        marginBottom: 8,
      }}
      source={require('./assets/mainicon.png')}
    />
  );
}

function StackScreen({ userData, setUserData }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="Homepage"
        options={{
          headerTitle: (props) => <LogoTitle />,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}>
        {() => <Homepage userData={userData} setUserData={setUserData} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen({ userData, setUserData }) {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Акаунт',
        }}
      />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation({ userData, setUserData }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#141414',
          tabBarInactiveTintColor: '#787878',
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Home"
          tabBarOptions={{ showIcon: true }}
          options={{
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
          }}>
          {() => <StackScreen userData={userData} setUserData={setUserData} />}
        </Tab.Screen>

        <Tab.Screen
          name="My Account"
          tabBarOptions={{ showIcon: true }}
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
          children={() => (
            <AccountStackScreen userData={userData} setUserData={setUserData} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
