import { cls } from '@utils/classnames'
import { useOnClickOutside } from '@utils/hooks'
import { MouseEvent, ReactNode, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import styles from './Dropdown.module.scss'

export type DropdownType = 'elevated' | 'flat'

export interface DropdownProps {
  type?: DropdownType
  children: ReactNode
  className?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: MouseEvent<HTMLElement>) => void
}

export const Dropdown = (props: DropdownProps) => {
  const { children, className = '', type = '' } = props
  const ref = useRef<HTMLDivElement>(null)
  const [isDropdownShow, toggleDropdown] = useState(false)
  useOnClickOutside(ref, () => toggleDropdown(false))

  return (
    <div className={cls(styles.wrapper, className)} ref={ref}>
      <div
        className={cls(
          styles.header,
          styles[type],
          isDropdownShow && styles.active
        )}
        onClick={() => toggleDropdown((v) => !v)}
      >
        <>Dropdown</>
        <BsChevronDown
          className={cls(styles.icon, isDropdownShow && styles.active)}
          color="inherit"
        />
      </div>
      <div
        className={cls(
          styles.body,
          styles[type],
          isDropdownShow && styles.active
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
