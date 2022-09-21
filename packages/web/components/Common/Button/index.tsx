import SmartLink, { SmartLinkProps } from '@/components/Primitive/SmartLink'
import cn from 'classnames'
import React from 'react'

interface IButton extends SmartLinkProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'outline' | 'secondary'
  href?: string
  rounded?: boolean
  children: React.ReactNode
  className?: string
}

const sizeMap = {
  small: 'px-3 py-1.5 text-base',
  medium: 'px-3 py-2 text-lg',
  large: 'px-5 py-3 lg:px-6 lg:py-3 text-2xl border-2'
}

const variantMap = {
  primary: 'bg-secondary hover:bg-primary-light text-white',
  secondary: 'bg-tertiary hover:bg-tertiary-light text-white',
  outline: 'border border-secondary text-secondary bg-white hover:bg-gray-50'
}

function Button({
  size = 'medium',
  variant = 'primary',
  href,
  children,
  className
}: IButton) {
  const classNames = cn(sizeMap[size], variantMap[variant])
  return (
    <SmartLink
      href={href && href}
      className={cn(
        'rounded inline-flex items-center justify-center shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-101 active:scale-98 transition-all',
        classNames,
        className
      )}
    >
      {children}
    </SmartLink>
  )
}

export default Button
