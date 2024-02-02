'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

interface DropDownButtonProps {
  label: string
  items: string[]
}

export function DropDownButton({ label, items }: DropDownButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{label}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-0 flex flex-col gap-1.5 mr-5">
        {items.map((i) => (
          <DropdownMenuItem key={i} asChild>
            <Button className="w-full">{i}</Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
