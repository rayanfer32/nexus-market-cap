import { cls } from '@utils/classnames'
import { HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.scss'

export interface TextProps
  extends HTMLAttributes<
    HTMLParagraphElement | HTMLHeadingElement | HTMLLabelElement
  > {
  children?: ReactNode
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  text?: string
}

const Text = ({ type = 'p', className = '', ...props }: TextProps) => {
  const Element = type
  return (
    <Element {...props} className={cls(styles.text, className)}>
      {props?.text}
      {props?.children}
    </Element>
  )
}

export default Text
