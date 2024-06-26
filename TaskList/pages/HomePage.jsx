import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import InfoMessage from '../Components/Massage';


const HomePage = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <InfoMessage text="This is a message used as a JSX component." />
          <StatusBar style="auto" />
          <Button
           title="Details"
           onPress={() => navigation.navigate('Details')}
          />
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default HomePage;