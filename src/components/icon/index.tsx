import * as React from 'react';
import {
  View,
  Image,
  ImageStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {IconProps} from './icon.props';
import {presets} from './icon.presets';
import {icons} from '../../assets/icons';
import {colors} from '../../theme';
import {get} from 'lodash';
import {styles} from './styles';

type sizeType = number | 'small' | 'large' | undefined;

export function Icon(props: IconProps) {
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const {
    style: styleOverride = {},
    preset = 'default',
    icon,
    containerStyle,
    iconColor,
  } = props;

  const tintColor: any = iconColor ? colors[iconColor] : undefined;
  const style: ImageStyle = {...presets[preset], tintColor, ...styleOverride};
  if (!icon) {
    return null;
  }

  const simpleLoader = (style: ViewStyle, size: sizeType, show: boolean) => {
    return show ? (
      <View style={[styles.simpleLoader, style]}>
        <ActivityIndicator color={colors.black} size={size} />
      </View>
    ) : null;
  };

  return (
    <View style={containerStyle}>
      {simpleLoader(styles.loader, 'small', !icon && isLoading)}
      <Image
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
        style={style}
        source={isError ? icons.defaultIcon : get(icons, icon, {uri: icon})}
      />
    </View>
  );
}
