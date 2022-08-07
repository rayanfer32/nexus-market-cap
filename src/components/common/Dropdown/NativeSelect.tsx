import { cls } from '@utils/classnames'
import { CSSProperties, SelectHTMLAttributes } from 'react'
import styles from './Dropdown.module.scss'

export interface NativeSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  data: any[]
  width?: string
  height?: string
  headerWidth?: string
}

export const NativeSelect = (props: NativeSelectProps) => {
  const { data = [], className = '', width, height, headerWidth } = props
  const style = {
    '--width': width,
    '--height': height,
    '--header-width': headerWidth,
  } as CSSProperties

  return (
    <select
      className={cls(styles.wrapper, styles.header, styles.flat, className)}
      style={style}
      {...props}
    >
      {data.map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
