// @mui
import { Stack, StackProps, TextField, InputAdornment } from '@mui/material';
// types
import { IAuthorProps } from '@/types/author';
import { IAdvertisementProps } from '@/types/advertisement';
import { IBlogPostProps, IBlogCategoryProps, IBlogTagsProps } from '@/types/blog';
// hooks
import useResponsive from '@/hooks/useResponsive';
// components
import Iconify from '@/components/common/Iconify';
//
import Advertisement from '@/components/advert';
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';
import BlogSidebarRecentPosts from './BlogSidebarRecentPosts';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: IAuthorProps;
  popularTags?: IBlogTagsProps[];
  categories?: IBlogCategoryProps[];
  advertisement?: IAdvertisementProps;
  recentPosts?: {
    list: IBlogPostProps[];
  };
}

export default function BlogSidebar({
  author,
  categories,
  popularTags,
  recentPosts,
  advertisement,
  sx,
  ...other
}: Props) {
  const isMdUp = useResponsive('up', 'md');

  return (
    <>


      <Stack
        spacing={5}
        sx={{

          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {categories && <BlogSidebarCategories/>}

        {recentPosts && <BlogSidebarRecentPosts/>}

        {popularTags && <BlogSidebarPopularTags />}

        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
}
