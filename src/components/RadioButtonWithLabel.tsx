import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import COLORS from '../styles/colors';

type RadioButtonWithLabelProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const RadioButtonWithLabel: React.FC<RadioButtonWithLabelProps> = ({
  label,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View
        style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
        {isSelected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    borderColor: COLORS.blackColor,
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.dark,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 35,
  },
});

export default RadioButtonWithLabel;
