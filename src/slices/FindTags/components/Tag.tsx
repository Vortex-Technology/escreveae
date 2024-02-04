import { TagType } from '@/services/getTags'
import Link from 'next/link'

interface TagProps {
  tag: TagType
}

export function Tag({ tag }: TagProps) {
  return (
    <Link
      className="w-full px-4 py-2 bg-zinc-200 shadow-lg shadow-black/20 rounded-lg flex flex-col gap-1.5"
      href={`/blog?tag=${tag.uid}`}
    >
      <span className="w-full text-sm font-bold opacity-70 flex items-center justify-center gap-1.5">
        <tag.Icon size={16} />
        {tag.data.name}
      </span>

      <span className="text-xs text-justify font-bold text-orange-700">
        {tag.data.description}
      </span>
    </Link>
  )
}
