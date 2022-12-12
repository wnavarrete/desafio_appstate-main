import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from "../constants/colors";
import { Pendings } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const PendingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pendings"
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
        name="Pendings"
        component={Pendings}
      />
    </Stack.Navigator>
  );
};

export default PendingsNavigator;
