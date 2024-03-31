import React from 'react'
import styles from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>
                <button className={`${styles.button} ${styles.delete}`}>
                  Previous
                </button>

            
                <button className={`${styles.button} ${styles.delete}`}>
                  Next
                </button>
    </div>
  )
}

export default Pagination
