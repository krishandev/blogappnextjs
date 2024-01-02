import React from 'react'
import styles from './comments.module.css'
import Image from 'next/image'

const Comments = () => {
  return (
    <div>
        <div>
            <h1>Comments</h1>
            <div className={styles.writeComment}>
              <textarea className={styles.textarea1} placeholder='Write a Comment Here...' cols={100} rows={2}/>
              <button className={styles.button1}>Send</button>
            </div>
            {/* comment One  */}
            <div className={styles.comment}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <Image src='/p1.jpeg' alt='user' height={50} width={50} className={styles.avatar}/>
                </div>
                <div className={styles.userText}>
                 <span>Krishan Dev</span>
                 <span>23-Dec-2023</span>
                </div>

            </div>
            <div className={styles.commentText}>
            <p>I have read this blog, this is very informative. here is detailed information about SEO topic. Read all blogs of this website. Like all blogs as well.</p>
            </div>
            </div>

            {/* comment two  */}
            <div className={styles.comment}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <Image src='/p1.jpeg' alt='user' height={50} width={50} className={styles.avatar}/>
                </div>
                <div className={styles.userText}>
                 <span>Krishan Dev</span>
                 <span>23-Dec-2023</span>
                </div>

            </div>
            <div className={styles.commentText}>
            <p>I have read this blog, this is very informative. here is detailed information about SEO topic. Read all blogs of this website. Like all blogs as well.</p>
            </div>
            </div>

            {/* comment two  */}
            <div className={styles.comment}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <Image src='/p1.jpeg' alt='user' height={50} width={50} className={styles.avatar}/>
                </div>
                <div className={styles.userText}>
                 <span>Krishan Dev</span>
                 <span>23-Dec-2023</span>
                </div>

            </div>
            <div className={styles.commentText}>
            <p>I have read this blog, this is very informative. here is detailed information about SEO topic. Read all blogs of this website. Like all blogs as well.</p>
            </div>
            </div>

            {/* comment three  */}
            <div className={styles.comment}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <Image src='/p1.jpeg' alt='user' height={50} width={50} className={styles.avatar}/>
                </div>
                <div className={styles.userText}>
                 <span>Krishan Dev</span>
                 <span>23-Dec-2023</span>
                </div>

            </div>
            <div className={styles.commentText}>
            <p>I have read this blog, this is very informative. here is detailed information about SEO topic. Read all blogs of this website. Like all blogs as well.</p>
            </div>
            </div>

            {/* comment four  */}
            <div className={styles.comment}>
            <div className={styles.user}>
                <div className={styles.userImage}>
                    <Image src='/p1.jpeg' alt='user' height={50} width={50} className={styles.avatar}/>
                </div>
                <div className={styles.userText}>
                 <span>Krishan Dev</span>
                 <span>23-Dec-2023</span>
                </div>

            </div>
            <div className={styles.commentText}>
            <p>I have read this blog, this is very informative. here is detailed information about SEO topic. Read all blogs of this website. Like all blogs as well.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Comments