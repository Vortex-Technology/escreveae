'use client'
import { asLink } from '@prismicio/client'
import Link from 'next/link'
import { BookDocumentDataButtonsItem, Simplify } from '../../prismicio-types'
import * as LucideIcons from 'lucide-react'

interface AuthroBookLinkProps {
  link: Simplify<BookDocumentDataButtonsItem>
}

export function AuthroBookLink({ link }: AuthroBookLinkProps) {
  const Icon =
    (LucideIcons as unknown as { [k: string]: LucideIcons.LucideIcon })[
    `${link.icon}`
    ] ?? LucideIcons.Link

  return (
    <Link
      style={{
        background: link.color ?? '#121214',
      }}
      className={`p-1 rounded-lg font-bold text-white `}
      key={asLink(link.url)}
      href={asLink(link.url) ?? '#'}
      target="_blank"
    >
      <Icon size={16} />
    </Link>
  )
}
