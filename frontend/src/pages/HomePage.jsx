import React from 'react'
import styles from '../styles/pages/HomePage.module.css'
import ProductCard from '../components/ProductCard'
import useProductStore from '../stores/Product'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const { getProducts, products } = useProductStore();

    useEffect(() => {
        getProducts();
    }, [getProducts]);
    console.log(products);


  return (
    <div className={styles.homePageContainer}>
        <div className={styles.homePageTitle}>Current Products</div>
        <div className={styles.homePageProductContainer}> 
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
        {products.length === 0 && (
            <div className={styles.EmptyProductContainer}>
                <div className={styles.EmptyProductTitle}>No Products Found. <span><Link to="/create">Create A New Product</Link></span></div>
            </div>
        )}
    </div>
  )
}

export default HomePage