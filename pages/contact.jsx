import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const handleSubmit = (e) =>{
  e.preventDefault()
}

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    console.log(`value : "${e.target.value}"`)
    if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setDesc(e.target.value)
    }
    else if (e.target.name == 'name') {
      setName(e.target.value)
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {phone, name, email, desc};
    console.log(data)
    fetch('http://localhost:3000/api/postcontact', {
      method: 'PUT', // or 'POST'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for contacting us");
        setPhone('')
        setName('')
        setDesc('')
        setEmail('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className={styles.container}>
      <Head><title>Contact | Hunting Coder</title></Head>
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
        <input value={name} required onChange={handleChange} className={styles.input} type="text" id="name" name='name' aria-describedby="emailHelp" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email"  className={styles.formlabel}>Email address</label>
        <input className={styles.input} required onChange={handleChange} value={email} type="email" name='email' id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" value={phone} className={styles.formlabel}>Phone</label>
        <input className={styles.input} onChange={handleChange} required type="phone" name='phone' id="phone"/>
      </div>
      <div className={styles.mb3}>
        <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
        <textarea className={styles.input} value={desc} onChange={handleChange} required name='desc' id="desc" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  </div>
  )
}

export default Contact