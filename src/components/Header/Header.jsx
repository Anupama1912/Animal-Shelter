import React from "react";
import Link from 'next/link'
import styles from "./Header.module.css";

// export default function Headerr() {
//   return (
//     <div className={styles.navbar}>
//       <h1> <Link className={styles.text} href="/"><a> CatScout </a></Link> </h1> 
//         <nav className={styles.menu}>
//           <Link href="/"><a> About </a></Link>
//           <Link href="/adopt"><a> Adopt </a></Link>
//           <Link href="/admin"><a> Admin </a></Link>
//         </nav>
//     </div>
//   )
// }
export default function Headerr({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <div className={styles.navbar}>
          <h1> Catscout </h1>
          <nav>
            <Link className = {styles.link} href="/"><a> About </a></Link>
            <Link className = {styles.link} href="/adopt"><a> Adopt </a></Link>
            <Link className = {styles.link} href="/admin"><a> Admin </a></Link>
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
