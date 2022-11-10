import LinkButton from 'Layout/LinkButton/LinkButton';
import imgHome from '../../assets/img/savings.svg';
import styles from './Home.module.scss';

export default function Home(){
  return(
    <section className={styles.home}>
      <h1>Bem-vindo ao <strong>Costs</strong></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto"/>
      <img src={imgHome} alt="Imagem da empresa" />
    </section>
  );
}