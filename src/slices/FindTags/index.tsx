import { getTags } from '@/services/getTags'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Tag } from './components/Tag'

/**
 * Props for `FindTags`.
 */
export type FindTagsProps = SliceComponentProps<Content.FindTagsSlice>

/**
 * Component for "FindTags" Slices.
 */
const FindTags = async ({ slice }: FindTagsProps): Promise<JSX.Element> => {
  const { tags } = await getTags()

  return (
    <section
      className="w-screen mt-8 px-6 max-h-[32rem] h-full max-w-[1260px] mx-auto "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h4 className="font-bold text-3xl max-w-[36rem] max-sm:text-2xl opacity-75">
        {slice.primary.title}
      </h4>

      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-10 gap-4">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.uid} />
        ))}
      </div>
    </section>
  )
}

export default FindTags
