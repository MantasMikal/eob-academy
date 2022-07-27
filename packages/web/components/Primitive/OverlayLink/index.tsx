import cn from 'classnames'
import SmartLink, { SmartLinkProps } from '../SmartLink'

interface OverlayLinkProps extends SmartLinkProps {
  debug?: any
  className?: string
}
const OverlayLink: React.FC<OverlayLinkProps> = ({
  children,
  debug,
  className,
  ...rest
}) => (
  <SmartLink
    className={cn(
      'text-inherit decoration-inherit after:absolute after:inset-0',
      className,
      debug && 'opacity-40 bg-amber-200'
    )}
    {...rest}
  >
    {children}
  </SmartLink>
)
export default OverlayLink
