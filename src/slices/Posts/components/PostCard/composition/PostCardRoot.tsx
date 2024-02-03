import { HtmlHTMLAttributes, ReactNode } from 'react'

interface PostCardRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function PostCardRoot({ children, ...props }: PostCardRootProps) {
  return <article {...props}>{children}</article>
}
