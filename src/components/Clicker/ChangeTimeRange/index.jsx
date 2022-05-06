import React from 'react';
import styles from './ChangeTimeRange.module.scss'

const ChangeTimeRange = (props) => {
  const handleTimeRange = ({target: {value}}) => {
    props.timeRange(value)
  }
  return (
    <label className={styles.container} htmlFor="step">
    <h2 className={styles.heading}>Change time in sec:</h2>
    <input
      type="number"
      value={props.time}
      onChange={handleTimeRange}
      className={styles.inputNumber}
    />
  </label>
  )
}

export default ChangeTimeRange;
