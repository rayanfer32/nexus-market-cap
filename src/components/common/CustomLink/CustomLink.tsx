import { useRouter } from 'next/router'
import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react'
import { UrlObject } from 'url'

type OptionsType = {
  scroll?: boolean
  shallow?: boolean
  locale?: string
}

interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  as?: UrlObject | string
  options?: OptionsType
  className?: string
  style?: CSSProperties
}

const defaultOptions: OptionsType = {
  scroll: true,
  shallow: false,
}

const CustomLink = ({
  href,
  as,
  options = defaultOptions,
  children,
  ...props
}: CustomLinkProps) => {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href, as, options)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default CustomLink
