import { cls } from '@utils/classnames'
import { useOnClickOutside } from '@utils/hooks'
import {
  Children,
  cloneElement,
  CSSProperties,
  isValidElement,
  MouseEvent,
  ReactNode,
  useRef,
  useState,
} from 'react'
import { BsChevronDown } from 'react-icons/bs'
import styles from './Dropdown.module.scss'

export type DropdownType = 'elevated' | 'flat'

export interface DropdownProps {
  header?: ReactNode
  type?: DropdownType
  children: ReactNode
  className?: string
  width?: string
  height?: string
  headerWidth?: string
}

export const Dropdown = (props: DropdownProps) => {
  const {
    children,
    className = '',
    header,
    type = '',
    width,
    height,
    headerWidth,
  } = props
  const ref = useRef<HTMLDivElement>(null)
  const [isDropdownShow, toggleDropdown] = useState(false)

  useOnClickOutside(ref, () => toggleDropdown(false))

  const style = {
    '--width': width,
    '--height': height,
    '--header-width': headerWidth,
  } as CSSProperties

  return (
    <div className={cls(styles.wrapper, className)} ref={ref} style={style}>
      <button
        className={cls(
          styles.header,
          styles[type],
          isDropdownShow && styles.active
        )}
        onClick={() => toggleDropdown((v) => !v)}
      >
        <>{header}</>
        <BsChevronDown
          className={cls(styles.icon, isDropdownShow && styles.active)}
          color="inherit"
        />
      </button>
      <div
        className={cls(
          styles.body,
          styles[type],
          isDropdownShow && styles.active
        )}
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              onClick: (e: MouseEvent | any) => {
                toggleDropdown(false)
                if (child.props.onClick) {
                  child.props.onClick(e)
                }
              },
            })
          }
          return child
        })}
      </div>
    </div>
  )
}

export default Dropdown
