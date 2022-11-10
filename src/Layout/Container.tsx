import Home from 'Pages/Home/Home';
import { Outlet } from 'react-router-dom';
import styles from './Container.module.scss';
type props ={
  customClass:string,
  children: JSX.Element | JSX.Element[] | React.ReactElement | null
}

export default function Container({customClass,children}:props){
  return(
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}