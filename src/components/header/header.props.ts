import {TextStyle, ViewStyle} from 'react-native';
import { IconTypes } from '../../assets/icons';

export interface HeaderProps {
  headerText?: string;
  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes;
  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void;
  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes;
  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void;
  /**
   * Container style overrides.
   */
  style?: ViewStyle;
  /**
   * Title style overrides.
   */
  titleStyle?: TextStyle;
}
