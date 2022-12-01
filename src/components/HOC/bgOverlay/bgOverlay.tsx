import { cls } from '@utils/classnames'
import { ComponentType, FC, MouseEventHandler } from 'react'
import { getDisplayName } from '../getDisplayName'
import styles from './bgOverlay.module.scss'

export interface BgOverlayProps {
  showOverlay?: boolean
  onOverlayClick?: MouseEventHandler<HTMLElement>
  className?: string
}

export const bgOverlay = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P & BgOverlayProps> => {
  const _Component = function (props: P & BgOverlayProps) {
    const { showOverlay, onOverlayClick, className = '' } = props

    return (
      <section
        className={cls(
          styles['bg-overlay'],
          showOverlay ? styles.show : styles.hide,
          className
        )}
        onClick={onOverlayClick}
      >
        <WrappedComponent {...(props as P)} />
      </section>
    )
  }
  _Component.displayName = `bgOverlay(${getDisplayName(WrappedComponent)})`
  return _Component
}
