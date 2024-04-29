import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
  const transformedTransactions = transactions.map((transaction) => ({
    ...transaction,
    amount: parseFloat(transaction.amount),
  }));
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {transformedTransactions.map((transaction) => (
          <tr className={css.tableRow} key={transaction.id}>
            <td className={css.tableDescription}>{transaction.type}</td>
            <td className={css.tableDescription}>{transaction.amount}</td>
            <td className={css.tableDescription}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;