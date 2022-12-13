import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

const OrderItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.title}>{item.address}</Text>
          <Text style={styles.client}>{item.client}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;