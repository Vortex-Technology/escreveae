import { HtmlHTMLAttributes } from 'react'

interface PostCardTagsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  tagName: string
}

export function PostCardTags({ tagName, ...props }: PostCardTagsProps) {
  return <div {...props}>{tagName}</div>
}
