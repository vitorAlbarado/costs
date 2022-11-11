import styles from './Input.module.scss';

type IProps = {
  label:string,
  type:string
  ph:string,
  name:string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({label, type, ph, name,  handleChange}:IProps){
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={ph} onChange={handleChange} />
    </div>
  );
}