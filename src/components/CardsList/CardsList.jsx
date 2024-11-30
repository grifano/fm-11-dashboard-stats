import styles from "./CardsList.module.css";
import dataSrc from "../../data.json";
import InfoCard from "../InfoCard/InfoCard";

function CardsList({ forData }) {
  return (
    <ul className={styles.cardsList}>
      {dataSrc.map((item) => {
        return (
          <li key={item.title}>
            <InfoCard title={item.title} timeframe={item.timeframes[forData]} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardsList;
