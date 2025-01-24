import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

type MainHeadingProps = {
  logo?: any;
};

const MainHeading = ({logo}: MainHeadingProps) => (
  <View style={styles.headingContainer}>
    <Image
      source={logo || require('../assets/lldd.png')}
      style={styles.mainHeading}
    />
  </View>
);

const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 24,
    marginStart: 24,
  },
  mainHeading: {
    resizeMode: 'cover',
    height: 150,
    width: 300,
  },
});

export default MainHeading;
