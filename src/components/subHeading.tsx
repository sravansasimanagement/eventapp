import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../styles/colors';

const SubHeading = ({title}) => (
  <View style={styles.subHeadingContainer}>
    <Text style={styles.subHeading}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  subHeadingContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.subHeading,
  },
});

export default SubHeading;
