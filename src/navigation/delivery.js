import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from "../constants/colors";
import { Main, Delivered, Pendings } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const DeliveryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? COLORS.backgroundDark : COLORS.backgroundLight,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen
        name="Delivered"
        component={Delivered}
      />
      <Stack.Screen
        name="Pendings"
        component={Pendings}
      />
    </Stack.Navigator>
  );
};

export default DeliveryNavigator;
