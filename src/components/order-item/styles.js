import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 80,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    // color: COLORS.text,
  },
  client: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    // color: COLORS.text,
  },
});