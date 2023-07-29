import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

export default function Login() {
  return (
    <>
      <Head>
        <title>Share OH | Login</title>
        <meta name="description" content="Share and Use sources effortlessly with our share oh app" />
      </Head>
      <div className={`${styles.primary_bg}`}>
        <div className={`${styles.shr_container} ${styles.section_lr_holder} ${styles.hero_section}`}>
        <p className={styles.text_white}>Voila! Login Page </p>
      </div>
      </div>
    </>
  );
}
