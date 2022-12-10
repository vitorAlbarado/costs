import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'
import logo from '../../assets/img/costs_logo.png'
import Container from "Layout/Container";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
        <Container customClass="">
        <Link to="/"><img src={logo} alt="" /></Link>
        <ul className={styles.navBar__list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
        </Container>
      </nav>
  );
}