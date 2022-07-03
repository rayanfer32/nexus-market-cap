import { InputHTMLAttributes } from 'react'
// import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  varient?: 'default' | 'outline' | 'ghost'
}

export const Input = (props: InputProps) => {
  return <input {...props} />
}
