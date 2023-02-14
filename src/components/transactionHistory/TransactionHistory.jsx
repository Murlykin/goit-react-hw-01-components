import PropTypes from 'prop-types';
import {TransactionHistor, TransactionProperty, TypeAmoundCurrency, DataTypeAmoundCurrency, DataType, AmoundCurrency } from 'components/transactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistor>
      <TransactionProperty>
        <tr>
          <TypeAmoundCurrency>Type</TypeAmoundCurrency>
          <TypeAmoundCurrency>Amount</TypeAmoundCurrency>
          <TypeAmoundCurrency>Currency</TypeAmoundCurrency>
        </tr>
      </TransactionProperty>

      <tbody>
        {items.map(item => (
          <DataTypeAmoundCurrency key={item.id}>
            <DataType>{item.type}</DataType>
            <AmoundCurrency>{item.amount}</AmoundCurrency>
            <AmoundCurrency>{item.currency}</AmoundCurrency>
          </DataTypeAmoundCurrency>
        ))}
      </tbody>
    </TransactionHistor>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
