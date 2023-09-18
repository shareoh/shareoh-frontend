import Image from "next/image";
import styles from "@/styles/home.module.scss";
import { Typography } from "antd";
import why_shr_card_img from "../../public/img/home/why_shr_card.svg";

const { Title, Text } = Typography;

export default function WhyShrCard({heading}) {
  return (
    <div className={`${styles.why_shr_card}`}>
              <div className={`${styles.why_shr_card_img}`}>
                <Image
                  className={`${styles.hero_image}`}
                  src={why_shr_card_img}
                  alt="why share oh"
                  width={175}
                  height={120}
                  priority
                />
              </div>
              <Title level={4} className={`${styles.text_dark}`}>
                {heading}
              </Title>
              <Text>Enjoy the ride, not the bike!
                Rent things whenever you need them.</Text>
            </div>
  );
}
