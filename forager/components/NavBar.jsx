import Link from 'next/link';
import { FaHome, FaCamera } from 'react-icons/fa'; 
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar({ hidden = false }) {
  return (
    <div className={`${styles.navbar} ${hidden ? styles.hidden : ""}`}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <FaCamera />  
        </div>
      </Link>
    </div>
  );
}
