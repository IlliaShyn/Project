import React from 'react';
import { Text, StyleSheet } from 'react-native';

const InfoMessage = ({ text }) => {
  return <Text style={styles.message}>{text}</Text>;
};

const styles = StyleSheet.create({
  message: {
    color: 'blue',
    fontSize: 18,
  },
});

export default InfoMessage;
