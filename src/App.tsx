import { PlusCircle } from "phosphor-react";

import Header from "./components/Header"
import Input from "./components/Input"
import { Header as ListHeader } from "./components/List/Header";

import styles from './App.module.css';
import Button from "./components/Button";
import Empty from "./components/List/Empty";
import { useState } from "react";
import Item from "./components/List/Item";

export type ITask = {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) return prevValue + 1;
    
    return prevValue;
  }, 0);

  const handleAddTask = () => {
    if (!inputValue) return;

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((prev) => [...prev, newTask]);
    setInputValue('');
  };

  const handleRemoveTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  const handleToggleTask = ({ id, value }: { id: number; value: boolean }) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks);
  };

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue ? inputValue : ''}
          />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} weight="bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCreated={tasks.length}
            tasksCompleted={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map(task => (
                <Item
                  key={task.id}
                  data={task}
                  toggleTaskStatus={handleToggleTask}
                  removeTask={handleRemoveTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
