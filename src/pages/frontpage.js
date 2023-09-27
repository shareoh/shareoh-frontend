import Head from "next/head";
import Image from "next/image";
import { Typography } from "antd";
import styles from "@/styles/home.module.scss";

import why_shr_card_img from "../../public/img/home/why_shr_card.svg";
const { Title, Text } = Typography;


export default function Frontpage() {
  const items = [
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 },
    { title: 'iPhone 12 Pro', cost: 47, description: 'All Ok, No Any Problem, Battery Health 88', distance: 10, area: 'NewYork City, USA', rating: 5.23, ratedBy: 123 }
  ]
  return (
    <>
      <Head>
        <title>Share OH! | Frontpage</title>
        <meta name="description" content="Share and Use sources effortlessly with our share oh app" />
      </Head>
      <div className={`${styles.white_bg}`}>
        <div className={`${styles.shr_container} ${styles.section_padding} ${styles.items_boxes_holder}`}>
          {items.map((item, key) => (
            <div key={key} className={`${styles.why_shr_card}`}>
              <div className={`${styles.item_details_img}`}>
                <Image
                  className={`${styles.hero_image}`}
                  src={why_shr_card_img}
                  alt="item image"
                  width={175}
                  height={120}
                  priority
                />
                <div className={`${styles.item_box_distance}`}>
                  {item.distance} km <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className={`${styles.text_secondary} ${styles.item_box_wishlist}`}>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
              </div>
              <article className={`${styles.text_dark} ${styles.item_details_title}`}>
                {item.title}
              </article>
              <article className={`${styles.text_dark} ${styles.item_details_description}`}>{item.description}</article>
              <article className={`${styles.text_dark} ${styles.item_details_area}`}>{item.area}</article>
              <div className={`${styles.itembox_rate_ing_holder}`}>
              <article className={`${styles.text_dark} ${styles.item_details_price}`}>
                &#8377; {item.cost}
              </article>
              <article className={`${styles.text_dark} ${styles.item_details_rating}`}>
              <i className={`${styles.text_secondary} fa fa-star`} aria-hidden="true"></i> {item.rating} ({item.ratedBy})
              </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
