import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ScreenWidth, font_15, font_18} from '../../theme/font';
import {colors} from '../../theme';
import { HP } from '../../theme/scale';
import { normalize } from '../../theme/normalize';

interface Styles {
  containerStyle: ViewStyle;
  txtTitleHeaderStyle: TextStyle;
  headerContainerStyle: ViewStyle;
  noDataFoundTxtStyle: TextStyle;
  noDataContainerStyle: ViewStyle;
  flatListStyle: ViewStyle;
  bottomLoaderStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  txtTitleHeaderStyle: {
    fontSize: font_18,
    color: colors.black,
    width: ScreenWidth - normalize(10) ,
    textAlign:'center'
  },
  headerContainerStyle: {
    height: HP(6),
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4
  },
  noDataFoundTxtStyle: {
    fontSize: font_15,
    color: colors.black,
  },
  noDataContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  flatListStyle: {
    flex: 1, 
    marginHorizontal: normalize(5)
  },
  bottomLoaderStyle: {
    backgroundColor: colors.white
  }
});

export {styles};
