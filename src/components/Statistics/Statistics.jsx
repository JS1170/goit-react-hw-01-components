import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from './getRandomColor';

export function Statistics({ title, stats }) {
  
  return (
    <div className={css.blockStat}>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                style={{ backgroundColor: getRandomHexColor() }}
                className={css.item}
                key={id}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );

}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
