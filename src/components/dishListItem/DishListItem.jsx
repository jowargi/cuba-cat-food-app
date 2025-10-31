import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./DishListItem.module.css";
import classNames from "classnames";

export default function DishListItem({ dishName, ingredients }) {
  const { themeColor } = useThemeColorContext();
  return (
    <li className={styles.item}>
      <h5 className={classNames(styles.title, styles[`title--${themeColor}`])}>{dishName}</h5>
      <p className={styles.ingredients}>{ingredients.join(", ")}</p>
    </li>
  );
}
