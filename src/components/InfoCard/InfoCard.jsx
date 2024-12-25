import styles from "./InfoCard.module.css";
import clsx from "clsx";
import toUpperCaseFirstChar from "../../Helpers/toUpperCaseFirstChar";

function InfoCard({ title, timeframe }) {
  const titleChecked = title != "Self Care" ? title : "health";

  const svgIconPath = `/icons.svg#icon-${titleChecked.toLowerCase()}`;
  const dynamicColorCaption = clsx(
    styles.infoCard__colorCaption,
    styles[`is${toUpperCaseFirstChar(titleChecked)}`]
  );
  const time = timeframe.current;
  const lastWeek = timeframe.previous;

  return (
    <article className={styles.infoCard}>
      <div className={dynamicColorCaption}>
        <svg width="78" height="78">
          <use href={svgIconPath}></use>
        </svg>
      </div>

      <div className={styles.infoCard__content}>
        <header className={styles.infoCard__header}>
          <h3 className={styles.infoCard__title}>
            {toUpperCaseFirstChar(title)}
          </h3>
          {/*NEED MENU <button type="button" className={styles.infoCard__headerBtn}>
            <svg width="21" height="5">
              <use href="/public/icons.svg#icon-kebab-btn"></use>
            </svg>
          </button> */}
        </header>
        <section className={styles.infoCard__data}>
          <p className={styles.infoCard__time}>{`${time}hrs`}</p>
          <p
            className={styles.infoCard__detail}
          >{`Last Week - ${lastWeek}hrs`}</p>
        </section>
      </div>
    </article>
  );
}

export default InfoCard;
