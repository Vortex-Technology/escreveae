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
  console.log(':slice', slice.primary.content)
  return (
    <section
      className="w-screen mt-8 px-2 bg-gradient-to-br text-white from-[#152540] to-[#6F11A2]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full max-h-[32rem] h-full max-w-[1260px] mx-auto grid grid-cols-2 gap-20 items-center">
        {slice.variation === 'default' && (
          <div className="h-full max-h-[32rem] w-full flex items-center justify-center overflow-hidden">
            <Image
              className="object-contain flex w-full "
              src={slice.primary.hero.url ?? ''}
              alt={slice.primary.hero.alt ?? ''}
              width={480}
              height={640}
              quality={100}
              priority
            />
          </div>
        )}

        <div className="w-full flex flex-col gap-8 py-16">
          <h3 className="font-body text-6xl font-bold">
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
          <div className="h-full max-h-[32rem] w-full flex items-center justify-center overflow-hidden">
            <Image
              className="object-contain flex w-full "
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
