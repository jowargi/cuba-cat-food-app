import { useParams } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api/reviews/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import styles from "./ReviewsPage.module.css";
import ReviewsContainer from "../../components/reviews/ReviewsContainer";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function ReviewsPage() {
  const {themeColor} = useThemeColorContext();
  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div className={styles.container}>
      <h4 className={classNames(styles.title, styles[`title--${themeColor}`])}>Reviews</h4>
      <ReviewsContainer />
    </div>
  );
}
