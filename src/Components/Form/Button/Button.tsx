import styles from './Button.module.scss';

type IProps ={
  text:string
}
export default function Button ({text}:IProps){
  return(
    <button className={styles.btn}>{text}</button>
  );
}