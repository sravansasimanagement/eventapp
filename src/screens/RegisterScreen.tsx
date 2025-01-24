import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import InputField from '../components/InputField';
import COLORS from '../styles/colors';
import SubHeading from '../components/subHeading';
import MainHeading from '../components/MainHeading';
import DropDownField from '../components/dropDownArrow';
import CheckBoxWithLabel from '../components/RadioButtonWithLabel';
import {registerUser} from '../utils/ApiService';
import StylishToast from '../components/StylishToast';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [insta, setInsta] = useState('');
  const [tiktok, setTikTok] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [instaError, setInstaError] = useState('');
  const [tiktokError, settikTokError] = useState('');

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = async () => {
    if (!isChecked) {
      StylishToast('plz check the checkbox');
      return;
    }
    setLoading(true);
    const data = {
      UserName: fullName,
      Email: email,
      Mobile: mobile,
      Password: password,
      Speciality: speciality,
      Country: selectedCountry,
      InstagramLink: insta,
      TikTokLink: tiktok,
      Userconsent: isChecked ? 'true' : 'false',
    };

    try {
      const response = await registerUser(data);
      StylishToast('Register Success');
      navigation.navigate('Login');
    } catch (error: any) {
      StylishToast(`Error: ${error.message}`);
      console.error('Error:', error.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  // FooterLinks Component
  const FooterLinks = ({navigation}: {navigation: any}) => (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Or Login to an Account</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <MainHeading />
      <SubHeading title={'REGISTRATION'} />
      <ScrollView>
        {/* FULL NAME Field */}
        <InputField
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          validationMessage={fullNameError}
        />
        {/* Email Field */}
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          validationMessage={emailError}
        />
        {/* Password Field */}
        <InputField
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          validationMessage={passwordError}
        />
        {/* Speciality Field */}
        <DropDownField
          label="Select Speciality"
          placeholder="Select your Speciality"
          options={[
            'Dermatology',
            'Immunodermatology',
            'Cosmetic Dermatology',
            'Trichology',
          ]}
          selectedValue={speciality}
          onValueChange={setSpeciality}
        />
        {/* Country Field */}
        <DropDownField
          label="Select Country"
          placeholder="Select your country"
          options={['India', 'United States', 'United Kingdom', 'Canada']}
          selectedValue={selectedCountry}
          onValueChange={setSelectedCountry}
        />
        {/* Mobile Number Field */}
        <InputField
          placeholder="Mobile Number"
          value={mobile}
          onChangeText={setMobile}
          validationMessage={mobileError}
        />
        {/* Instagram Field */}
        <InputField
          placeholder="Instagram @"
          value={insta}
          onChangeText={setInsta}
          validationMessage={instaError}
        />

        {/* TickTok Field */}
        <InputField
          placeholder="TikTok @"
          value={tiktok}
          onChangeText={setTikTok}
          validationMessage={tiktokError}
        />
        <CheckBoxWithLabel
          label="By ticking this box, you give your consent to L'Oreal to process the provided data for the following purposes: Fulfiliing L'Oreal requirements to report and record the identity of the attendees in its activities and events Use for compliance purpose and reporting according to L'Oreal and country-specific compliance regulations and code of count"
          isSelected={isChecked}
          onPress={handleToggle}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleRegister}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.buttonTextColor} />
          ) : (
            <Text style={styles.loginText}>Register</Text>
          )}
        </TouchableOpacity>

        <FooterLinks navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 30,
    paddingEnd: 30,
    backgroundColor: COLORS.background,
  },
  headingContainer: {
    marginTop: 52,
    alignItems: 'center',
  },
  subHeadingContainer: {
    alignItems: 'center',
    marginBottom: 52,
  },
  mainHeading: {
    padding: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.blackColor,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  footerContainer: {
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  linkText: {
    color: COLORS.footerText,
    textDecorationLine: 'underline',
    marginVertical: 4,
  },
  loginButton: {
    backgroundColor: COLORS.buttonColor,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 24,
  },
  loginText: {
    color: COLORS.buttonTextColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default RegisterScreen;
