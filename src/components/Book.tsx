import Link from 'next/link'
import { BookDocument } from '../../prismicio-types'
import Image from 'next/image'
import { asLink, asText } from '@prismicio/client'
import { ReaderIcon } from '@radix-ui/react-icons'
import { AuthroBookLink } from './AuthorBookLink'

interface BookProps {
  book: BookDocument
}

export function Book({ book }: BookProps) {
  return (
    <section className="grid grid-cols-[3fr_7fr] bg-zinc-200 rounded-lg border border-zinc-300 overflow-hidden shadow-lg shadow-black/10 max-sm:grid-cols-1">
      <div className="w-full">
        <Image
          className="object-cover w-full"
          src={book.data.cover.url ?? ''}
          alt={book.data.title ?? ''}
          width={300}
          height={300}
        />
      </div>

      <div className="w-full h-full px-4 py-2 flex flex-col justify-between gap-3">
        <h4 className="text-sm font-bold">{book.data.title}</h4>

        <article className="text-sm text-justify">
          {asText(book.data.sumary)}
        </article>

        <div className="flex items-center gap-1.5">
          <div className="overflow-hidden rounded-full w-10 h-10">
            <Image
              src={book.data.author_img.url ?? ''}
              alt={book.data.author_img.alt ?? ''}
              width={50}
              height={50}
            />
          </div>

          <span className="font-bold text-sm">{book.data.author}</span>

          {book.data.buttons.map((button) => (
            <AuthroBookLink key={JSON.stringify(button)} link={button} />
          ))}

          <Link
            className="flex items-center gap-0.5 bg-violet-800 rounded-md ml-auto px-3 py-1.5 self-end text-white text-xs hover:bg-violet-900 ease-in-out duration-200"
            href={asLink(book.data.read_more) ?? '#'}
            target="_blank"
          >
            Ler mais <ReaderIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
