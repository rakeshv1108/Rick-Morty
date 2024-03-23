import {StyleSheet, ViewStyle} from 'react-native';
import {normalize} from '../../theme/normalize';

type StyleProps = {
  root: ViewStyle;
  viewContainer: ViewStyle;
  iconLeft: ViewStyle;
  iconRight: ViewStyle;
};

export const styles = StyleSheet.create<StyleProps>({
  root: {
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconLeft: {justifyContent: 'flex-start'},
  iconRight: {justifyContent: 'flex-end'},
});
