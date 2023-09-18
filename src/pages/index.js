import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "antd";
import styles from "@/styles/home.module.scss";
import introImg from "../../public/img/hero-img.svg";
import why_shr_card_img from "../../public/img/home/why_shr_card.svg";
import WhyShrCard from "../components/whyShrCard";
const { Title, Text } = Typography;
export default function Home() {
  return (
    <>
      <Head>
        <title>Share OH | Home</title>
        <meta
          name="description"
          content="Share and Use sources effortlessly with our share oh app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.primary_bg}`}>
        <div
          className={`${styles.shr_container} ${styles.section_lr_holder} ${styles.hero_section}`}
        >
          <div className={styles.section_lr_left}>
            <Title
              className={`${styles.text_white}`}
              style={{ marginBottom: 0 }}
            >
              Share Oh!
            </Title>
            <Title
              level={2}
              className={`${styles.text_white}`}
              style={{ marginTop: 0 }}
            >
              Purpose Driven to <br />
              Preserve Nature
            </Title>
            <article className={`${styles.text_white}`}>
              A Platform to Connect People for Sharing Resources,
              <br />
              Enables people to Earn by re-using Unused Resources
            </article>
          </div>
          <div
            className={styles.section_lr_right}
            style={{ alignSelf: "flex-end" }}
          >
            <Image
              className={`${styles.hero_image}`}
              src={introImg}
              alt="Share OH intro"
              width={600}
              height={470}
              priority
            />
          </div>
        </div>
        <div
          className={`${styles.bg_white}`}
        >
          <div
            className={`${styles.shr_container} ${styles.section_padding}`}
          >
            <Title
              level={2}
              className={`${styles.text_dark} ${styles.section_heading} ${styles.why_shr_heading}`}
            >
              Why Share Oh?
            </Title>
            <div className={`${styles.why_shr_cards_holder}`}>
              <WhyShrCard heading="Own less. Do more!" description="Enjoy the ride, not the bike! Rent things whenever you need them." />
              <WhyShrCard heading="No worries" description="You're safe with us, we insure all your things." />
              <WhyShrCard heading="Sustainable" description="Save resources, reduce your carbon footprint." />
              <WhyShrCard heading="Friendly for wallet" description="Save by borrowing, make money by lending your things to other Sharelians." />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
