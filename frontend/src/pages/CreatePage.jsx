import React from 'react'
import styles from '../styles/pages/Createpage.module.css'
import useProductStore from '../stores/Product.js'
import { useState } from 'react'

const CreatePage = () => {

    const { addProduct } = useProductStore();

    const [newProduct, setNewProduct] = useState( {
        name: "",
        price: "",
        image: "",
        category: "General"
    })

    const handleAddProduct = async () => {
        const {success, message} = await addProduct(newProduct);
        console.log(`success: ${success}, message: ${message}`);
        if (success) {
          setNewProduct({
            name: "",
            price: "",
            image: "",
            category: "General"
          });
        } 
    }

  return (
    <div className={styles.createPageContainer}>
      <div className={styles.createPageTitle}>Create A New Product</div>
      <div className={styles.createPageFormContainer}>
          <input type="text" placeholder='Name*' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
          <input type="number" placeholder='Price*' value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
          <input type="text" placeholder='Image URL*' value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
          <input type="text" placeholder='Category' value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
          <button type='submit' onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  )
}

export default CreatePage