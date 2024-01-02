import React from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.container}>

    <div className={styles.items}>

      {/* first link  */}
      <Link href='/' className={styles.item}>
        {
            withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='image' fill className={styles.image}/>
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>YouTube launches free subscription offer to boost channel growth</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bhavesh Dev</span>
            <span className={styles.date}>- 18-12-2023</span>
          </div>
        </div>
      </Link>

      {/* Second link  */}
      <Link href='/' className={styles.item}>
        {
            withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='image' fill className={styles.image}/>
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Culture</span>
          <h3 className={styles.postTitle}>YouTube launches free subscription offer to boost channel growth</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bhavesh Dev</span>
            <span className={styles.date}>- 18-12-2023</span>
          </div>
        </div>
      </Link>

            {/*Third link  */}
            <Link href='/' className={styles.item}>
        {
            withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='image' fill className={styles.image}/>
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>YouTube launches free subscription offer to boost channel growth</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bhavesh Dev</span>
            <span className={styles.date}>- 18-12-2023</span>
          </div>
        </div>
      </Link>

            {/* Fourth link  */}
            <Link href='/' className={styles.item}>
        {
            withImage && <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='image' fill className={styles.image}/>
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
          <h3 className={styles.postTitle}>YouTube launches free subscription offer to boost channel growth</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Bhavesh Dev</span>
            <span className={styles.date}>- 18-12-2023</span>
          </div>
        </div>
      </Link>


    </div>
    </div>
  )
}

export default MenuPosts