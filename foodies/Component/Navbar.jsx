import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
          <div className={styles.ph}>
            <Image src='/img/telephone.png' alt='Phone Icon' width={32} height={32} />
          </div>
          <div className={styles.headertext}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>01 354 369</div>
          </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listitem}>Homepage</li>
          <li className={styles.listitem}>Products</li>
          <li className={styles.listitem}>Menu</li>
          <Image src='/img/logo2.png' alt='Logo' width={160} height={96} />
          <li className={styles.listitem}>Event</li>
          <li className={styles.listitem}>Blog</li>
          <li className={styles.listitem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt='cart' width={30} height={30} />
        </div>
      </div>
    </div>
  )
}

export default navbar