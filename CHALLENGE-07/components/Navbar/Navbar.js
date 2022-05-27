import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <div className={styles.navbar}>
            <div className={styles.logo}>FEJS2</div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link href="/" style={{textDecoration: 'none'}}>Home</Link></li>
                    <li className={styles.item}><Link href="/input">Input</Link></li>
                    <li className={styles.item}><Link href="/chart">Chart</Link></li>
                    <li className={styles.item}><Link href="/download">Download</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
