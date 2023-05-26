import styles from "/styles/page.module.css";
import Banner from "../components/banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner buttonTitle="View stores nearby" />
      <div className={styles.heroImage}>
        <Image
          src="/static/hero-image.png"
          alt="hero-img"
          width={700}
          height={400}
        />
      </div>
    </main>
  );
}
