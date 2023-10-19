import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { ITransaction } from '@models/transaction.model';

import { COLORS } from '@constants/colors.constant';
import { FONT_SIZE } from '@constants/fonts.constant';
import { TITLES } from '@constants/titles.constant';

export interface ITransactionItemProps {
  transaction: ITransaction;
  onPress?: (transaction: ITransaction) => void;
}
// -----------------

export const TransactionItem: React.FC<ITransactionItemProps> = (props: ITransactionItemProps) => {

  const {transaction, onPress} = props;
  // ---------------------

  return (
    <View style={styles.container}>
      {/* Details */}
      <View style={styles.contentContainer}>
        <Icon name="dot-circle-o" size={26} color={COLORS.primary} />
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>{TITLES.title}</Text>
          <Text style={styles.descriptionText}>{TITLES.description} ({transaction.objectId})</Text>
        </View>
      </View>

      {/* Time */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{moment(transaction.timestamp).local().format('HH:MM a')}</Text>
      </View>
    </View>
  );
  // ------------------------------------------------------------------------------------------
};

// Styles --------------
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayDiv,
    paddingVertical: 14
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  detailsContainer: {
    height: 45,
    justifyContent: 'space-between',
    marginLeft: 12
  },
  titleText: {
    fontSize: FONT_SIZE.sm,
    fontWeight: '500'
  },
  descriptionText: {
    fontSize: FONT_SIZE.xSm,
    color: COLORS.lightBlack
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    fontSize: FONT_SIZE.xSm,
    color: COLORS.lightBlack
  }
});
// ------------------------------------------------------------------------------------------
