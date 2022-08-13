import { cls } from '@utils/classnames'
import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  varient?: 'default' | 'outline' | 'ghost'
  className?: string
  placeholder?: string
}

export const Input = (props: InputProps) => {
  const { varient = 'default', className = '' } = props
  return (
    <input
      {...props}
      className={cls(styles.input, styles[varient], className)}
    />
  )
}
