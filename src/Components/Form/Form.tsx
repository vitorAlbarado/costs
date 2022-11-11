import { useEffect, useState } from 'react';
import ICategories from 'Types/ICategories';
import IProjects from 'Types/IProjects';
import Button from './Button/Button';
import styles from './Form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';

type IProps = {
  btnText: string,
  createProject: (project: IProjects) => void,
  projectData?:any
}

export default function Form({ btnText, createProject,projectData}: IProps) {

  const [categories, setCategories] = useState<ICategories[]>([]);
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error))
  }, [])
  
  const submit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    createProject(project)
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setProject({...project,[e.target.name]:e.target.value})
  }

  const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setProject({...project, category:{
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    }})
  }

  return (

    <form className={styles.form} onSubmit={submit}>

      <Input
        name='name'
        label="Nome do projeto:"
        type="text"
        ph="Insira o nome do projeto"
        handleChange={handleChange}
      />  
      <Input
        name='budget'
        label="Orçamento do projeto:"
        type="number"
        ph="Insira o orçamento atual"
        handleChange={handleChange}
      />
      <Select 
      options={categories} 
      name='category_id' 
      label='Selecione a categoria:' 
      handleSelect={handleSelect}
      value={project.category ? project.category.id:''}
      />

      <Button text={btnText} />


    </form>
  );
}