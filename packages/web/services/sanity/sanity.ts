import { createClient, createPreviewSubscriptionHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import {
  getHomeDataQuery,
  getAllPostsQuery,
  getPostPageDataQuery,
  getAllGalleryItemsQuery,
  getAllSponsorsQuery,
  getGalleryItemsQuery,
  getRegularPageDataQuery,
  getAllCoursesQuery,
  getAboutPageDataQuery,
  getCourseDataQuery,
  getApplyPageDataQuery,
  getContactPageDataQuery,
  getAllCoursesByCategoryQuery,
  getCourseCategoryQuery,
  getPostCategoriesQuery,
  getTestimonialPageDataQuery
} from './queries'
import {
  SanityProjectDetails,
  SanityImageSource
} from '@sanity/image-url/lib/types/types'

const config: SanityProjectDetails = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string
}

export const imageBuilder = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source)
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const client = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : client
export default client

export async function getHomeData(preview: boolean) {
  const data = await getClient(preview).fetch(getHomeDataQuery)

  return data
}

export async function getRecentPosts(preview: boolean) {
  const data = await getClient(preview).fetch(getAllPostsQuery)
  return data
}

export async function getAllPosts(preview: boolean) {
  const data = await getClient(preview).fetch(getAllPostsQuery)
  return data
}

export async function getAllGalleryPosts(preview: boolean) {
  const data = await getClient(preview).fetch(getAllGalleryItemsQuery)
  return data
}

export async function getGalleryPosts(count: number, preview: boolean) {
  const data = await getClient(preview).fetch(getGalleryItemsQuery(count))
  return data
}

export async function getPostPageData(slug: string, preview: boolean) {
  const data = await getClient(preview).fetch(getPostPageDataQuery, {
    slug: slug
  })
  return data
}

export async function getRegularPageData(slug: string, preview: boolean) {
  const data = await getClient(preview).fetch(getRegularPageDataQuery, {
    slug: slug
  })
  return data
}

export async function getApplyPageData(preview: boolean) {
  const data = await getClient(preview).fetch(getApplyPageDataQuery)
  return data
}

export async function getContactPageData(preview: boolean) {
  const data = await getClient(preview).fetch(getContactPageDataQuery)
  return data
}

export async function getAllCourses(preview: boolean) {
  const data = await getClient(preview).fetch(getAllCoursesQuery)
  return data
}

export async function getAllCoursesByCategory(slug: string, preview: boolean) {
  const data = await getClient(preview).fetch(getAllCoursesByCategoryQuery, {
    slug
  })
  return data
}

export async function getCourseCategory(slug: string, preview: boolean) {
  const data = await getClient(preview).fetch(getCourseCategoryQuery, {
    slug
  })
  return data
}

export async function getAllPostCategories(preview: boolean) {
  const data = await getClient(preview).fetch(getPostCategoriesQuery)
  return data
}

export async function getCourseData(slug: string, preview: boolean) {
  const data = await getClient(preview).fetch(getCourseDataQuery, {
    slug: slug
  })
  return data
}

export async function getAllSponsors(preview: boolean) {
  const data = await getClient(preview).fetch(getAllSponsorsQuery)
  return data
}

export async function getAboutPageData(preview: boolean) {
  const data = await getClient(preview).fetch(getAboutPageDataQuery)
  return data
}

export async function getAllTestimonialData(preview: boolean) {
  const data = await getClient(preview).fetch(getTestimonialPageDataQuery)
  return data
}
