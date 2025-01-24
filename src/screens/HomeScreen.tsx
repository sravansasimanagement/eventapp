import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../styles/colors';
import StylishToast from '../components/StylishToast';

const {width} = Dimensions.get('window');

const ITEM_SIZE = (width - 72) / 2;

type Item = {
  id: number;
  title: string;
  icon: any;
};

const HomeScreen = ({navigation}: {navigation: any}) => {
  const data: Item[] = [
    {id: 1, title: 'Agenda', icon: require('../assets/agenda.png')},
    {id: 2, title: 'Speakers', icon: require('../assets/speakers.png')},
    {id: 3, title: 'Badge', icon: require('../assets/badge.png')},
    {id: 4, title: 'Venue', icon: require('../assets/venue.png')},
    {
      id: 5,
      title: 'BrandInnovation',
      icon: require('../assets/brandInnovation.png'),
    },
    {id: 6, title: 'BrandVideos', icon: require('../assets/videos.png')},
    {id: 7, title: 'AskQuestions', icon: require('../assets/questions.png')},
    {id: 8, title: 'Voting', icon: require('../assets/voting.png')},

    {
      id: 9,
      title: 'SocialMedia',
      icon: require('../assets/social.png'),
    },
    {id: 10, title: 'Survey', icon: require('../assets/survey.png')},
    {id: 11, title: 'Cme', icon: require('../assets/cme.png')},
    {id: 12, title: 'More', icon: require('../assets/more.png')},
  ];

  const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity
      onPress={() => {
        if (item.id === 1) {
          navigation.navigate('Agenda');
        } else if (item.id === 2) {
          navigation.navigate('Speakers', {item});
        } else if (item.id === 3) {
          navigation.navigate('Badge', {item});
        } else if (item.id === 7) {
          navigation.navigate('AskQuestion', {item});
        } else {
          StylishToast('This screen not avaliable');
        }
      }}
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            item.id % 3 == 1
              ? COLORS.listFirstColoe
              : item.id % 3 == 2
              ? COLORS.listSecondColoe
              : COLORS.listThirdColoe,
        },
      ]}>
      <Image source={item.icon} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2} // Two items per row
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.row} // Row styling
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.homeBackground,
  },
  drawerIconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  flatListContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    marginHorizontal: 8,
    marginVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
  },
});

export default HomeScreen;
