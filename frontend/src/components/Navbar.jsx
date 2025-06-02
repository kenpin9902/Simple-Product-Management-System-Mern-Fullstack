import React from 'react'
import styles from '../styles/components/Navbar.module.css'
import { Link } from 'react-router-dom'
import { FiPlusSquare } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbarTitle}><Link to="/">Product Store</Link></h1>
      <button className={styles.navbarButton}><Link to="/create"><FiPlusSquare />Create Product</Link></button>
    </div>
  )
}

export default Navbar