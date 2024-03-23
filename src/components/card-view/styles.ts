import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {normalize} from '../../theme/normalize';
import {colors} from '../../theme';
import {font_10, font_12, font_16} from '../../theme/font';

type StyleProps = {
  cardViewStyle: ViewStyle;
  characterIconStyle: ImageStyle;
  nameTxtStyle: TextStyle;
  commonDotStyle: ViewStyle;
  statusContainerStyle: ViewStyle;
  aliveDotStyle: ViewStyle;
  deadDotStyle: ViewStyle;
  unkonwnDotStyle: ViewStyle;
  statusTxtStyle: TextStyle;
  genderTxtStyle: TextStyle;
};

export const styles = StyleSheet.create<StyleProps>({
  cardViewStyle: {
    backgroundColor: colors.white,
    marginVertical: normalize(5),
    width: '45%',
    marginHorizontal: normalize(5),
    borderRadius: normalize(5),
    shadowColor: colors.black,
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  characterIconStyle: {
    height: normalize(100),
    width: '100%',
    borderTopLeftRadius: normalize(5),
    borderTopRightRadius: normalize(5),
  },
  nameTxtStyle: {
    fontWeight: '500',
    fontSize: font_16,
    color: colors.black,
    marginLeft: normalize(5),
    marginTop: normalize(5),
  },
  commonDotStyle: {
    height: normalize(8),
    width: normalize(8),
    borderRadius: normalize(6),
    alignSelf: 'center',
    marginHorizontal: normalize(5),
  },
  statusContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(5),
  },
  aliveDotStyle: {
    backgroundColor: colors.green,
  },
  deadDotStyle: {
    backgroundColor: colors.red,
  },
  unkonwnDotStyle: {
    backgroundColor: colors.gray,
  },
  statusTxtStyle: {
    fontSize: font_12,
    textTransform: 'capitalize'
  },
  genderTxtStyle: {
    fontSize: font_12,
    fontWeight: '400',
    color: colors.black,
    marginLeft: normalize(5),
    marginTop: normalize(5),
    textTransform: 'capitalize',
    marginBottom: normalize(10)
  },
});
