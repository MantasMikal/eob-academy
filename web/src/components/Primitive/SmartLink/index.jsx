import React from 'react'
import { func, node, oneOf, string } from 'prop-types'
import { Link } from 'gatsby'

const SmartLink = ({ children, className, href, setRef, to, target, type, ...other }) => {
  // Standard link, use an `anchor` element
  if (href) {
    return (
      <a
        className={className}
        href={href}
        ref={setRef}
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
      <Link to={to} ref={setRef} className={className} {...other}>
        {children}
      </Link>
    )
  }

  // No `href` or `to` means we need a `button` element
  return (
    <button className={className} type={type} ref={setRef} {...other}>
      {children}
    </button>
  )
}

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  children: node.isRequired,
  className: string,
  href: string,
  setRef: func,
  to: string,
  target: string,
  type: oneOf(['button', 'reset', 'submit'])
}

export default SmartLink
