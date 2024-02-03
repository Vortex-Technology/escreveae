'use client'
import { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderLinkProps extends ComponentProps<typeof Button> {
  pattern: string
}
export function HeaderLink({ pattern, ...props }: HeaderLinkProps) {
  const pathname = usePathname()
  const label = pattern.split('.')[0]
  const path = pattern.split('.')[1]

  return (
    <Link href={path}>
      <Button disabled={path === pathname} {...props}>
        {label}
      </Button>
    </Link>
  )
}
