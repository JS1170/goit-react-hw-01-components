import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <div className={css.blockStat}>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );

  //   function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // }
}
