import ICategories from 'Types/ICategories';
import styles from './Select.module.scss';
type IProps = {
  label?:string,
  name?:string,
  options?:ICategories[],
  handleSubmit?:any,
  value?:string
}

export default function Select ({label, name, options, handleSubmit, value}:IProps){
  return (
    <div className={styles.select}>
      <label htmlFor={name}>{label}</label>
      <select value={value} name={name} id={name}>
        <option >Selecione uma opção:</option>
        {options?.map((item, index) => <option key={item.id} value={item.id}>{item.name}</option> )}
      </select></div>
  );
}