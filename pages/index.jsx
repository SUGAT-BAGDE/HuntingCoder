import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'

const Index = (prop) => {

  const [allBlogs, setallBlogs] = useState([])

  useEffect(() => {
    fetch("/api/blogs").then((a)=>{
      return a.json()
    }).then(data => setallBlogs(data)) 
  }, [])

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
          </div>
        </div>
        
        <div className={styles.container}>
          <div>
            <h2>Popular Blogs</h2>
            <div className={styles.blogitem}>
              <a>
                <h3>How to learn Flask in 2022?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </a>
            </div>
            <div className={styles.blogitem}>
              <a>
                <h3>How to learn Flask in 2022?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </a>
            </div>
            <div className={styles.blogitem}>
              <a>
                <h3>How to learn Flask in 2022?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default Index