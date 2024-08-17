import styles from './Header.module.css';

interface HeaderProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function Header({ tasksCreated = 0, tasksCompleted = 0 }: HeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCreated}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>{tasksCompleted}</span>
      </aside>
    </header>
  )
};