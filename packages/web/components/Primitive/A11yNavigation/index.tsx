import styles from './Ay11Navigation.module.css'
/**
 * Allows users navigating using a keyboard or other assistive technology
 * to quickly skip to pre-defined areas of the page. As a minimum, this
 * would likely consist of links to the pages main content area, and
 *  primary site navigation, but may include secondary content or
 * navigations as required.
 *
 * Note: A11yNavigation is hidden by default, so click into the preview
 * area and press \`TAB\` to view. Additional content is shown in some
 * previews to illustrate that links need to have appropriate targets.
 */

type Props = {
  children: React.ReactNode
}

const A11yNavigation: React.FC<Props> = ({ children }) => (
  <div className={styles.A11yNavigation}>{children}</div>
)

export default A11yNavigation
