import { ComponentType } from "react";

/**
 * Returns the HOC wrap component display name for easy debug.
 * @reference https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 * @param WrappedComponent ComponentType<P>
 * @returns string
 */
export function getDisplayName<P>(WrappedComponent: ComponentType<P>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

