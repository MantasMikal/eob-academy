import Link from 'next/link'

export interface SmartLinkProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  href?: string
  to?: string
  prefetch?: boolean
  target?: string
  setRef?: any
  type?: 'button' | 'reset' | 'submit'
}

/**
 * SmartLink can be used in place of any clickable element and will output
 * the correct HTML element for the props provided to it.

 * At a basic level, it will output:
 * - \`<a />\` if passed an \`href\`
 * - \`<Link />\` if passed a \`to\` (needs enabling once a router component is enabled)
 * - \`<button />\` if passed a \`type\` or \`onClick\`.

 * It will also embellish output as required, for example automatically
 * adding \`rel="noopener noreferrer"\` to any link with \`target="_blank"\`.
 */
const SmartLink: React.FC<SmartLinkProps> = ({
  children,
  className,
  disabled,
  href,
  setRef,
  to,
  target,
  prefetch,
  type = 'button',
  ...other
}) => {
  // Standard link, use an `anchor` element
  if (href) {
    return (
      <a
        className={className}
        ref={setRef}
        {...(!disabled && { href })}
        {...(disabled && { 'aria-disabled': 'true' })}
        {...(target && { target })}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
        {...other}
      >
        {children}
      </a>
    )
  }

  // Internal link, use third-party `Link` component from router module
  if (to) {
    return (
      <Link {...(prefetch && { prefetch })} href={to} {...other}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={className}>{children}</a>
      </Link>
    )
  }

  // No `href` or `to` means we need a `button` element
  return (
    <button
      className={className}
      type={type}
      ref={setRef}
      {...(disabled && { disabled })}
      {...other}
    >
      {children}
    </button>
  )
}

export default SmartLink
