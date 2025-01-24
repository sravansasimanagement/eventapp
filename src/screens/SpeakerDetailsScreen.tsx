import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import COLORS from '../styles/colors';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/subHeading';
import RenderHTML from 'react-native-render-html';

const SpeakerDetailsScreen = ({route}: {route: any}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <MainHeading logo={require('../assets/loreal.png')} />
      <SubHeading title={'AGENDA'} />
      <View style={styles.separateLine} />
      {/* Card Container */}
      <View style={styles.card}>
        {/* Top-Center Image */}
        <Image source={{uri: item.speaker_image}} style={styles.speakerImage} />
        <View style={styles.contentWrapper}>
          <RenderHTML
            contentWidth={300}
            source={{html: item.speaker_designation}}
            baseStyle={styles.speakerDesignation}
          />
        </View>
        <Text style={styles.speakerName}>{item.speaker_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  separateLine: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
  },
  speakerImage: {
    width: 200,
    height: 200,
  },
  contentWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  speakerDesignation: {
    fontSize: 14,
    color: COLORS.speakerDesignation,
    textAlign: 'center',
  },
  speakerName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SpeakerDetailsScreen;