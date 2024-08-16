import styles from './Button.module.css';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type="submit" className={styles.container} {...rest}>
      {children}
    </button>
  )
}

export default Button;