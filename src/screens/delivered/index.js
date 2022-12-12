import React from "react";
import { View, Text, Button } from 'react-native';
import { Card } from "../../components";
import COLORS from "../../constants/colors";
import { styles } from './styles';


const Delivered = ({navigation}) => {
  
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title} color={COLORS.primary}>Delivered Screen</Text>
                <View style={styles.containerButton}>
                    <Button
                        title="Go to main"
                        onPress={()=> navigation.navigate('Main')}
                        color={COLORS.primary}
                    />
                </View>
            </Card>
        </View>
    )
}

export default Delivered;