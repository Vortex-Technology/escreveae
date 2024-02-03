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

      <DropdownMenuContent className="w-36 p-0 flex flex-col mr-5">
        {items.map((i) => (
          <DropdownMenuItem key={i} asChild>
            <Button className="w-full flex justify-end">{i}</Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
