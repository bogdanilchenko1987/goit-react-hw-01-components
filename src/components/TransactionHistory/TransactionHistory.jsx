import PropTypes from 'prop-types';

import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import {
  TableHead,
  TableWrapper,
  TransactionHistoryTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableWrapper>
      <TransactionHistoryTable>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </TransactionHistoryTable>
    </TableWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
