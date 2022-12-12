import React from "react";
import { View, Text, Button } from 'react-native';
import { Card } from "../../components";
import COLORS from "../../constants/colors";
import { styles } from './styles';
import { OrderItem } from '../../components';
import { CATEGORIES } from '../../constants/data/index';
import { FlatList, SafeAreaView } from 'react-native';



const Delivered = ({navigation}) => {
  
    const onSelected = (item) => {
        console.warn('onSelected', item);
      };

      const renderItem = ({ item }) => <OrderItem item={item} onSelected={onSelected} />;

    return (
        <View style={styles.container}>

<SafeAreaView style={styles.container}>
       <FlatList
         data={CATEGORIES}
         renderItem={renderItem}
         keyExtractor={(item) => item.id.toString()}
         style={styles.containerList}
       />
     </SafeAreaView>

            {/* <Card style={styles.content}>
                <Text style={styles.title} color={COLORS.primary}>Delivered Screen</Text>
                <View style={styles.containerButton}>
                    <Button
                        title="Go to main"
                        onPress={()=> navigation.navigate('Main')}
                        color={COLORS.primary}
                    />
                </View>
            </Card> */}
        </View>
    )
}

export default Delivered;