import Link from 'next/link'
import { ComponentProps } from 'react'

interface PostCardTitleProps extends ComponentProps<typeof Link> {
  title: string
}

export function PostCardTitle({ title, ...props }: PostCardTitleProps) {
  return (
    <h2 className="px-7 text-xl font-bold uppercase">
      <Link {...props}>{title}</Link>
    </h2>
  )
}
