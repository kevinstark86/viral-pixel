// @mui
import { Typography, Chip, Box } from '@mui/material';
import {useGetAllTagsQuery} from "@/redux/services/blogPosts";

// ----------------------------------------------------------------------


export default function BlogSidebarPopularTags() {
    const {data, error, isLoading} = useGetAllTagsQuery()
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Popular Tags
      </Typography>

      {data?.docs.map((tag) => (
        <Chip key={tag.name} label={tag.name} sx={{ m: 0.5 }} onClick={() => {}} />
      ))}
    </Box>
  );
}
