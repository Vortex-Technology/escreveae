'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { HeaderLink } from './HeaderLink'
import { ChevronDown } from 'lucide-react'

interface DropDownButtonProps {
  label: string
  items: string[]
}

export function DropDownButton({ label, items }: DropDownButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-1.5 items-center">
          {label} <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-36 p-0 flex flex-col mr-5">
        {items.map((i) => (
          <DropdownMenuItem key={i} asChild>
            <HeaderLink className="w-full flex justify-end" pattern={i} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
