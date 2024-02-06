import { HtmlHTMLAttributes, ReactNode } from 'react'

interface PostCardBoxProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function PostCardBox({ children, ...props }: PostCardBoxProps) {
  return <div {...props}>{children}</div>
}
