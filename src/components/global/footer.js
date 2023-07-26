import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import styles from "@/styles/home.module.scss";
import logoDark from "../../../public/img/logo-dark.svg";
import { Typography } from "antd";

const { Title } = Typography;
export default function Footer() {
  return (
    <div className={`${styles.bg_light}`}>
      <div className={`${styles.shr_container} ${styles.footer_main_hold}`}>
        <div className={styles.footer_logo_box}>
          <Link href="/">
            <Image
              src={logoDark}
              alt="Share OH Logo"
              width={150}
              height={55}
              priority
            />
          </Link>
          <Title
            level={5}
            className={`${styles.text_dark}`}
            style={{ marginTop: 0 }}
          >
            Purpose Driven to Preserve Nature
          </Title>
          <article className={`${styles.text_dark}`}>
            A Platform to Connect People for Sharing Resources,
            <br />
            Enables people to Earn by re-using Unused Resources
          </article>
        </div>
        <div className={styles.footer_links_box}>
          <Link href="/frontpage">
            <Title
              level={5}
              style={{ marginTop: 0 }}
              className={`${styles.text_dark} ${styles.footer_link_head}`}
            >
              Front Page
            </Title>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Profile</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Privacy Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Cookie Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>
              Terms of Service
            </article>
          </Link>
        </div>
        <div className={styles.footer_links_box}>
          <Link href="/frontpage">
            <Title
              level={5}
              style={{ marginTop: 0 }}
              className={`${styles.text_dark} ${styles.footer_link_head}`}
            >
              Front Page
            </Title>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Profile</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Privacy Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Cookie Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>
              Terms of Service
            </article>
          </Link>
        </div>
        <div className={styles.footer_links_box}>
          <Link href="/frontpage">
            <Title
              level={5}
              style={{ marginTop: 0 }}
              className={`${styles.text_dark} ${styles.footer_link_head}`}
            >
              Front Page
            </Title>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Profile</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Privacy Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>Cookie Policy</article>
          </Link>
          <Link href="#">
            <article className={`${styles.text_dark}`}>
              Terms of Service
            </article>
          </Link>
        </div>
      </div>
      <div className={`${styles.shr_container}`}>
        <article className={`${styles.footer_copyright} ${styles.text_dark}`}>
          Copyrights 2023 @ Share OH! - A Resource Sharing Platform
        </article>
      </div>
    </div>
  );
}
