import { StyleSheet } from 'react-native';

import { COLORS } from './colors.constant';

export const GLOBAL_STYLE = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: COLORS.layout,
    paddingHorizontal: 16
  }
});
