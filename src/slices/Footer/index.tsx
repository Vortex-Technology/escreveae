import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>

/**
 * Component for "Footer" Slices.
 */
const Footer = ({ slice }: FooterProps): JSX.Element => {
  return (
    <footer
      className="w-full flex justify-between items-center h-16 bg-gray-100 px-6 py-1.5 data-[slice-variation='fixed']:fixed data-[slice-variation='fixed']:bottom-0"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span className="text-sm font-bold opacity-70">
        {slice.primary.copyright}
      </span>
    </footer>
  )
}

export default Footer
