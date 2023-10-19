import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import moment from 'moment';
import _ from 'lodash';

import { useDebouncedCallback } from '@hooks';

import { TransactionItem } from '@components/transaction-item/transaction-item.component';

import { ITransaction } from '@models/transaction.model';

import { GLOBAL_STYLE } from '@constants/styles.constant';
import { COLORS } from '@constants/colors.constant';
import { FONT_SIZE } from '@constants/fonts.constant';
import { TITLES } from '@constants/titles.constant';

const transactionsData: ITransaction[] = require('@assets/data/transactions.json');

export const HomeScreen = ({ navigation }: any) => {

  const [transactionSections, setTransactionSections] = useState<(string | ITransaction)[]>([]);
  // ---------------------

  useEffect(() => {
    const transactionsAsSections: {[key: string]: ITransaction[]} = _.groupBy(transactionsData, (item: ITransaction) => {
      return moment(item.timestamp).local().format('YYYY-MM-DD');
    });
    const transactionsGroup: (string | ITransaction)[] = [];
    _.each(transactionsAsSections, (items: ITransaction[], key: string) => {
      transactionsGroup.push(key);
      _.each(items, (item: ITransaction) => {
        transactionsGroup.push(item);
      });
    });
    setTransactionSections(transactionsGroup);
  }, []);
  // ---------------------

  const onTransactionPressed = useDebouncedCallback((item: ITransaction) => {
    console.log('pressed!!!');
  }, []);
  // ---------------------

  const extractKey = useCallback((item: ITransaction | string) => {
    if (_.isString(item)) return `Key_${item}`;
    return item.objectId;
  }, []);
  // ---------------------

  const renderItem = useCallback(({item}: {item: ITransaction | string}): React.ReactElement => {
    if (typeof (item) === 'string') {
      const diffDays: number = moment().diff(item, 'days');
      let date: string;
      if ( diffDays === 0) {
        date = TITLES.today;
      } else if (diffDays === 1) {
        date = TITLES.yesterday;
      } else {
        date = moment(item).local().format('MMM DD, YYYY');
      }
      return (
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionName}>{date}</Text>
        </View>
      )
    } else {
      return (
        <TransactionItem transaction={item} onPress={onTransactionPressed}/>
      );
    }
  }, [onTransactionPressed]);
  // ---------------------

  const renderTransactionsListFooterComponent = useCallback((): React.ReactElement => {
    return (
      <View style={styles.listFooterContainer}>
        <Text style={styles.sectionName}>{_.isEmpty(transactionSections) ? TITLES.noTransactions : TITLES.endOfTransactions}</Text>
      </View>
    );
  }, [transactionSections]);
  // ---------------------

  return (
    <View style={GLOBAL_STYLE.fill}>
      <FlashList
        data={transactionSections}
        renderItem={renderItem}
        getItemType={(item) => {
          return typeof item === 'string' ? 'sectionHeader' : 'row';
        }}
        ListFooterComponent={renderTransactionsListFooterComponent}
        keyExtractor={extractKey}
        estimatedItemSize={59} />
    </View>
  );
  // ------------------------------------------------------------------------------------------

};

// Styles --------------
const styles = StyleSheet.create({
  sectionHeaderContainer: {
    paddingTop: 10,
    paddingBottom: 4
  },
  sectionName: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.midBlack,
    fontWeight: 'bold'
  },
  listFooterContainer: {
    paddingVertical: 12
  }
});
// ------------------------------------------------------------------------------------------

