import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h2>Krishan Dev</h2>
        </div>
        <p>I am a programmer and Digital marketer. I have developed this website. I have developed manay websites. I provide online classes and courses. </p>
        <div className={styles.socialLinks}>
          <Link href='/'> <FaFacebook/> </Link>
          <Link href='/'> <FaInstagram/> </Link>
          <Link href='/'> <FaTwitter/> </Link>
          <Link href='/'> <FaLinkedin/> </Link>

        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.title}>Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Courses</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.title}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Culture</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.title}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>LinkedIn</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Youtube</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer
