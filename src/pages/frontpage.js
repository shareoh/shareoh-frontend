import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Frontpage() {
  return (
    <>
      <Head>
        <title>Share OH! | Frontpage</title>
        <meta name="description" content="Share and Use sources effortlessly with our share oh app" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <p>Voila! Check the products</p>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/share-oh.svg"
              alt="Share OH Logo"
              width={140}
              height={140}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
