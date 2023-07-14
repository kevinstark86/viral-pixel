// @mui
import { Stack, Link, Typography, Box } from '@mui/material';
// types
import { IBlogCategoryProps } from '@/types/blog';

import {useGetAllCategoriesQuery} from "@/redux/services/blogPosts";

// ----------------------------------------------------------------------


export default function BlogSidebarCategories() {
    const {data, error, isLoading} = useGetAllCategoriesQuery()
  return (
    <Stack spacing={1}>
      <Typography variant="h5" gutterBottom>
        Categories
      </Typography>

      {data?.docs.map((category) => (
        <Stack key={category.name} direction="row" alignItems="center">
          <Box sx={{ width: 6, height: 6, mr: 2, bgcolor: 'primary.main', borderRadius: '50%' }} />

          <Link variant="body2" href={""} color="inherit">
            {category.name}
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}
