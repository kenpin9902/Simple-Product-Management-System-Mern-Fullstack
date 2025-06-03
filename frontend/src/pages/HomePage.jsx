import React from 'react'
import styles from '../styles/pages/HomePage.module.css'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
        <div className={styles.homePageTitle}>Current Products</div>
        <div className={styles.homePageProductContainer}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default HomePage