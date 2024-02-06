'use client'

import { PostCard } from '@/components/PostCard'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-wrap justify-center gap-7 p-5">
              <PostCard.Root
                key={index}
                className="bg-slate-100 rounded-lg shadow-lg overflow-hidden"
              >
                <PostCard.Card className="w-full md:w-96 xl:w-96 relative">
                  <PostCard.Tag
                    tagName="Youtube"
                    className="absolute left-2 top-2 bg-fuchsia-900 px-2 text-white text-sm rounded-full"
                  />
                  <PostCard.Content className="flex flex-col justify-center gap-5">
                    <PostCard.CardLink href="/blog">
                      <PostCard.Thumbnail
                        src={
                          'https://escreveaiblog.com/wp-content/uploads/2023/06/hqdefault.jpg'
                        }
                        width={1920}
                        height={1080}
                        alt={''}
                      />
                    </PostCard.CardLink>
                    <PostCard.Title title="Titulo legal" href="/blog" />
                    <PostCard.Paragraph text="Mussum Ipsum, cacilds vidis litro abertis.  Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss deixa as pessoas mais interessantis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!" />
                  </PostCard.Content>
                  <PostCard.Metadata text="maio 19, 2023 12:32 am " />
                </PostCard.Card>
              </PostCard.Root>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel
