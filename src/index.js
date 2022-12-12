import React, { useState} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components';
import AppNavigator from './navigation';
import COLORS from './constants/colors';
import { Main, Pendings, Delivered} from './screens/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Montserrat': require('../assets/fonts/Montserrat-VariableFont_wght.ttf')
  })
  const [statusScreen, setStatusScreen] = useState('main');
  
  // const onSelectStatus = (onSelectStatus) => {
  //   setStatusScreen(onSelectStatus);
  // }

  const onReturn = () => {
    setStatusScreen(null);
  }

  let content =  <Main />

  const getTitle = () => {

    let title;
    if (statusScreen ==! null) {      
       if(statusScreen == 'pending'){
         title = 'Entregas pendientes';
       }else{
         title = 'Entregas realizadas';
       }
   }else{
      title = 'Delivery manager';
    }
  
    return title;
  }

    if(statusScreen == 'pending')
    { 
      content = <Pendings onReturn={onReturn}/>
    } 
    else if(statusScreen == 'delivered')
    {
      content = <Delivered onReturn={onReturn} />
    }

  if (!loaded) {
    return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color={COLORS.primary} />
    </View>
    )
  }

  return (
    // <View style={styles.container}>
    //   <Header title={getTitle()}/>
    //   {content}
    // </View>
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  }
});