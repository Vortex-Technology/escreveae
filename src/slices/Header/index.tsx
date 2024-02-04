import Image from 'next/image'
import { Content, asText } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { DropDownButton } from './components/DropDownButton'
import { HeaderLink } from './components/HeaderLink'

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <header
      className="w-full fixed flex justify-between h-16 bg-gray-100 px-6 py-1.5 shadow-black/30 shadow-lg top-0"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-2">
        <Image
          className="h-full object-contain w-auto"
          src={slice.primary.logo.url ?? ''}
          alt={slice.primary.logo.alt ?? ''}
          width={420}
          height={360}
        />

        {slice.primary.name.length > 0 && (
          <p className="font-body text-xl ">
            {asText(slice.primary.name).toUpperCase()}
          </p>
        )}
      </div>

      <nav className="flex items-center ">
        <ul className="flex gap-3">
          {slice.items.map(({ button }) => {
            const items = button?.split(',') ?? []
            const isDropDownButton = items.length > 1

            if (isDropDownButton) {
              return (
                <li key={button}>
                  <DropDownButton label={items[0]} items={items.slice(1)} />
                </li>
              )
            }

            return (
              <li key={button}>
                <HeaderLink pattern={button as string} />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
