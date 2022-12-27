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
import { Card, ImageSelector} from "../../components";
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
               <Card style={styles.content}>
        <ImageSelector />
      </Card>
            </View>
          </Card>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Main;
