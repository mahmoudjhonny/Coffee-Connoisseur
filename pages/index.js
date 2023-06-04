import styles from "/styles/page.module.css";
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Banner buttonTitle="View stores nearby" />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            alt="hero-img"
            width={700}
            height={400}
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Card
          card_link="/"
          img_url="/static/hero-image.png"
          card_title="Mahmoud Mostafa"
        />
      </div>
    </main>
  );
}
