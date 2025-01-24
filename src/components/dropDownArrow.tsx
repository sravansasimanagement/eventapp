import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import COLORS from '../styles/colors';

const DropDownField = ({
  label,
  placeholder,
  options,
  selectedValue,
  onValueChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = value => {
    onValueChange(value);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setIsVisible(true)}>
        <Text style={styles.inputText}>
          {selectedValue ? selectedValue : placeholder}
        </Text>
        <Feather
          name={isVisible ? 'chevron-up' : 'chevron-down'} // Toggle arrow
          size={20}
          color="#555"
        />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        />
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    position: 'relative',
    marginTop: 8,
  },
  labelContainer: {
    position: 'absolute',
    top: -10,
    left: 12,
    backgroundColor: COLORS.white,
    paddingHorizontal: 8,
    zIndex: 1,
  },
  label: {
    fontSize: 14,
    color: COLORS.dark,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: COLORS.gray,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.modelBackGround,
  },
  dropdown: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dropDownText,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.gray,
  },
});

export default DropDownField;
