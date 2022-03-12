import Head from 'next/head'
import React from 'react'
import styles from '../styles/Contact.module.css'

const About = () => {
  return (
    <>
      <Head><title>About | hunting Coder</title></Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea deserunt molestias sint ipsam cupiditate necessitatibus laborum omnis reprehenderit molestiae numquam dignissimos, aliquam architecto fugiat iste, doloribus non magni. Deleniti explicabo velit ad recusandae iusto exercitationem numquam natus, ut quod dolore officiis earum fugit inventore nam architecto, laboriosam iure ducimus illum. Laboriosam minus ipsum cum quo adipisci, dolore, error, corrupti odit sequi ratione distinctio cumque.</p>

          <h2>Servies</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum tempora ratione dignissimos veritatis doloremque? Officia et maxime praesentium velit qui sint iste ipsam ullam. Magnam impedit facere sint distinctio culpa aliquam laborum natus ea dicta. Illo odio quas dolor repudiandae odit velit nam ipsum illum.</p>
          <p>Services we offer</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
            <li>Service 7</li>
            <li>Service 8</li>
          </ul>

          <h2>Contact US</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus velit repellat eligendi temporibus tempore sapiente nobis, repudiandae provident suscipit deleniti tenetur magnam sed cum dignissimos aliquam error quas doloremque! Laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed cum autem.</p>
        </div>
      </main>
    </>
  )
}

export default About