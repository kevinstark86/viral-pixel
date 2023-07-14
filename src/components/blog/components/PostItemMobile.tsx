// @mui
import { Stack, Link } from '@mui/material';
// utils
import { fDate } from '@/utils/formatTime';
// types
import { IBlogPostProps } from '@/types/blog';
// components
import Image from '@/components/common/Image';
import TextMaxLine from '@/components/common/text-max-line';
//
import PostTimeBlock from './PostTimeBlock';
import wordCounter from "@/utils/my-utils/wordCounter";
import readingTime from "reading-time";
import {postSnippet} from "@/utils/my-utils/postSnippet";

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

type CardProps = {
    id: string;
    title: string;
    featuredImage: Image;
    publishedDate: string;
    author: Author;
};
type Props = {
    post: CardProps[];
    onSiderbar?: boolean;
};

export default function PostItemMobile({ post, onSiderbar }: Props) {
    console.log('look at this', post)
    // @ts-ignore
    const { title, publishedDate, featuredImage:{url}, content } = post;
    const stats = wordCounter(content)
    const time = readingTime(stats)
    // @ts-ignore

    return (
        <Stack
            spacing={2}
            direction="row"
            alignItems={{ xs: 'flex-start', md: 'unset' }}
            sx={{ width: 1 }}
        >
            <Image
                alt={title}
                src={url}
                sx={{
                    width: 80,
                    height: 80,
                    flexShrink: 0,
                    borderRadius: 1.5,
                }}
            />

            <Stack spacing={onSiderbar ? 0.5 : 1}>
                <Link color="inherit">
                    <TextMaxLine variant={onSiderbar ? 'subtitle2' : 'h6'}>{title}</TextMaxLine>
                </Link>

                <PostTimeBlock createdAt={fDate(publishedDate)} duration={time.text} />
            </Stack>
        </Stack>
    );
}