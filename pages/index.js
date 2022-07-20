import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signIn, useSession,signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Home() {

  const { data:session }=useSession()
  const {push,asPath}=useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div>
          <h1>This is Home page</h1>
          {!session ? 
            <button className={styles.btn} onClick={()=>push('/auth/signin?callbackUrl='+asPath)}>Login with google account</button> :
            <button className={styles.btn} onClick={()=>signOut()}>Login out</button>
          }
        </div>
      </div>
      
    </div>
  )
}
