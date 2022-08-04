import Logger from '@utils/customLog'
import { JSXElementConstructor, ReactElement } from 'react'
import Text, { TextProps } from '../Text'

interface IconTextProps extends TextProps {
  icon?: string | ReactElement<any, string | JSXElementConstructor<any>>
  iconPosition?: 'left' | 'right'
}

const IconText = (props: IconTextProps) => {
  const Icon = props.icon
  Logger.log('IconText', Icon, typeof Icon)
  return (
    <div onClick={props?.onClick}>
      {props?.iconPosition !== 'right' && props.icon}
      <Text {...props} />
      {props?.iconPosition === 'right' && props.icon}
    </div>
  )
}

export default IconText
