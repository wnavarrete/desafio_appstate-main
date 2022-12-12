import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import COLORS from "../constants/colors";
import { Main } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
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
    </Stack.Navigator>
  );
};

export default MainNavigator;
