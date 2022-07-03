import { ButtonHTMLAttributes } from 'react'
// import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'default' | 'outline' | 'ghost'
}

export const Button = (props: ButtonProps) => {
  return <button {...props}>{props.children}</button>
}
