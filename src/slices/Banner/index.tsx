import { Button } from '@/components/ui/button'
import { Content, asHTML } from '@prismicio/client'
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
  return (
    <section
      className="w-screen mt-8 px-6 bg-gradient-to-br text-white from-[#152540] to-[#6F11A2]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-h-[32rem] h-full max-w-[1260px] mx-auto grid grid-cols-2 max-lg:grid-cols-1 max-lg:max-h-[unset] max-sm:gap-2 gap-20 items-center">
        {slice.variation === 'default' && (
          <div className="h-full max-h-[32rem] max-lg:max-h-[30rem] max-lg:max-w-[70%] max-lg:mx-auto max-sm:max-w-[unset] w-full flex items-center justify-center overflow-hidden">
            <Image
              className="object-contain flex w-full"
              src={slice.primary.hero.url ?? ''}
              alt={slice.primary.hero.alt ?? ''}
              width={480}
              height={640}
              quality={100}
              priority
            />
          </div>
        )}

        <div className="w-full flex flex-col gap-8 py-16 max-sm:py-8 max-sm:gap-4">
          <h3 className="font-body text-6xl max-sm:text-4xl font-bold">
            {slice.primary.title}
          </h3>

          <div
            className="font-body text-justify mt-2 flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: asHTML(slice.primary.content),
            }}
          />

          {slice.items && slice.items[0] && (
            <div className="flex flex-col gap-2">
              {slice.items.map((i) => (
                <Button key={i.button} size="sm">
                  {i.button}
                </Button>
              ))}
            </div>
          )}
        </div>

        {slice.variation === 'heroLeft' && (
          <div className="h-full max-h-[32rem] max-lg:max-h-[30rem] max-lg:max-w-[70%] max-lg:mx-auto max-sm:max-w-[unset] w-full flex items-center justify-center overflow-hidden">
            <Image
              className="object-contain flex w-full"
              src={slice.primary.hero.url ?? ''}
              alt={slice.primary.hero.alt ?? ''}
              width={480}
              height={640}
              quality={100}
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Banner
