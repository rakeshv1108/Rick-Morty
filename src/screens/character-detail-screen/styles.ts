import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {colors} from '../../theme/colors';

import {normalize} from '../../theme/normalize';
import {
  ScreenWidth,
  font_14,
  font_16,
  font_18,
  font_20,
} from '../../theme/font';

interface Styles {
  container: ViewStyle;
  headerTitle: TextStyle;
  headerContainer: ViewStyle;
  cardContainer: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
  rowContainer: ViewStyle;
  genderTxtStyle: TextStyle;
  statusStyle: TextStyle;
  titleTxtStyle: TextStyle;
  valueTxtStyle: TextStyle;
  commonDotStyle: ViewStyle;
  statusContainerStyle: ViewStyle;
  aliveDotStyle: ViewStyle;
  deadDotStyle: ViewStyle;
  unkonwnDotStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontSize: font_20,
    color: colors.black,
    textAlign: 'center',
    width: ScreenWidth - normalize(20),
  },
  headerContainer: {
    height: normalize(50),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white,
    elevation: 4,
  },
  cardContainer: {
    margin: normalize(10),
    backgroundColor: colors.white,
    borderRadius: normalize(10),
    padding: normalize(10),
    shadowColor: colors.black,
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: normalize(200),
    borderRadius: normalize(10),
  },
  valueTxtStyle: {
    fontSize: font_14,
    color: colors.gray,
  },
  name: {
    fontSize: font_16,
    color: colors.black,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: normalize(10),
  },
  genderTxtStyle: {
    fontSize: font_18,
    color: colors.black,
    marginRight: normalize(10),
  },
  statusStyle: {
    fontSize: font_18,
    color: colors.gray,
  },
  titleTxtStyle: {
    marginTop: normalize(10),
    fontSize: font_18,
    color: colors.black,
    fontWeight: '700',
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
});

export {styles};
