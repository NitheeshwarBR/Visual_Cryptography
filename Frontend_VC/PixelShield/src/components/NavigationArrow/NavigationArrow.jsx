import styles from "./NavigationArrow.module.css"

import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function NavigationArrow() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.iconContainer}>
        <ArrowForwardIcon  />
      </div>
    </div>
  )
}

export default NavigationArrow
