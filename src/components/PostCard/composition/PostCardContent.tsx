import { HtmlHTMLAttributes, ReactNode } from 'react'

interface PostCardContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function PostCardContent({ children, ...props }: PostCardContentProps) {
  return <div {...props}>{children}</div>
}
