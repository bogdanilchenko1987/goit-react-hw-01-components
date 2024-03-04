import PropTypes from 'prop-types';

import { TableR } from './TransactionItem.styled';

export const TransactionItem = ({ currency, amount, type }) => {
  return (
    <TableR>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableR>
  );
};

TransactionItem.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};
