import Link from "next/link";
import styles from "/styles/card.module.css";
import Image from "next/image";
import cls from "classnames";

const card = (props) => {
  const { img_url, card_link, card_title } = props;
  return (
    <Link href={card_link} className={styles.link}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>{card_title}</h1>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.img}
            src={img_url}
            alt="card image"
            width={260}
            height={160}
          />
        </div>
      </div>
    </Link>
  );
};

export default card;
