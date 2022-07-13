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

export const galleryItemFragment = groq`
  _id,
  title,
  image
`

export const sponsorFragment = groq`
  _id,
  name,
  url,
  isPartner,
  quoteHeading,
  quoteBody,
  people,
  image
  `

export const regularPageFragment = groq`
  _id,
  title,
  body,
  openGraph
`

export const courseFragment = groq`
  _id,
  title,
  subtitle,
  location,
  duration,
  launchDate,
  overview,
  ages,
  slug,
  category,
  publishedAt,
  excerpt,
  mainImage,
  openGraph
`

export const getHomePageDataQuery = groq`*[_type == "homePage"][0] {
  _id,
  title,
  subtitle,
  openGraph
}`

export const getAllSponsorsQuery = groq`*[_type == "sponsor"]{
    ${sponsorFragment}
  }`

export const getAllPostsQuery = groq`*[_type == "post"] {
  ${postFragment}
}`

export const getAllCoursesQuery = groq`*[_type == "course"] {
  ${courseFragment}
}`

export const getCourseDataQuery = groq`*[_type == "course" && slug.current == $slug][0] {
  ${courseFragment}
}`

export const getAllGalleryItemsQuery = groq`*[_type == "gallery"] {
  ${galleryItemFragment}
}`

export const getGalleryItemsQuery = (
  count: number
) => groq`*[_type == "gallery"][0..${count}] {
  ${galleryItemFragment}
}`

export const getRegularPageDataQuery = groq`*[_id  == $id][0] {
  ${regularPageFragment}
}`

export const getPostPageDataQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${postFragment}
}`

export const getHomeDataQuery = groq`{
  "home": ${getHomePageDataQuery},
}`
