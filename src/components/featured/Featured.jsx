import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'



const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>Read Here Popular SEO Related Blogs</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='AI' width={400} height={500} className={styles.image}/>
        </div>
        <div className={styles.textContaier}>
          <h1 className={styles.postTitle}>How to prevent AI from taking your content</h1>
          <p className={styles.postDesc}>
          What can AI take from your content?
First, what can generative AI even take from us? I see five categories of what we’d actually stand to lose:

Your entire work or multiple works
Generative AI can take an entire piece you may have produced, like a blog post, a video, a social post, an image, or a combination of the above. 


          </p>

          <button className={styles.button}>Read More</button>

        </div>

      </div>
    </div>
  )
}

export default Featured
