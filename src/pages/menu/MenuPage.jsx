import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import styles from "./MenuPage.module.css";
import DishesContainer from "../../components/dishes/DishesContainer";
import classNames from "classnames";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";

export default function MenuPage() {
  const { restaurantId } = useParams();
  const { themeColor } = useThemeColorContext();
  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div className={styles.container}>
      <h4 className={classNames(styles.title, styles[`title--${themeColor}`])}>
        Menu
      </h4>
      <DishesContainer />
    </div>
  );
}
