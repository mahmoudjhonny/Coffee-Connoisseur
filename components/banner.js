import styles from "./banner.module.css";

const banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover Your Local Coffee Shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>{props.buttonTitle}</button>
      </div>
    </div>
  );
};

export default banner;
