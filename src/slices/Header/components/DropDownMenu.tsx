'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { KeyTextField } from '@prismicio/client'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { HeaderLink } from './HeaderLink'

interface DropDownMenuProps {
  buttons: KeyTextField[]
}

export function DropDownMenu({ buttons }: DropDownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-md w-7 h-7 p-0.5 sm:hidden">
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-screen bg-zinc-50 flex flex-col">
        {buttons.map((button) => {
          const items = button?.split(',') ?? []
          const isManyItems = items.length > 1

          if (isManyItems) {
            return (
              <DropdownMenuGroup key={button}>
                <DropdownMenuLabel className="w-full font-bold uppercase opacity-70 text-center underline">
                  {items[0]}
                </DropdownMenuLabel>

                {items.slice(1).map((item) => (
                  <HeaderLink
                    pattern={item}
                    key={item}
                    className="w-full rounded-none"
                  />
                ))}
              </DropdownMenuGroup>
            )
          }

          return (
            <HeaderLink
              pattern={button as string}
              key={button}
              className="w-full rounded-none"
            />
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
