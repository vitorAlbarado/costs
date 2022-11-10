import {FaFacebook,FaInstagram,FaLinkedin,FaRegCopyright} from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a href="#">
          <FaFacebook/>
        </a>
        <a href="#">
          <FaInstagram/>
        </a>
        <a href="#">
          <FaLinkedin/>
        </a>
      </div>
      <p> <span className={styles.footer__copy}>Costs</span> &copy; 2021</p>
    </footer>
  );
}