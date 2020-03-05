import NavigationWrapper from './component/NavigationWrapper'
import NavigationItem from './component/NavigationItem'

const Navigation = NavigationWrapper
Navigation.displayName = 'Navigation'

Navigation.Item = NavigationItem
Navigation.Item.displayName = 'Navigation.Item'

export default Navigation
