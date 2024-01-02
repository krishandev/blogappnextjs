"use client"
import React, { useState } from 'react'
import styles from './write.module.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const write = () => {
    const [open, setOpen]=useState(false);
    const [value, setValue]=useState("");

    const {status}=useSession();
  const router=useRouter();
  console.log(data, status);

  if(status==='loading')
  {
    <div>Loading...</div>
  }
  if(status==='authenticated')
  {
     router.push("/");
  }

  return (
    <div className={styles.container}>
        <input type='text' placeholder='Title' className={styles.input}/>
        <div className={styles.editor}>
            <button className={styles.button} onClick={()=>setOpen(!open)}>
                <Image src='/plus.png' alt='plus' width={15} height={15}/>
            </button>
            {
                open && (
                    <div className={styles.add}>
                    <button className={styles.addButton}>
                     <Image src='/image.png'  alt='plus' width={15} height={15}/>   
                    </button>

                    <button className={styles.addButton}>
                     <Image src='/external.png' alt='plus' width={15} height={15}/>   
                    </button>

                    <button className={styles.addButton}>
                     <Image src='/video.png' alt='plus' width={15} height={15}/>   
                    </button>

                    </div>
                    
                )
            }
            <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell Your Story...'/>

            
        </div>
        <div>
        <button className={styles.publish}>Publish</button>
        </div>
        

    </div>
  )
}

export default write