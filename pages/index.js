import Head from 'next/head'
import Image from 'next/image'
import { Home } from '../components/Home'
import styles from '../styles/Home.module.css'

export default function App() {
  return (
    <div className={styles.container} >
      <Home />
    </div>
  )
}
