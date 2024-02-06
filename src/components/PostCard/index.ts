import { PostCardBox } from './composition/PostCardBox'
import { PostCardContent } from './composition/PostCardContent'
import { PostCardLink } from './composition/PostCardLink'
import { PostCardMetadata } from './composition/PostCardMetadata'
import { PostCardParagraph } from './composition/PostCardParagraph'
import { PostCardRoot } from './composition/PostCardRoot'
import { PostCardTags } from './composition/PostCardTags'
import { PostCardThumbnail } from './composition/PostCardThumbnail'
import { PostCardTitle } from './composition/PostCardTitle'

export const PostCard = {
  Root: PostCardRoot,
  Card: PostCardBox,
  CardLink: PostCardLink,
  Thumbnail: PostCardThumbnail,
  Content: PostCardContent,
  Title: PostCardTitle,
  Paragraph: PostCardParagraph,
  Metadata: PostCardMetadata,
  Tag: PostCardTags,
}
