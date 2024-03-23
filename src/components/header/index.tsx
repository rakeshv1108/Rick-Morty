import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {HeaderProps} from './header.props';
import {styles} from './styles';
import {Icon} from '../index';

const Header: FC<HeaderProps> = props => {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText = 'Default Header',
    style: styleOverride = {},
    titleStyle,
  } = props;

  return (
    <View style={[styles.root, styleOverride]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPress}>
            <Icon icon={leftIcon} preset='medium' />    
          </TouchableOpacity>
        )}
      <View style={styles.viewContainer}>
        <Text style={titleStyle}>{headerText}</Text>
      </View>
      <View style={[styles.viewContainer, styles.iconRight]}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <Icon icon={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
