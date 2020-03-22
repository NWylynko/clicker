import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from './screens/Feed'
import Comments from './screens/Comments'
import Profile from './screens/Profile'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 0, 0)',
  },
};

const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator headerMode={"float"}>
      <FeedStack.Screen name="Clicker" component={Feed} />
      <FeedStack.Screen name="Comments" component={Comments} />
    </FeedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}