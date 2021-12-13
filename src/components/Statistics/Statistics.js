import StatisticsList from "./StatisticsList";
import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const Statistics = ({ title, stats }) => (
  <section className={styles.Statistics}>
    {title && <h2 className={styles.Title}>{title}</h2>}
    <ul className={styles.ListItem}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsList key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
