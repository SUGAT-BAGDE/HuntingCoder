import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.banner_bg}>
              <Image src={'/homeimg.jpg'} width={600*10} height={400*5} decoding='sync' objectFit='cover' layout="responsive" className={styles.banner_img}/>
          </div>

          <div className={styles.banner_context}>
            <h1 className={styles.title}>
              Hunting Coders
            </h1>

            <p className={styles.description}>
              A blog for hunting coders by a hunting coder
            </p>
          </div>
        </div>
        
        <div className={styles.container}>
          <div>
            <h2>Popular Blogs</h2>
            <div >
              <h3>How to learn Javascript in 2022?</h3>
              <p>Javascript is language used to write logic for web apps</p>
            </div>
            <div>
              <h3>How to learn Javascript in 2022?</h3>
              <p>Javascript is language used to write logic for web apps</p>
            </div>
            <div>
              <h3>How to learn Javascript in 2022?</h3>
              <p>Javascript is language used to write logic for web apps</p>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}
