import Form from "Components/Form/Form";
import IProjects from "Types/IProjects";
import styles from './NewProject.module.scss';
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  let navigate = useNavigate();
  const createProject = (project: IProjects) => {

    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => navigate('/projects'))
      .catch((error) => console.log(error))

  }

  return (
    <section className={styles.boxNewProject}>
      <h1>Criar Projeto</h1>
      <p> Crie seu projeto para depois adicionar os serviços</p>
      <Form
        btnText="Criar Projeto"
        createProject={createProject}
      />
    </section>

  );
}