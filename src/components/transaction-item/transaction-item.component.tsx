import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { ITransaction } from '@models/transaction.model';

import { TransactionStatus, TransactionOrigin } from '@enums/transaction.enum';

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

  const getTransactionTitle = useCallback((): string => {
    switch (transaction.status) {
      case TransactionStatus.APPROVED:
        return TITLES.approved;
      case TransactionStatus.CANCELLED:
        return TITLES.cancelled;
      case TransactionStatus.DECLINED:
        return TITLES.declined;
      case TransactionStatus.IN_REVIEW:
        return TITLES.inReview;
      case TransactionStatus.PENDING:
        return TITLES.pending;
      default:
        return '-';
    }
  }, [transaction.status]);
  // ---------------------

  const getTransactionDescription = useCallback((): string => {
    let transactionOrigin: string;
    switch (transaction.details.origin) {
      case TransactionOrigin.ATM_MACHINE:
        transactionOrigin = TITLES.atmMachine;
        break;
      case TransactionOrigin.IN_PERSON:
        transactionOrigin = TITLES.inPerson;
        break;
      case TransactionOrigin.MOBILE_APP:
        transactionOrigin = TITLES.mobileApp;
        break;
      case TransactionOrigin.PHONE_CALL:
        transactionOrigin = TITLES.phoneCall;
        break;
      case TransactionOrigin.WEB_PORTAL:
        transactionOrigin = TITLES.pending;
        break;
      default:
        return '-';
    }
    return `The transaction ${transaction.objectId} has been ${getTransactionTitle()} from ${transactionOrigin}`;
  }, [transaction.details.origin, transaction.objectId, getTransactionTitle]);
  // ---------------------

  const getTransactionIcon = useCallback((): string => {
    if (transaction.details.origin === TransactionOrigin.PHONE_CALL) return 'phone';
    if (transaction.details.origin === TransactionOrigin.MOBILE_APP) return 'mobile-phone';
    switch (transaction.status) {
      case TransactionStatus.APPROVED:
        return 'check';
      case TransactionStatus.CANCELLED:
        return 'ban';
      case TransactionStatus.DECLINED:
        return 'times-circle-o';
      case TransactionStatus.IN_REVIEW:
        return 'eye';
      case TransactionStatus.PENDING:
        return 'hourglass-2';
      default:
        return 'question';
    }
  }, [transaction.details.origin, transaction.status]);
  // ---------------------

  return (
    <ListItem key={transaction.objectId} onPress={() => onPress?.(transaction)} bottomDivider>
      <Icon style={styles.icon} name={getTransactionIcon()} size={28} color={COLORS.primary} />
      <ListItem.Content>
        <ListItem.Title style={styles.titleText}>{getTransactionTitle()}</ListItem.Title>
        <ListItem.Subtitle style={styles.descriptionText}>{getTransactionDescription()}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Subtitle style={styles.timeText}>{moment(transaction.timestamp).local().format('HH:MM a')}</ListItem.Subtitle>
      <ListItem.Chevron />
    </ListItem>
  );
  // ------------------------------------------------------------------------------------------
};

// Styles --------------
const styles = StyleSheet.create({
  titleText: {
    fontSize: FONT_SIZE.md,
    fontWeight: '600'
  },
  descriptionText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.lightBlack
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    fontSize: FONT_SIZE.xSm,
    color: COLORS.lightBlack
  },
  icon: {
    width:28
  }
});
// ------------------------------------------------------------------------------------------
