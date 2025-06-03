import React from 'react'
import styles from '../styles/components/ProductCard.module.css'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


const ProductCard = () => {
  return (
    <>
        <div className={styles.productCardContainer}>
            <img/>
            <p>name</p>
            <p>price</p>
            <p>category</p>
            <div className={styles.productCardButtons}>
                <button className={styles.ButtonEdit}><CiEdit size={20} />Edit</button>
                <button className={styles.ButtonDelete}><MdDeleteOutline size={20} />Delete</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard