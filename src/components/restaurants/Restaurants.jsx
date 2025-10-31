import styles from "./Restaurants.module.css";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Restaurants() {
  const { themeColor } = useThemeColorContext();
  return (
    <section
      className={classNames(
        styles.container,
        styles[`container--${themeColor}`]
      )}
    >
      <h2 className={classNames(styles.title, styles[`title--${themeColor}`])}>☆CubaRestaurants☆</h2>
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}
