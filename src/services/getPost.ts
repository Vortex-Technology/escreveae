import { asHTML } from '@prismicio/client'
import { createClient } from '../prismicio'

export async function getPost(uid: string) {
  const client = createClient()
  const postsReceived = await client.getByUID('post', uid)

  const post = {
    ...postsReceived,
    contentAsHtml: asHTML(postsReceived.data.content),
  }

  return post
}