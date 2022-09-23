// import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <div className={css.transactionTable}>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.cellTitle}>Type</th>
            <th className={css.cellTitle}>Amount</th>
            <th className={css.cellTitle}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr className={css.trClass} key={id}>
                <td className={css.cellTable}>{type}</td>
                <td className={css.cellTable}>{amount}</td>
                <td className={css.cellTable}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.number.isRequired,
// };
