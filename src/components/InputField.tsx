import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import COLORS from '../styles/colors';

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  validationMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  validationMessage,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />
        {/* Eye Icon for Password Toggle */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.eyeIcon}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'} // Toggle icon
              size={20}
              color={COLORS.speakerDesignation}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Validation Message */}
      {validationMessage && (
        <Text style={styles.validationMessage}>{validationMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 55,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 8,
  },
  validationMessage: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});

export default InputField;
