import A11yNavigation from '@/components/Primitive/A11yNavigation'
import Navigation from '../Navigation'

type Props = {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <A11yNavigation>
        <a href="#content">Jump to main content</a>
        <a href="#navigation">Jump to primary navigation</a>
      </A11yNavigation>
      <Navigation />
      <main id="content" className="flex-auto">
        {children}
      </main>
      <div className="bg-gray-800 min-h-screen" />
    </>
  )
}

export default MainLayout
