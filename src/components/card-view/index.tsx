import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {CharacterDetailType} from '../../types/character-res-type';
import {styles} from './styles';
import {Icon} from '..';

interface IProps {
  item: CharacterDetailType;
  onPress: () => void;
}
const RenderCharacterCardView = (props: IProps) => {
  const {item, onPress} = props;

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
    <TouchableOpacity key={String(item.id)} onPress={onPress} style={styles.cardViewStyle}>
      <Image source={{uri: item.image}} style={styles.characterIconStyle} />
      <Text style={styles.nameTxtStyle}>{item?.name}</Text>
      <View style={styles.statusContainerStyle}>
        {renderStatusView(item)}
        <Text style={styles.statusTxtStyle}>{item?.status}</Text>
        <Text style={styles.statusTxtStyle}>{' - ' + item?.species}</Text>
      </View>
      <Text style={styles.genderTxtStyle}>{item?.gender}</Text>
    </TouchableOpacity>
  );
};

export default RenderCharacterCardView;
