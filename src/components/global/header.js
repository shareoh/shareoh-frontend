import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import styles from "@/styles/home.module.scss";
import navLogo from "../../../public/img/logo.svg";
export default function Header() {
  return (
    <div className={`${styles.primary_bg}`}>
      <div className={`${styles.shr_container} ${styles.navbar_main_hold}`}>
        <Link href="/">
          <Image
            className={`${styles.nav_logo}`}
            src={navLogo}
            alt="Share OH Logo"
            width={150}
            height={55}
            priority
          />
        </Link>
        <div className={styles.nav_links_holder}>
          <Link href="/frontpage">
            <article className={styles.nav_link}>Front Page</article>
          </Link>
          <Link href="#">
            <article className={styles.nav_link}>Profile</article>
          </Link>
          <Link href="/login">
            <Button
              type="primary"
              shape="round"
              size="large"
              className={styles.nav_btn}
            >
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
