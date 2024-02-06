import { HtmlHTMLAttributes } from 'react'

interface PostCardMetadataProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  text: string
}

export function PostCardMetadata({ text }: PostCardMetadataProps) {
  return (
    <div className="border-t-2 py-3 px-7 text-gray-400">
      <p className="text-xs">{text}</p>
    </div>
  )
}
