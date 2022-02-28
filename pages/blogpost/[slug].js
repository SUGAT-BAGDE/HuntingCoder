import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

export default () => {
    const {slug} = useRouter().query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste libero necessitatibus expedita eaque pariatur animi assumenda in, sapiente inventore accusamus maxime nostrum dicta.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic unde quod magni praesentium sint aliquid facilis, minima ipsam corrupti ratione illum aut dolores blanditiis, consequatur ad illo numquam maxime expedita repudiandae voluptates quae esse, molestias temporibus. Rerum dolores blanditiis numquam eligendi vel molestias illo exercitationem?
        </div>
      </main>
    </div>
  )
}
