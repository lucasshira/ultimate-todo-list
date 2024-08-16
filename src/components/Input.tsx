import styles from './Input.module.css';

function Input() {
  return (
      <input className={styles.container} type="text" placeholder="Adicione uma nova tarefa" />
  )
}

export default Input;