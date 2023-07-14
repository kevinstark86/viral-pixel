// @mui
import { Stack, Typography } from '@mui/material';
// types
import { IBlogPostProps } from '@/types/blog';
//
import PostItemMobile from '@/components/blog/components/PostItemMobile';
import {useGetPopularGuidesQuery} from "@/redux/services/blogPosts";

// ----------------------------------------------------------------------


export default function BlogSidebarRecentPosts() {
  const {data, error, isLoading} = useGetPopularGuidesQuery()


  return (
    <Stack spacing={3}>
      <Typography variant="h5">Popular Guides</Typography>

      {data?.docs.map((post, index) => (
        <PostItemMobile key={index} post={post} onSiderbar />
      ))}
    </Stack>
  );
}
