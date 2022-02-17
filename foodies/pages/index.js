import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodiesApp</title>
        <meta name="description" content="World Best Foodies App Ever You Found!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
