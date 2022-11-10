import Form from "Components/Form/Form";
import styles from './NewProject.module.scss';

export default function NewProject(){
  return(
    <section className={styles.boxNewProject}>
      <h1>Criar Projeto</h1>
      <p> Crie seu projeto para depois adicionar os serviços</p>
      <Form btnText="Criar Projeto"/>
    </section>

  );
}