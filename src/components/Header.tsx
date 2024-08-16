import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <img src="./logo.svg" alt="Imagem de Capa" />
    </header>
  )
}

export default Header;