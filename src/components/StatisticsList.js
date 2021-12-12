import PropTypes from "prop-types";
import styles from "../module-styles/Statistic.module.css";

const color = function randomColor() {
  return (
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")"
  );
};

const StatisticsList = ({ label, percentage }) => (
  <li className={styles.Item} style={{ backgroundColor: color() }}>
    <span className={styles.Label}>{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
