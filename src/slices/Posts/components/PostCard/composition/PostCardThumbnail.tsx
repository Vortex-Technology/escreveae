import Image from 'next/image'
import { ComponentProps } from 'react'

type PostCardThumbnailProps = ComponentProps<typeof Image>

export function PostCardThumbnail({ ...props }: PostCardThumbnailProps) {
  return (
    <div className="">
      <Image {...props} />
    </div>
  )
}
