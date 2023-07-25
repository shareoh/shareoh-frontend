import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/home.module.scss'

export default function Header() {
    return (
      <div className={`${styles.primary_bg} ${styles.navbar_main_hold}`}>
      <Image
            className={`${styles.nav_logo} ${styles.navbar_main_hold}`}
            src="/share-oh.svg"
            alt="Share OH Logo"
            width={140}
            height={60}
            priority
          />
          <div className={styles.nav_links_holder}>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div> 
      </div>
    )
  }