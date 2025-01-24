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
import DropDownField from '../components/dropDownArrow';
import StylishToast from '../components/StylishToast';
import {submitQuestion} from '../utils/ApiService';

const AskQuestionScreen = ({navigation}: {navigation: any}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [askQuestion, setAskQuestion] = useState('');

  const handleSubmit = async () => {
    if (!selectedOption || !askQuestion) {
      StylishToast('Please fill in all required fields.!');
      return;
    }
    const payload = {
      SpeakerName: selectedOption,
      AskedBy: name || 'Anonymous',
      QuestionDetail: askQuestion,
      EventId: 1,
    };
    setIsSubmitting(true);
    try {
      const response = await submitQuestion(payload);
      console.log('Question submitted successfully:', response);
      StylishToast('Your question has been submitted successfully!');
      setSelectedOption('');
      setName('');
      setAskQuestion('');
      navigation.navigate('Home');
    } catch (error: any) {
      console.error('Error submitting question:', error);
      StylishToast(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <MainHeading logo={require('../assets/loreal.png')} />
      <SubHeading title={'ASK QUESTIONS'} />
      {/* Country Field */}
      <DropDownField
        label="Select Speaker"
        placeholder="Select Speaker"
        options={['DR. KHALED AL NUAIMI', 'Dr. Raj', 'Dr. Jocob', 'Dr. Jose']}
        selectedValue={selectedOption}
        onValueChange={setSelectedOption}
      />
      {/* Name Field */}
      <InputField
        placeholder="Enter your Name (Optional)"
        value={name}
        onChangeText={setName}
        validationMessage={''}
      />
      <InputField
        placeholder="Ask Question"
        value={askQuestion}
        onChangeText={setAskQuestion}
        validationMessage={''}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleSubmit}
        disabled={isSubmitting}>
        {isSubmitting ? (
          <ActivityIndicator size="small" color={COLORS.buttonTextColor} />
        ) : (
          <Text style={styles.loginText}>Submit</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: COLORS.background,
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

export default AskQuestionScreen;
