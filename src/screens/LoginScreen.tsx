import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import InputField from '../components/InputField';
import COLORS from '../styles/colors';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/subHeading';
import {loginUser} from '../utils/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StylishToast from '../components/StylishToast';

// FooterLinks Component
const FooterLinks = ({navigation}: {navigation: any}) => (
  <View style={styles.footerContainer}>
    <TouchableOpacity
      onPress={() => {
        StylishToast('Not avaliable forgot Scrreen');
      }}>
      <Text style={styles.linkText}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={styles.linkText}>Create Account</Text>
    </TouchableOpacity>
  </View>
);

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      StylishToast(`Please fill in all fields`);
      return;
    }
    setLoading(true);
    try {
      const response = await loginUser({Email: email, Password: password});
      await AsyncStorage.setItem('QrCode', response.QrCode);
      navigation.navigate('Drawer');
    } catch (error: any) {
      console.log('Login Error:', error);
      StylishToast(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeading />
      <SubHeading title={'LOG IN'} />
      {/* Email Field */}
      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        validationMessage={emailError}
      />
      {/* Password Field */}
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        validationMessage={passwordError}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.buttonTextColor} />
        ) : (
          <Text style={styles.loginText}>Log in</Text>
        )}
      </TouchableOpacity>
      <FooterLinks navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: COLORS.background,
  },
  footerContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  linkText: {
    color: COLORS.footerText,
    marginVertical: 14,
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: COLORS.buttonColor,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 32,
  },
  loginText: {
    color: COLORS.buttonTextColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
