import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

interface PostCardLinkProps extends ComponentProps<typeof Link> {
  children: ReactNode
}

export function PostCardLink({ children, ...props }: PostCardLinkProps) {
  return <Link {...props}>{children}</Link>
}
