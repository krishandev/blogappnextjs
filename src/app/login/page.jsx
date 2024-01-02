"use client"
import React from 'react'
import styles from './login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const {data, status}=useSession();
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
        <div className={styles.container2}>
            <button className={styles.googleButton} onClick={()=>signIn("google")}>Sign in With Google</button>
            <button className={styles.gitButton}>Sign in With GitHub</button>
            <button className={styles.faceButton}>Sign in With Facebook</button>


        </div>
    </div>
  )
}

export default Login