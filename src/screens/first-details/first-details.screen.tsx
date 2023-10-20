import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IApplicationStackParamList } from '@models/navigation.model';

import { GLOBAL_STYLE } from '@constants/styles.constant';
import { COLORS } from '@constants/colors.constant';
import { FONT_SIZE } from '@constants/fonts.constant';

type Props = NativeStackScreenProps<IApplicationStackParamList, 'FirstDetails'>;

export const FirstDetailsScreen = ({ route }: Props) => {
  return (
    <View style={[GLOBAL_STYLE.center, GLOBAL_STYLE.fill]}>
      <Text style={styles.text}>Details Screen 1 with [{route?.params?.objectId}]</Text>
    </View>
  );
  // ------------------------------------------------------------------------------------------

};

// Styles --------------
const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.primary
  }
});
// ------------------------------------------------------------------------------------------

