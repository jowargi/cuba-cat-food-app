import { NavLink } from "react-router-dom";
import styles from "./RouterLink.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function RouterLink({ children, to, style }) {
  const { themeColor } = useThemeColorContext();
  return (
    <NavLink
      to={to}
      style={style}
      className={({ isActive }) =>
        classNames(
          styles.link,
          styles[`link--${isActive ? "active" : "disabled"}--${themeColor}`]
        )
      }
    >
      {children}
    </NavLink>
  );
}
