import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const DetailsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Details Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default DetailsPage;
