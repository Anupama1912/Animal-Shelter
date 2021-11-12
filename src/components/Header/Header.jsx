import React from "react";
import clsx from "clsx";
// import PropTypes from "prop-types";
// import NavLink from "../NavLink";
// import routes from "./routes";
import styles from "./Header.module.css";
import Link from 'next/link'

// const Header = ({ loggedIn, currentRoute }) => (
//   <div className={styles.root}>
//     {routes
//       .filter((route) => (loggedIn && route.auth) || (!loggedIn && !route.auth))
//       .map(({ name, link, atEnd }) => (
//         <NavLink href={link} key={name}>
//           <div
//             className={clsx(
//               atEnd ? styles.endRoute : styles.route,
//               currentRoute === link && styles.selected
//             )}
//           >
//             {name}
//           </div>
//         </NavLink>
//       ))}
//   </div>
// );

// Header.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
//   currentRoute: PropTypes.string.isRequired,
// };
export default function Header({children}) {
  return (
    <div className={styles.root}>
      <header>
        <div className={clsx(
              styles.route
            )}>
          <nav>
            <Link href="/"><a> About </a></Link>
            <Link href="/adopt"><a> Adopt </a></Link>
            <Link href="/admain"><a> Admain </a></Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}
