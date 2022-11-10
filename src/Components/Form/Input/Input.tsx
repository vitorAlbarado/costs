import styles from './Input.module.scss';
type IProps = {
  label:string,
  type:string
  ph:string,
  name:string,
  value:string | number,
  handleSubmit:React.Dispatch<React.SetStateAction<any>>
}
export default function Input({label, type, ph, name, value, handleSubmit}:IProps){
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={ph} value={value} onChange={(e)=>handleSubmit(e.target.value)} />
    </div>
  );
}