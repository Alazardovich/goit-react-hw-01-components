import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.Transaction}>
    <thead>
      <tr className={styles.Title}>
        <th className={styles.TitleList}>Type</th>
        <th className={styles.TitleList}>Amount</th>
        <th className={styles.TitleList}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, amount, currency, type }) => (
        <tr key={id}>
          <td className={styles.Element}>{type}</td>
          <td className={styles.Element}>{amount}</td>
          <td className={styles.Element}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.protoTypes = {
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default TransactionHistory;
