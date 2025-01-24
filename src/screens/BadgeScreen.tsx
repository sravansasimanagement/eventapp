import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import COLORS from '../styles/colors';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/subHeading';

const BadgeScreen = ({route}: {route: any}) => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  useEffect(() => {
    const fetchQrCode = async () => {
      try {
        const storedQrCode = await AsyncStorage.getItem('QrCode');
        setQrCode(storedQrCode);
      } catch (error) {
        console.error('Failed to fetch QR Code from AsyncStorage:', error);
      }
    };

    fetchQrCode();
  }, []);
  return (
    <View style={styles.container}>
      <MainHeading logo={require('../assets/loreal.png')} />
      <SubHeading title={'BADGE'} />
      {/* Card Layout */}
      <View style={styles.card}>
        {/* QR Code */}
        <View style={styles.qrCodeContainer}>
          <Image
            source={{ uri: qrCode ? qrCode : '' }}
            style={styles.qrCode}
            resizeMode="contain"
          />
        </View>
        {/* Name */}
        {/* <Text style={styles.nameText}>personName</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
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
  qrCode: {
    width: '100%',
    height: '100%',
  },
  barCodeView: {
    aspectRatio: 1,
  },
  card: {
    backgroundColor: COLORS.cardBackground, 
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  qrCodeContainer: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text, 
    marginTop: 10,
    textAlign: 'center',
  },
});

export default BadgeScreen;
