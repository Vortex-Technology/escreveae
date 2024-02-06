import { HtmlHTMLAttributes } from 'react'

interface PostCardParagraphProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  text: string
}

export function PostCardParagraph({ text }: PostCardParagraphProps) {
  return (
    <div className="w-full px-7 text-gray-600">
      <p className="mb-6 text-sm">{text}</p>
    </div>
  )
}
