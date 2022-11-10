import { Link } from "react-router-dom";
import styles from './LinkButton.module.scss';

type IProps = {
  to:string,
  text:string
}
export default function LinkButton({to, text}:IProps){
  return(
    <Link className={styles.link} to={to}>{text}</Link >
  );
}