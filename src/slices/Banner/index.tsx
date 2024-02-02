import { Content, asHTML, asText } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  console.log(':slice', slice.primary.content)
  return (
    <section
      className="w-screen px-2 py-10 bg-gradient-to-br text-white from-[#152540] to-[#8c0b66]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-h-[32rem] h-full max-w-[1260px] mx-auto grid grid-cols-2 gap-10 items-center">
        <Image
          className="w-full h-full object-fill"
          src={slice.primary.hero.url ?? ''}
          alt={slice.primary.hero.alt ?? ''}
          width={240}
          height={320}
        />

        <div className="w-full flex flex-col gap-8 py-6">
          <h3 className="font-body text-6xl font-bold">
            {slice.primary.title}
          </h3>

          <div
            className="font-body text-justify mt-2 text-lg flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: asHTML(slice.primary.content),
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
