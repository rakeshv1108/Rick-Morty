import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useContext, useEffect, useState} from 'react';
import {CharacterListScreenNavType} from '../../types/navigation-type';
import Header from '../../components/header';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from './redux/actions';
import {CharacterDetailType} from '../../types/character-res-type';
import RenderCharacterCardView from '../../components/card-view';
import {normalize} from '../../theme/normalize';
import {ScreenConstants} from '../../constants';
import { getEpisodes, getLocations } from '../character-detail-screen/redux/actions';

const CharacterListScreen: FC<CharacterListScreenNavType> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const {arrCharacters, resInfo} = useSelector(
    (state: any) => state.characters,
  );

  useEffect(() => {
    dispatch(getCharacters.trigger(null));
  }, []);

  const noDataView = (
    <View style={styles.noDataContainerStyle}>
      <Text style={styles.noDataFoundTxtStyle}>{'No Data Found'}</Text>
    </View>
  );

  const footerComponent = (
    <View style={styles.bottomLoaderStyle}>
      <ActivityIndicator size={'small'} />
    </View>
  );

  /**
   * on Card button click
   * @param item - single character detail object
   */
  const onCardBtnPressed = (item: CharacterDetailType) => {
    navigation.navigate(ScreenConstants.CHARACTER_DETAIL_SCREEN, {item});
    // call location api to get location of the character
    dispatch(getLocations.trigger({url: item?.location?.url}));
    dispatch(getEpisodes.trigger({urls: item?.episode}));
  };

  const onEndReached = () => {
    dispatch(getCharacters.trigger(resInfo));
  };

  return (
    <View style={styles.containerStyle}>
      <Header
        headerText={'Characters'}
        titleStyle={styles.txtTitleHeaderStyle}
        style={styles.headerContainerStyle}
      />
      <FlatList
        data={arrCharacters}
        renderItem={({item, index}) => (
          <RenderCharacterCardView
            item={item}
            onPress={() => onCardBtnPressed(item)}
          />
        )}
        numColumns={2}
        keyExtractor={(item: any, index: number) => String(item?.id || index)}
        style={styles.flatListStyle}
        contentContainerStyle={{alignItems: 'center'}}
        ListEmptyComponent={noDataView}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

export {CharacterListScreen};
