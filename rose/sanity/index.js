import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: 'z9yda8ce',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

export async function fetchApiWithSanity(query) {
  const response = await client.fetch(query)
  return response
}


 const builder = imageUrlBuilder(client)

export function sanityImageUrlFor(source) {
  return builder.image(source)
}