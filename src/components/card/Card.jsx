import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='image' fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>17-12-2023</span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href='/'>
                    <h1>Google local search ranking algorithm strengthens “openness” signal</h1>
                </Link>
                <p className={styles.desc}>
                Google’s local search ranking algorithm has recently been updated to strengthen its “openness” signal for non-navigational queries. Danny Sullivan, Google’s Search Liaison, said, “we’ve long used “openness” as part of our local ranking systems, and it recently became a stronger signal for non-navigational queries.”
                </p>
                <Link href='/' className={styles.link}>Read More</Link>

            </div>
        </div>
    )
}

export default Card