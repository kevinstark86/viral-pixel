import type {InferGetStaticPropsType, GetStaticProps, GetStaticPaths} from "next";
import { useState } from 'react';
// @mui
import {
    Stack,
    Avatar,
    Divider,
    Popover,
    Checkbox,
    MenuItem,
    Container,
    Typography,
    IconButton,
    Unstable_Grid2 as Grid,
} from '@mui/material';
// layout
import MainLayout from "@/layouts/main";
// routes
import { paths } from '@/routes/paths';
// utils
import { fDate } from '@/utils/formatTime';
// _mock
import { _blogCareerPosts, _socials } from '@/_mock';
// components
import Iconify from '@/components/common/Iconify';
import Markdown from '@/components/common/markdown';
import CustomBreadcrumbs from '@/components/common/custom-breadcrumbs';
import TextParser from "@/utils/text-parser/TextParser";
//
import NewsletterCareer from '@/components/newsletter/career';
import { BlogCareerLatestPosts } from '@/components/blog/career';
import { PostTags, PostAuthor, PostTimeBlock, PostSocialsShare } from '@/components/blog/components';
import {lazyPostCSS} from "next/dist/build/webpack/config/blocks/css";
import wordCounter from "@/utils/my-utils/wordCounter";
import readingTime from "reading-time";
import Gravatar from "@/components/common/gravatar/Gravatar";
import LatestPosts from "@/components/blog/latest-posts/LatestPosts";

// ----------------------------------------------------------------------

type BlogData = {
    docs: []
}
CareerPostView.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://payload-cms-test-production.up.railway.app/api/posts')
    const data: BlogData = await res.json()

    const paths = data.docs.map((post) => ({
        // @ts-ignore
        params: {id: post.urlSlug},
    }));
    return {paths, fallback: 'blocking'}

}

export const getStaticProps: GetStaticProps<{ data: BlogData }> = async ({params}) => {
    const res = await fetch(`https://payload-cms-test-production.up.railway.app/api/posts?where[urlSlug][equals]=${params?.id}`)
    const data = await res.json()
    return {props: {data}}

}

export default function CareerPostView({data}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { favorited } =_blogCareerPosts[0];

    // @ts-ignore
    const {title, content, createdAt, author, tags, description} = data.docs[0]

    const stats = wordCounter(content)
    const time = readingTime(stats)

    const [favorite, setFavorite] = useState(favorited);

    const [open, setOpen] = useState<HTMLElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFavorite(event.target.checked);
    };

    return (
        <>
            <Divider />

            <Container sx={{ overflow: 'hidden' }}>
                <Grid container spacing={3} justifyContent={{ md: 'center' }}>
                    <Grid xs={12} md={8}>
                        <CustomBreadcrumbs
                            links={[
                                { name: 'Home', href: '/' },
                                { name: 'Blog', href: '/blog' },
                                { name: title },
                            ]}
                            sx={{ my: 5 }}
                        />

                        <Typography variant="h2" component="h1">
                            {title}
                        </Typography>

                        <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ my: 5 }}>
                            <Gravatar email={author.email} size={48} />


                            <Stack spacing={0.5} flexGrow={1}>
                                <Typography variant="subtitle2">{author.name}</Typography>

                                <PostTimeBlock createdAt={fDate(createdAt)} duration={time.text} />
                            </Stack>

                            <Stack direction="row" alignItems="center">
                                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                                    <Iconify icon="carbon:share" />
                                </IconButton>

                                <Checkbox
                                    color="error"
                                    checked={favorite}
                                    onChange={handleChangeFavorite}
                                    icon={<Iconify icon="carbon:favorite" />}
                                    checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                                />
                            </Stack>
                        </Stack>

                        <Typography variant="h5" sx={{ mb: 5 }}>
                            {description}
                        </Typography>

                        <TextParser content={content}/>



                        <PostTags tags={tags} />

                        <PostSocialsShare />

                        <Divider sx={{ mt: 8 }} />

                        <PostAuthor author={author} />
                    </Grid>
                </Grid>
            </Container>

            <Divider />

            <LatestPosts/>

            <NewsletterCareer />

            <Popover
                open={!!open}
                onClose={handleClose}
                anchorEl={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{
                    sx: { width: 220, p: 1 },
                }}
            >
                {_socials.map((social) => (
                    <MenuItem key={social.value} onClick={handleClose} sx={{ typography: 'body2' }}>
                        <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
                        Share via {social.label}
                    </MenuItem>
                ))}
            </Popover>
        </>
    );
}