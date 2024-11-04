import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.title}>
        <tr>
          <th className={s.itemTh}>Type</th>
          <th className={s.itemTh}>Amount</th>
          <th className={s.itemTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => {
          return (
            <tr key={el.id} className={s.item}>
              <td className={s.itemTd}>{el.type}</td>
              <td className={s.itemTd}>{el.amount}</td>
              <td className={s.itemTd}>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
