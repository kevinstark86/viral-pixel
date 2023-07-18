// next
import NextLink from 'next/link';
// @mui
import { Stack, Link, Avatar, Typography} from '@mui/material';
// routes
import { paths } from '@/routes/paths';
// utils
import { fDate } from '@/utils/formatTime';
import dateFormatter from "@/utils/my-utils/dateFormatter";
import {postSnippet} from "@/utils/my-utils/postSnippet";
import readingTime from 'reading-time';
import wordCounter from "@/utils/my-utils/wordCounter";
// types
import { IBlogPostProps } from '@/types/blog';
// components
import Image from '@/components/common/Image';
import Gravatar from "@/components/common/gravatar/Gravatar";
//
import PostTimeBlock from '@/components/blog/components/PostTimeBlock';


// ----------------------------------------------------------------------

type Author = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
};

type Image = {
    url: string
}

type RichTextNode = {
    text?: string;
    type?: string;
    linkType?: string;
    url?: string | undefined;
    children?: RichTextNode[];
};

type CardProps = {
    id: string;
    title: string;
    featuredImage: Image;
    publishedDate: string;
    author: Author;
    content: RichTextNode;
    urlSlug: string
};

type Props = {
  post: CardProps;
  index: number;
};

export default function PostItem({ post, index }: Props) {
  // const { title, duration, coverImg, author, description, createdAt } = post;
  const {title, publishedDate, author, featuredImage: {url}, content, urlSlug} = post;

  const postPath = `/blog/${urlSlug}`;

  const noImage = index === 1 || index === 4;

  const smallImage = index === 2 || index === 7;

  //utils stuff
    // @ts-ignore
    const stats = wordCounter(content)
    const time = readingTime(stats)
    // @ts-ignore
    const description = postSnippet(content, 25)

  return (
    <Stack
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {!noImage && <Image src={url} alt={title} ratio={smallImage ? '4/3' : '1/1'} />}

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bgcolor: 'background.neutral',
          ...(noImage && {
            bgcolor: 'primary.lighter',
          }),
        }}
      >
        <PostTimeBlock
          createdAt={fDate(publishedDate)}
          duration={time.text}
          sx={{
            ...(noImage && { color: 'grey.500' }),
          }}
        />

        <Link
          component={NextLink}
          href={postPath}
          color="inherit"
          variant="h5"
          sx={{
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          {title}
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            ...(noImage && {
              color: 'grey.600',
            }),
          }}
        >
          {description}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'body2',
            pt: 1.5,
            ...(noImage && {
              color: 'grey.800',
            }),
          }}
        >
          <Gravatar email={author.email} size={40} />
          {author?.name}
        </Stack>
      </Stack>
    </Stack>
  );
}
