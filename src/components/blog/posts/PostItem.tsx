// next
import NextLink from 'next/link';
// @mui
import { Stack, Avatar, Typography, Paper, Divider, Link } from '@mui/material';
// routes
import { paths } from '@/routes/paths';
// utils
import { fDate } from '@/utils/formatTime';
// types
import { IBlogPostProps } from '@/types/blog';
// components
import Image from '@/components/common/Image';
import TextMaxLine from '@/components/common/text-max-line';
import wordCounter from "@/utils/my-utils/wordCounter";
import readingTime from "reading-time";
import {postSnippet} from "@/utils/my-utils/postSnippet";
import Gravatar from "@/components/common/gravatar/Gravatar";

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
};

export default function PostItem({ post }: Props) {
    const {title, publishedDate, author, featuredImage: {url}, content, urlSlug} = post;
    // @ts-ignore
    const stats = wordCounter(content)
    const time = readingTime(stats)
    // @ts-ignore
    const description = postSnippet(content, 25)

    const postPath = `/blog/${urlSlug}`;

    return (
        <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Image src={url} alt={title} ratio="1/1" />

            <Stack direction="row" spacing={3} sx={{ p: 3 }}>
                <Stack sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle2">{fDate(publishedDate, 'MMM')}</Typography>

                    <Divider sx={{ mt: 1, mb: 0.5 }} />

                    <Typography variant="h3">{fDate(publishedDate, 'dd')}</Typography>
                </Stack>

                <Stack spacing={1}>
                    <Link component={NextLink} href={postPath} color="inherit">
                        <TextMaxLine variant="h6" persistent>
                            {title}
                        </TextMaxLine>
                    </Link>

                    <TextMaxLine variant="body2" persistent color="text.secondary">
                        {description}
                    </TextMaxLine>

                    <Stack spacing={1.5} direction="row" alignItems="center" sx={{ pt: 1.5 }}>
                        <Gravatar email={author.email} size={40} />
                        <Stack>
                            <Typography variant="body2">{author.name}</Typography>
                            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                                {time.text}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
}