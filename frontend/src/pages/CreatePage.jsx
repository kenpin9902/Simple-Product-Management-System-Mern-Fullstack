import React from 'react'
import styles from '../styles/pages/Createpage.module.css'

const CreatePage = () => {
  return (
    <div className={styles.createPageContainer}>
      <div className={styles.createPageTitle}>Create A New Product</div>
      <div className={styles.createPageFormContainer}>
          <input type="text" placeholder='Name*' />
          <input type="number" placeholder='Price*' />
          <input type="text" placeholder='Image URL*' />
          <input type="text" placeholder='Category' />
          <button type='submit'>Add Product</button>
      </div>
    </div>
  )
}

export default CreatePage