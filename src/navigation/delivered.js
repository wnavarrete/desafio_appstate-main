import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from "../constants/colors";
import { Delivered } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const DeliveredNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Delivered"
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
        name="Delivered"
        component={Delivered}
      />
    </Stack.Navigator>
  );
};

export default DeliveredNavigator;
