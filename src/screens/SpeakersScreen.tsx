import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../styles/colors';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/subHeading';
import {fetchSpeakers} from '../utils/ApiService';

const SpeakersScreen = ({navigation}: {navigation: any}) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to load agenda
  useEffect(() => {
    console.log('loadAgenda');
    const loadSpeaker = async () => {
      try {
        const data = await fetchSpeakers(1);
        console.log('data', data);
        setSpeakersData(data.Data.Result);
      } catch (err: any) {
        setError(err.message || 'Failed to load agenda.');
      } finally {
        setLoading(false);
      }
    };
    loadSpeaker();
  }, []);

  const renderItem = ({
    item,
  }: {
    item: {id: string; name: string; title: string; image: string};
  }) => (
    <TouchableOpacity
      style={styles.speakerCard}
      onPress={() => navigation.navigate('SpeakerDetails', {item})}>
      <Image source={{uri: item.speaker_image}} style={styles.speakerImage} />
      <View style={styles.speakerDetails}>
        <Text style={styles.speakerName}>{item.speaker_name}</Text>
        <RenderHTML
          contentWidth={300}
          source={{html: item.speaker_designation}}
          baseStyle={styles.speakerDesignation}
        />
      </View>
      <Ionicons name="chevron-forward" size={24} color="#gray" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MainHeading logo={require('../assets/loreal.png')} />
      <SubHeading title={'SPEAKERS'} />
      <View
        style={{
          backgroundColor: '#e0e0e0',
          height: 1,
          width: '100%',
          marginVertical: 6,
        }}
      />
      <FlatList
        data={speakersData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.speakerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: COLORS.background,
  },
  speakerList: {
    flex: 1,
  },
  speakerDetails: {
    flex: 1,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  speakerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  speakerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  speakerDesignation: {
    fontSize: 14,
    color: COLORS.speakerDesignation,
  },
});

export default SpeakersScreen;
