import {ImageStyle} from 'react-native';
import {normalize} from '../../theme/normalize';

/**
 * All icon will start off looking like this.
 */
const BASE: ImageStyle = {
  resizeMode: 'contain',
  height: normalize(18),
  width: normalize(18),
};

export const presets = {
  /**
   * The default icon style.
   */
  default: BASE,
  /**
   * A small version of the default icon.
   */
  small: {...BASE, width: normalize(14), height: normalize(14)} as ImageStyle,
  /**
   * A medium version of the default icon.
   */
  medium: {...BASE, width: normalize(16), height: normalize(16)} as ImageStyle,
  /**
   * A large version of the default icon.
   */
  large: {...BASE, width: normalize(28), height: normalize(28)} as ImageStyle,
  /**
   * A extra large version of the default icon.
   */
  extraLarge: {...BASE, width: normalize(50), height: normalize(50)} as ImageStyle,
};

/**
 * A list of preset names.
 */
export type IconPresetsName = keyof typeof presets;
