import {StyleSheet, ViewStyle} from 'react-native';
import {normalize} from '../../theme/normalize';
import { colors } from '../../theme';

type StyleProps = {
  simpleLoader: ViewStyle;
  loader: ViewStyle;
};

export const styles = StyleSheet.create<StyleProps>({
  simpleLoader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(15),
  },
  loader: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dim,
    zIndex: 1,
  },
});
