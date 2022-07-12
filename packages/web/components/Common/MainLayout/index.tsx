import cn from 'classnames'
import A11yNavigation from '@/components/Primitive/A11yNavigation'
import Navigation from '../Navigation'

type Props = {
  children: React.ReactNode
  className?: string
}

const MainLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <A11yNavigation>
        <a href="#content">Jump to main content</a>
        <a href="#navigation">Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation />
      <main id="content" className={cn('flex-auto mt-14', className)}>
        {children}
      </main>
    </>
  )
}

export default MainLayout
