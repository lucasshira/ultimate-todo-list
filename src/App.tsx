import { PlusCircle } from "phosphor-react";

import Header from "./components/Header"
import Input from "./components/Input"
import { Header as ListHeader } from "./components/List/Header";

import styles from './App.module.css';
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} weight="bold" color="#f2f2f2" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />
        </div>
      </section>
    </main>
  )
}

export default App
