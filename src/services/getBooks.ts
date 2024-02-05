import { createClient } from '../prismicio'
import { BookDocument } from '../../prismicio-types'

export async function getBooks(of: 'my_books' | 'studant_books') {
  const client = createClient()

  const { results } = await client.getByTag(of)

  const books = results as BookDocument[]

  return { books }
}

//   const assert = book.data.content.find(
//     (content) => content.type === 'paragraph' && content.text !== '',
//   ) as RTParagraphNode | undefined
//
//   const firstImage = book.data.content.find(
//     (content) => content.type === 'image',
//   ) as RTImageNode | undefined
//
//   return {
//     ...book,
//     contentAsHtml: asHTML(book.data.content),
//     firstImage,
//     assert,
//   }
// }
