import * as prismic from '@prismicio/client'
import { RTImageNode, RTParagraphNode, asHTML } from '@prismicio/client'
import { createClient } from '../prismicio'
import { PostDocument } from '../../prismicio-types'

interface GetPostsParams {
  page: number
  queryFilter?: string
}

export async function getPosts(
  params: GetPostsParams = {
    page: 1,
    queryFilter: '',
  },
) {
  const { page, queryFilter } = params
  const client = createClient()

  const { results, total_pages } = await client.get({
    fetch: 'posts',
    pageSize: 10,
    page,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: queryFilter
      ? [prismic.filter.fulltext('document', queryFilter)]
      : undefined,
  })

  const posts = (results as PostDocument[]).map(postMapper)

  return { posts, totalPages: total_pages }
}

function postMapper(post: PostDocument) {
  const assert = post.data.content.find(
    (content) => content.type === 'paragraph' && content.text !== '',
  ) as RTParagraphNode | undefined

  const firstImage = post.data.content.find(
    (content) => content.type === 'image',
  ) as RTImageNode | undefined

  return {
    ...post,
    contentAsHtml: asHTML(post.data.content),
    firstImage,
    assert,
  }
}

