import React from "react";
import { View, Text, Button } from "react-native";
import { Card } from "../../components";
import COLORS from "../../constants/colors";
import { styles } from "./styles";
import { OrderItem, ImageSelector } from "../../components";
import { useSelector } from "react-redux";
import { FlatList, SafeAreaView } from "react-native";

const Delivered = ({ navigation }) => {
  const orders = useSelector((state) => state.order.orders);

  const onSelected = (item) => {
    console.warn("onSelected", item);
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title} color={COLORS.primary}>
          Delivered Screen
        </Text>
        <View style={styles.containerButton}>
          <Button
            title="Go to main"
            onPress={() => navigation.navigate("Main")}
            color={COLORS.primary}
          />
        </View>
      </Card>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.containerList}
        />
      </SafeAreaView>
    </View>
  );
};

export default Delivered;
