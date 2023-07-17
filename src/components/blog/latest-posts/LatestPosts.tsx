// next
import NextLink from 'next/link';
// @mui
import { Box, Container, Typography, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '@/hooks/useResponsive';
// routes
import { paths } from '@/routes/paths';
// types
import { IBlogPostProps } from '@/types/blog';
// components

// data
import {useGetLatestPostsQuery} from "@/redux/services/blogPosts";
import Iconify from '@/components/common/Iconify';
//
import PostItem from '@/components/blog/posts/PostItem';
import PostItemMobile from '@/components/blog/components/PostItemMobile';

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

export default function LatestPosts() {
    const isMdUp = useResponsive('up', 'md');
    const {data, error, isLoading} = useGetLatestPostsQuery();

    const viewAllBtn = (
        <Button
            component={NextLink}
            href={paths.eLearning.posts}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
        >
            View All
        </Button>
    );

    // @ts-ignore
    // @ts-ignore
    return (
        <Container
            sx={{
                py: { xs: 10, md: 15 },
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'space-between' }}
                sx={{
                    mb: { xs: 8, md: 10 },
                }}
            >
                <Typography variant="h3">Latest Posts</Typography>

                {isMdUp && viewAllBtn}
            </Stack>

            <Box
                sx={{
                    display: 'grid',
                    gap: { xs: 3, md: 4 },
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                }}
            >
                {data?.docs
                    .slice(0, 3)
                    .map((post) =>
                        isMdUp ? (
                            // @ts-ignore
                            <PostItem key={post.id} post={post} />
                        ) : (
                            // @ts-ignore
                            <PostItemMobile key={post.id} post={post} />
                        )
                    )}
            </Box>

            {!isMdUp && (
                <Stack alignItems="center" sx={{ mt: 8 }}>
                    {viewAllBtn}
                </Stack>
            )}
        </Container>
    );
}