import LinkButton from 'Layout/LinkButton/LinkButton';
import { useEffect, useState } from 'react';
import Button from './Button/Button';
import styles from './Form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';
import ICategories from 'Types/ICategories'

type IProps = {
  btnText: string
}

export default function Form({ btnText }: IProps) {

  const [ProjectName, setProjectName] = useState<string>('');
  const [ProjectBudget, setProjectBudget] = useState<number>(0);
  const [categories, setCategories] = useState<ICategories[]>([]);

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
        console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])
  const mostarDados = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(`Projeto: ${ProjectName} Budget: ${ProjectBudget}`)
  }
  return (

    <form className={styles.form} onSubmit={mostarDados}>

      <Input
        name='name'
        label="Nome do projeto:"
        type="text"
        ph="Insira o nome do projeto"
        value={ProjectName}
        handleSubmit={setProjectName}
      />  
      <Input
        name='budget'
        label="Orçamento do projeto:"
        type="number"
        ph="Insira o orçamento atual"
        value={ProjectBudget}
        handleSubmit={setProjectBudget}
      />
      <Select options={categories} name='category_id' label='Selecione a categoria:' />

      <Button text={btnText} />


    </form>
  );
}