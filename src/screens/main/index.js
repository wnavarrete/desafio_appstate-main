import React from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Card } from "../../components";
import COLORS from "../../constants/colors";

const Main = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>Main Screen</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Pending"
                onPress={() => navigation.navigate("Pendings")}
                color={COLORS.primary}
              />
              <Button
                title="Delivered"
                onPress={() => navigation.navigate("Delivered")}
                color={COLORS.primary}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Main;
