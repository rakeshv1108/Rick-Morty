import {Image, ScrollView, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {CharacterDetailScreenNavType} from '../../types/navigation-type';
import {styles} from './styles';
import Header from '../../components/header';
import {useSelector} from 'react-redux';
import {CharacterLocationObjType} from '../../types/location-res-type';
import {CharacterDetailType} from '../../types/character-res-type';

interface locationsType {
  locationObj: CharacterLocationObjType;
  isLoading: boolean;
  episodes: string[];
}

const CharacterDetailScreen: FC<CharacterDetailScreenNavType> = ({
  route,
  navigation,
}) => {
  const item: CharacterDetailType = route?.params?.item || {};
  const {locationObj, isLoading, episodes}: locationsType = useSelector(
    (state: any) => state.locations,
  );

  const renderStatusView = (item: CharacterDetailType) => {
    switch (String(item?.status).toLowerCase()) {
      case 'alive':
        return <View style={[styles.commonDotStyle, styles.aliveDotStyle]} />;
      case 'dead':
        return <View style={[styles.commonDotStyle, styles.deadDotStyle]} />;
      default:
        return <View style={[styles.commonDotStyle, styles.unkonwnDotStyle]} />;
    }
  };

  return (
    <View style={styles.container}>
      <Header
        headerText={'Characters Details'}
        titleStyle={styles.headerTitle}
        style={styles.headerContainer}
        leftIcon={'arrowIcon'}
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.cardContainer}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.titleTxtStyle}>{'Character Name'}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.genderTxtStyle}>{`${item.gender}`}</Text>
            {renderStatusView(item)}

            <Text style={styles.statusStyle}>{item.status}</Text>
          </View>
          <Text style={styles.titleTxtStyle}>{'Locations'}</Text>
          <Text
            style={styles.valueTxtStyle}>{`Name - ${locationObj?.name}`}</Text>
          <Text
            style={
              styles.valueTxtStyle
            }>{`Dimesions - ${locationObj?.dimension}`}</Text>
          <Text style={styles.valueTxtStyle}>
            {`Amount of residents - ${locationObj?.residents?.length}`}
          </Text>

          <Text style={styles.titleTxtStyle}>{'Episodes'}</Text>
          {episodes.map(episode => (
            <Text key={String(episode)} style={styles.valueTxtStyle}>{episode}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export {CharacterDetailScreen};
