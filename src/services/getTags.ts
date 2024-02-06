import { createClient } from '@/prismicio'
import * as LucideIcons from 'lucide-react'
import { TagDocument } from '../../prismicio-types'

export type TagType = TagDocument<string> & {
  Icon: LucideIcons.LucideIcon
}

export async function getTags() {
  const client = createClient()

  const { results } = await client.getByType('tag')

  const tags = results.map((tag) => {
    const Icon = (
      LucideIcons as unknown as { [k: string]: LucideIcons.LucideIcon }
    )[tag.data.icon as string]

    return {
      ...tag,
      Icon,
    }
  }) as TagType[]

  return { tags }
}
