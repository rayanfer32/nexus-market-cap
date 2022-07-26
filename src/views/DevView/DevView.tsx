import styles from './devView.module.scss'
import { Children, ReactNode } from 'react'

interface DevViewProps {
  children: ReactNode
}

const DevView = ({ children }: DevViewProps) => {
  return (
    <div>
      <code className={styles.devMarquee}>
        This is visible only in DEV [Goto &#8594; pages/__dev__/index.tsx]
      </code>
      {Children.map(children, (child, index) => {
        return (
          <div key={index} className={styles.devChild}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default DevView
