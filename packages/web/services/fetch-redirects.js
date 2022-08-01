const { createClient } = require('next-sanity')
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
}

const client = createClient(config)

async function fetchSanityRedirects() {
  const data = await client.fetch(
    `*[_type == "redirect"]{ from, to, permanent }`
  )

  const redirects = data.map((redirect) => {
    return {
      source: `${redirect.from}`,
      destination: `${redirect.to}`,
      permanent: redirect.permanent
    }
  })

  return redirects
}

module.exports = {
  fetchSanityRedirects
}
