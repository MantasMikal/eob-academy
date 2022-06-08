import SmartLink, { SmartLinkProps } from '@/components/Primitive/SmartLink'
import cn from 'classnames'
import React from 'react'

interface IButton extends SmartLinkProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'outline'
  rounded?: boolean
  children: React.ReactNode
  className?: string
}

const sizeMap = {
  small: 'px-3 py-1.5 text-base',
  medium: 'px-3 py-2 text-lg',
  large: 'px-4 py-3 text-lg'
}

const variantMap = {
  primary: 'bg-primary-white hover:bg-primary-light',
  outline: 'border border-secondary text-secondary bg-white hover:bg-gray-50'
}

function Button({
  size = 'medium',
  variant = 'primary',
  children,
  className
}: IButton) {
  const classNames = cn(sizeMap[size], variantMap[variant])
  return (
    <SmartLink
      className={cn(
        'inline-flex items-center shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tertiary ',
        classNames,
        className
      )}
    >
      {children}
    </SmartLink>
  )
}

export default Button
