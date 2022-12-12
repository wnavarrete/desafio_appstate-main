import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainNavigator from "./main";
import DeliveredNavigator from "./delivered";
import PendingsNavigator from "./pending";
import colors from "../constants/colors";
const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="DeliveryTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="MainTab"
        component={MainNavigator}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={colors.primary}
            />
          ),
        }}
      />
        <BottomTab.Screen
        name="PendingsTab"
        component={PendingsNavigator}
        options={{
          title: "Pendientes",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "md-calendar" : "md-calendar-outline"}
              size={22}
              color={colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="DeliveredTab"
        component={DeliveredNavigator}
        options={{
          title: "Entregadas",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              size={22}
              color={colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default Tabs;
