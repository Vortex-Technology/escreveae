import { Content, asLink } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'

/**
 * Props for `ContactButton`.
 */
export type ContactButtonProps = SliceComponentProps<Content.ContactButtonSlice>

/**
 * Component for "ContactButton" Slices.
 */
const ContactButton = ({ slice }: ContactButtonProps): JSX.Element => {
  const Icon = (
    LucideIcons as unknown as { [k: string]: LucideIcons.LucideIcon }
  )[`${slice.primary.icon}`]
  return (
    <div
      className="flex items-center justify-center h-screen max-h-12 mb-4"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Link
        href={asLink(slice.primary.link) ?? '#'}
        className="w-full max-w-[680px] py-2 text-white rounded-full bg-violet-800 flex items-center justify-center gap-3 font-bold text-lg opacity-95 hover:opacity-100 ease-in-out duration-200"
      >
        <Icon size={20} />
        {slice.primary.label}
      </Link>
    </div>
  )
}

export default ContactButton
