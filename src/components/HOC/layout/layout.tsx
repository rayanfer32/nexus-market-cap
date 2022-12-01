import Layout from '@views/Layout'
import { ComponentType } from 'react'
import { getDisplayName } from '../getDisplayName'

export const layout = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const _Component = function (props: P) {
    return (
      <Layout>
        <WrappedComponent {...(props as P)} />
      </Layout>
    )
  }
  _Component.displayName = `layout(${getDisplayName(WrappedComponent)})`
  return _Component
}
