import Featured from '@/components/featured/Featured'
import styles from './homepage.module.css'
import React from 'react'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'

const page = () => {
  return (
    <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
     <CardList/>
     <Menu/>
    </div>
    </div>
    
  )
}

export default page
