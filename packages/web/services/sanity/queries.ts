import { groq } from 'next-sanity'

export const postFragment = groq`
  _id,
  title,
  isFeatured,
  slug,
  excerpt,
  "category": category[]->,
  publishedAt,
  mainImage,
  headerImage,
  body,
  openGraph
`

export const jobFragment = groq`
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  headerImage,
  body,
  openGraph
`

export const galleryItemFragment = groq`
  _id,
  title,
  image
`

export const sponsorFragment = groq`
  _id,
  name,
  url,
  category,
  isPartner,
  quoteHeading,
  quoteBody,
  people,
  isHidden,
  image
  `

export const regularPageFragment = groq`
  _id,
  title,
  subtitle,
  slug,
  body,
  openGraph
`

export const courseFragment = groq`
  _id,
  title,
  description,
  subtitle,
  location,
  duration,
  launchDate,
  overview,
  ages,
  slug,
  category->,
  publishedAt,
  mainImage,
  heroImage,
  body,
  openGraph
`

export const departmentFragment = groq`
  _id,
  title,
  description,
  teamMembers[]->
`

export const applyPageFragment = groq`
  _id,
  title,
  subtitle,
  body,
  featuredCourses{
    title,
    description,
    courses[]->{
      ${courseFragment}
    }
  },
  openGraph
`

export const contactPageFragment = groq`
  _id,
  title,
  subtitle,
  body,
  openGraph
`

export const aboutPageFragment = groq`
  _id,
  title,
  subtitle,
  body,
  openGraph
`

export const howWeOperatePageFragment = groq`
  _id,
  title,
  subtitle,
  body,
  openGraph
`

export const teamPageFragment = groq`
  _id,
  title,
  subtitle,
  departments[]->{
    ${departmentFragment}
  },
  body,
  openGraph
`

export const testimonialPageFragment = groq`
  _id,
  title,
  subtitle,
  body,
  openGraph
`

export const getHomePageDataQuery = groq`*[_type == "homePage"][0] {
  _id,
  title,
  subtitle,
  body,
  missionStatement,
  mainCourses[]->,
  featuredCourses{
    title,
    description,
    courses[]->{
      ${courseFragment}
    }
  },
  openGraph
}`

export const getAllSponsorsQuery = groq`*[_type == "sponsor"]{
    ${sponsorFragment}
  }`

export const getAllPostsQuery = groq`*[_type == "post" && hidden == false] | order(publishedAt desc) {
  ${postFragment}
}`

export const getAllJobsQuery = groq`*[_type == "job" && hidden == false] {
  ${jobFragment}
}`

export const getFeaturedPostsQuery = groq`*[_type == "post" && isFeatured == true] | order(publishedAt desc) {
  ${postFragment}
}`

export const getAllCoursesQuery = groq`*[_type == "course" && !(_id in path("drafts.**"))] {
  ${courseFragment}
}`

export const getAllCoursesByCategoryQuery = groq`*[_type == "course" && !(_id in path("drafts.**")) && category->.slug.current == $slug] {
  ${courseFragment}
}`

export const getCourseDataQuery = groq`*[_type == "course" && slug.current == $slug][0] {
  ${courseFragment}
}`

export const getCourseCategoryQuery = groq`*[_type == "courseCategory" && slug.current == $slug][0] {
  slug,
  title,
  subtitle,
  description
}`

export const getAllGalleryItemsQuery = groq`*[_type == "gallery"] {
  ${galleryItemFragment}
}`

export const getGalleryItemsQuery = (
  count: number
) => groq`*[_type == "gallery"][0..${count}] {
  ${galleryItemFragment}
}`

export const getRegularPageDataQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  ${regularPageFragment}
}`

export const getProtectedPageDataQuery = groq`*[_type == "protectedPage" && slug.current == $slug][0] {
  ${regularPageFragment}
}`

export const getApplyPageDataQuery = groq`*[_id == "applyPage"][0] {
  ${applyPageFragment}
}`

export const getContactPageDataQuery = groq`*[_id == "contactPage"][0] {
  ${contactPageFragment}
}`

export const getPostPageDataQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${postFragment}
}`

export const getJobPageDataQuery = groq`*[_type == "job" && slug.current == $slug][0]{
  ${jobFragment}
}`

export const getPostCategoriesQuery = groq`*[_type == "category"]`

export const getAboutPageDataQuery = groq`*[_id == "aboutPage"][0] {
  ${aboutPageFragment}
}`

export const getHowWeOperatePageDataQuery = groq`*[_id == "howWeOperatePage"][0] {
  ${howWeOperatePageFragment}
}`

export const getTeamPageDataQuery = groq`*[_id == "teamPage"][0] {
  ${teamPageFragment}
}`

export const getHomeDataQuery = groq`{
  "home": ${getHomePageDataQuery},
}`

export const getTestimonialPageDataQuery = groq`*[_id == "testimonialPage"][0] {
  ${testimonialPageFragment}
}`
