import { Book } from '@/components/Book'
import { getBooks } from '@/services/getBooks'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Books`.
 */
export type BooksProps = SliceComponentProps<Content.BooksSlice>

/**
 * Component for "Books" Slices.
 */
const Books = async ({ slice }: BooksProps): Promise<JSX.Element> => {
  const { books } = await getBooks(
    slice.variation === 'default' ? 'my_books' : 'studant_books',
  )

  return (
    <div
      className="w-full max-h-[32rem] h-full py-10 px-4 max-w-[1260px] mx-auto grid grid-cols-2 gap-6 max-lg:grid-cols-1"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  )
}

export default Books
