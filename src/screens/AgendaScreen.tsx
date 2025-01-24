import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import COLORS from '../styles/colors';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/subHeading';
import {fetchAgenda} from '../utils/ApiService';

const AgendaScreen = () => {
  const [agendaData, setAgendaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to load agenda
  useEffect(() => {
    console.log('loadAgenda');
    const loadAgenda = async () => {
      try {
        const data = await fetchAgenda(1);
        setAgendaData(data.Data.Result);
      } catch (err: any) {
        setError(err.message || 'Failed to load agenda.');
      } finally {
        setLoading(false);
      }
    };
    loadAgenda();
  }, []);

  const renderItem = ({item}: {item: {time: string; details: any}}) => (
    <View style={styles.itemContainer}>
      <Text style={[styles.detailsText, {flex: 1, textAlign: 'left'}]}>
        {item.time}
      </Text>
      <Text style={[styles.detailsText, {flex: 1, textAlign: 'left'}]}>
        {item.topic}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <MainHeading logo={require('../assets/loreal.png')} />
      <SubHeading title={'AGENDA'} />
      <View
        style={{
          borderBottomColor: '#E0E0E0',
          borderBottomWidth: 1,
          marginBottom: 8,
          marginTop: 10,
        }}
      />
      <Text style={styles.date}>{agendaData[0]?.Title ?? ''}</Text>
      <View style={styles.headingContainer}>
        <Text style={[styles.headingDetails, {flex: 1, textAlign: 'left'}]}>
          Time
        </Text>
        <Text style={[styles.headingDetails, {flex: 1, textAlign: 'left'}]}>
          Details
        </Text>
      </View>
      <FlatList
        data={agendaData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
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
  headingContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.agendaSubHeading,
    flexDirection: 'row',
    height: 40,
  },
  headingDetails: {
    fontSize: 14,
    color: COLORS.white,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 16,
    color: COLORS.dark,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  itemContainer: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.agendaBorder,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  detailsText: {
    fontSize: 14,
    color: COLORS.blackColor,
  },
});

export default AgendaScreen;
