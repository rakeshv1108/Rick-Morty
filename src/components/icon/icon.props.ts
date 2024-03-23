import {ImageStyle, ViewStyle} from 'react-native';
import {IconTypes} from '../../assets/icons';
import {colors} from '../../theme';
import {IconPresetsName} from './icon.presets';

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: ImageStyle;
  /**
   * Style overrides for the icon container
   */
  containerStyle?: ViewStyle;
  /**
   * The name of the icon
   */
  icon?: IconTypes | string;
  /**
   * all icon styles
   */
  preset?: IconPresetsName;
  /**
   * icon color if any
   */
  iconColor?: keyof typeof colors;
}
