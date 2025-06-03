import React from 'react'
import styles from '../styles/components/ProductCard.module.css'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import useProductStore from '../stores/Product';

const ProductCard = ({product}) => {

    const { deleteProduct } = useProductStore();

    const handleDeleteProduct = async (id) => {
        const {success, message} = await deleteProduct(id);
        console.log(`success: ${success}, message: ${message}`);
    }

  return (
        <div className={styles.productCardContainer}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <div className={styles.productCardButtons}>
                <button className={styles.ButtonEdit}><CiEdit size={20} />Edit</button>
                <button className={styles.ButtonDelete} onClick={() => handleDeleteProduct(product._id)}><MdDeleteOutline size={20} />Delete</button>
            </div>
        </div> 
  )
}

export default ProductCard